import {
  getDocs,
  collection,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

import {
  database,
} from '../lib/Firebase';
import { createHeader } from './header';
import { logout } from './Authentication/Auth';

class CreateTaskComponent extends Component {
  constructor() {
    super({
      name: 'create-task',
      routerPath: '/create-task',
      model: {

      },
    });
  }

  createChatroom() {
    const collectionRef = collection(database, 'projects');
    const titleTask: string = (< HTMLInputElement > document.getElementById('titleTask')).value;

    addDoc(collectionRef, {
      title: titleTask,
      deadline: timestamp,
      createdAt: serverTimestamp(),
      members: invitedMembers,
      questions: '',
      checklist: false,
      timer: 0,
    })
      .then(() => {
        alert('Chatroom created');
        location.replace('/dashboard');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

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
        className: 'taskTitle',
        id: 'taskTitle',
        placeholder: 'Title task',
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
        value: '2018-07-22',
        min: '2018-01-01',
        max: '2018-12-31',

      }),
    );
    mainContainer.appendChild(createTaskContainer);

    return mainContainer;
  }
}

export default CreateTaskComponent;
