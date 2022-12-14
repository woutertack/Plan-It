import {
  getDocs,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
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
    const subTask: string = (< HTMLInputElement > document.getElementById('subTask')).value;
    const email = localStorage.getItem('emailUser');
    // add task to firebase
    addDoc(collectionRef, {
      title: titleTask,
      deadline: deadlineTask,
      createdAt: serverTimestamp(),
      createdBy: email,
      invited_members: '',
      joined_members: '',
      questions: '',
      checklist: false,
      timer: 0,
      points: 0,
    })
      .then((docRef) => {
        // add subtasks to firebase
        console.log('Document written with ID: ', docRef.id);
        const collectionRefSubtask = collection(database, 'projects', docRef.id, 'subtasks');
        addDoc(collectionRefSubtask, {
          title: subTask,

        })
          .then(() => {
            window.location.replace('/dashboard');
          })
          .catch((err) => {
            alert(err.message);
          });
        // window.location.replace('/dashboard');
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
        className: 'titleTask',
        id: 'titleTask',
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
        min: '2023-01-01',
        max: '2025-12-31',

      }),
    );

    createTaskContainer.appendChild(
      Elements.createInput({
        className: 'titleTask',
        id: 'subTask',
        placeholder: 'Title subtask',
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
        const querySnapshot = await getDocs(collection(database, 'users'));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
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
        });
      } catch {
        console.log('error loading members');
      }
    };

    window.addEventListener('load', loadMembers());
    const createTaskContainerBtn = document.createElement('div');
    createTaskContainerBtn.className = 'divCreateTask';

    function getcheckboxes() {
      const checkboxes = document.getElementsByName('checkbox');

      let result = [];

      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          result.push(checkboxes[i].value)
          // result += `${checkboxes[i].value
          // } `;
        }
      }
      console.log(result);
    }

    // const checkboxValues = document.querySelector('.checkbox:checked');
    createTaskContainerBtn.appendChild(
      Elements.createButton({
        textContent: 'Create task',
        className: 'createTaskBtn',
        onClick: () => {
          // this.createTask();
          getcheckboxes();
          // console.log(checkboxValues);
        },

      }),
    );
    mainContainer.appendChild(createTaskContainerBtn);
    mainContainer.appendChild(createTaskContainer);

    return mainContainer;
  }
}

export default CreateTaskComponent;
