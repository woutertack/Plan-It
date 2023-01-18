import {
  getDocs,
  collection,
} from 'firebase/firestore';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

import {
  database,
} from '../../lib/Firebase';
import { createHeader } from '../header';
import addTask from './addTask';

class CreateTaskComponent extends Component {
  constructor() {
    super({
      name: 'create-task',
      routerPath: '/create-task',
      model: {

      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const mainContainer = document.createElement('div');

    // create header
    mainContainer.appendChild(createHeader());

    const createTaskContainer = document.createElement('div');
    createTaskContainer.className = ('createTaskContainer');

    createTaskContainer.appendChild(
      Elements.createP({
        textContent: 'Create task here!',
        className: 'CreateTaskText',
      }),
    );

    // title task
    createTaskContainer.appendChild(
      Elements.createP({
        textContent: 'Title task',
        className: 'label',
      }),
    );
    createTaskContainer.appendChild(
      Elements.createInput({
        className: 'titleTask',
        id: 'titleTask',
        placeholder: 'Title task',
        required: true,
      }),
    );

    // deadline
    createTaskContainer.appendChild(
      Elements.createP({
        textContent: 'Deadline',
        className: 'label',
      }),
    );

    createTaskContainer.appendChild(
      Elements.createCalendar({
        className: 'calendar',
        id: 'calender',
        type: 'date',
        min: '2023-01-01',
        max: '2025-12-31',
        required: true,
      }),
    );

    createTaskContainer.appendChild(
      Elements.createP({
        textContent: 'Total points',
        className: 'label',
      }),
    );

    createTaskContainer.appendChild(
      Elements.createInput({
        className: 'totalPoints',
        id: 'totalPoints',
        type: 'number',
        placeholder: 'Give a number',
        required: true,
      }),
    );

    createTaskContainer.appendChild(
      Elements.createP({
        textContent: 'Invite people',
        className: 'label',
      }),
    );

    // members to invite
    const loadMembers = async () => {
      try {
        const email = localStorage.getItem('emailUser');
        const querySnapshot = await getDocs(collection(database, 'users'));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
          if (doc.data().userEmail !== email) {
            const usercontainer = document.createElement('div');
            usercontainer.className = 'usercontainer';
            usercontainer.appendChild(
              Elements.createInput({
                type: 'checkbox',
                className: 'checkbox',
                id: 'checkbox',
                name: 'checkbox',
                value: doc.data().userEmail,
              }),
            );
            usercontainer.appendChild(
              Elements.createP({
                textContent: doc.data().userEmail,
                type: 'checkbox',

              }),
            );
            createTaskContainer.appendChild(usercontainer);
          }
        });
      } catch {
        console.log('error loading members');
      }
    };
    loadMembers();
    mainContainer.appendChild(createTaskContainer);

    const createTaskContainerBtn = document.createElement('div');
    createTaskContainerBtn.className = 'divCreateTask';

    createTaskContainerBtn.appendChild(
      Elements.createButton({
        textContent: 'Create task',
        className: 'createTaskBtn',
        onClick: () => {
          addTask();
        },

      }),
    );
    mainContainer.appendChild(createTaskContainerBtn);

    return mainContainer;
  }
}

export default CreateTaskComponent;
