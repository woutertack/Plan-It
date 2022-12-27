import {
  getDocs,
  collection,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collectionGroup,

} from 'firebase/firestore';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

import {
  database,
} from '../lib/Firebase';

import { createHeader } from './header';

class TaskComponent extends Component {
  place: HTMLElement;

  title: string;

  cardArray: Card[];

  input?: HTMLInputElement;

  div?: HTMLDivElement;

  h2?: HTMLHeadingElement;

  button?: HTMLButtonElement;

  todoListElement?: string | HTMLElement;

  constructor() {
    super({
      name: 'task',
      routerPath: '/task',
      model: {

      },

    });
  }

  addSubtask() {
    const inputValue = document.getElementById('subtaskName')?.value;

    // Create a new element to display the text
    const newElement = document.createElement('button');
    newElement.setAttribute('id', 'myBtn');
    newElement.innerHTML = 'test';

    // create a modal for the subtask
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'myModal');

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeModal = document.createElement('span');
    closeModal.className = 'close';
    closeModal.innerHTML = '&times;';

    const infoModal = document.createElement('p');
    infoModal.innerHTML = 'This is a modal';

    modalContent.appendChild(closeModal);
    modalContent.appendChild(infoModal);

    modal.appendChild(modalContent);
    newElement.appendChild(modal);

    // Add the new element to the page
    document.getElementById('showSubtask')?.appendChild(newElement);
  }

  render() {
    const mainContainer = document.createElement('main');
    mainContainer.appendChild(createHeader());

    const taskcontainer = document.createElement('div');
    taskcontainer.className = 'taskcontainer';

    // get the item data throught id
    const taskId = localStorage.getItem('taskId') || '';

    // const collectionRef = collection(database, 'projects');
    const docRef = doc(database, 'projects', taskId);

    getDoc(docRef)
      .then((item) => {
        taskcontainer.appendChild(
          Elements.createP({
            className: 'CreateTaskText',
            textContent: item.data()?.title,
          }),
        );
      })
      .catch((err) => {
        console.log(err.message);
      });

    mainContainer.appendChild(taskcontainer);

    // Add subtasks
    const createSubTaskcontainer = document.createElement('div');
    createSubTaskcontainer.className = 'createSubTaskcontainer';

    createSubTaskcontainer.appendChild(
      Elements.createInput({
        className: 'subtaskName',
        id: 'subtaskName',
        placeholder: 'subtask name ...',
      }),
    );

    createSubTaskcontainer.appendChild(
      Elements.createButton({
        className: 'Add',
        textContent: 'Add',
        onClick: () => { this.addSubtask(); },
      }),
    );

    mainContainer.appendChild(createSubTaskcontainer);
    const showSubtaskContainer = document.createElement('div');
    showSubtaskContainer.appendChild(
      Elements.createContainer({
        id: 'showSubtask',
      }),
    );

    mainContainer.appendChild(showSubtaskContainer);
    return mainContainer;
  }
}

export default TaskComponent;
