import {
  getDocs,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

import {
  database,
} from '../lib/Firebase';
import { createHeader } from './header';

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
  createTask() {
    const collectionRef = collection(database, 'projects');
    const titleTask: string = (< HTMLInputElement > document.getElementById('titleTask')).value;
    const deadlineTask: any = (< HTMLInputElement > document.getElementById('calender')).value;
    // const subTask: string = (< HTMLInputElement > document.getElementById('subTask')).value;
    const pointsTask: any = (< HTMLInputElement > document.getElementById('totalPoints')).value;
    const email = localStorage.getItem('emailUser');

    // get checkboxed values and add them to array
    const checkboxes :any = document.getElementsByName('checkbox');

    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result.push(checkboxes[i].value);
      }
    }

    // add task to firebase
    if (titleTask !== '' && deadlineTask !== '' && pointsTask !== '') {
      addDoc(collectionRef, {
        title: titleTask,
        deadline: deadlineTask,
        createdAt: serverTimestamp(),
        createdBy: email,
        invited_members: result,
        joined_members: '',
        questions: '',
        checklist: false,
        timer: 0,
        points: pointsTask,
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);

          window.location.replace('/dashboard');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert('Please fill in all fields!');
    }
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
    // window.addEventListener('load', loadMembers());
    const createTaskContainerBtn = document.createElement('div');
    createTaskContainerBtn.className = 'divCreateTask';

    // const checkboxValues = document.querySelector('.checkbox:checked');
    createTaskContainerBtn.appendChild(
      Elements.createButton({
        textContent: 'Create task',
        className: 'createTaskBtn',
        onClick: () => {
          this.createTask();

          // console.log(checkboxValues);
        },

      }),
    );
    mainContainer.appendChild(createTaskContainerBtn);

    return mainContainer;
  }
}

export default CreateTaskComponent;
