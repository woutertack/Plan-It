/* eslint-disable @typescript-eslint/indent */
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
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

import {
  database,
} from '../lib/Firebase';

import {
  createHeader,
} from './header';

class TaskComponent extends Component {
  constructor() {
    super({
      name: 'task',
      routerPath: '/task',
      model: {

      },

    });
  }

  // this will add the created subtask to firebase
  addSubtask() {
    const collectionRef: any = collection(database, 'subtasks');
    const taskId = localStorage.getItem('taskId') || '';
    const subtask = document.getElementById('subtaskName')?.value;

    addDoc(collectionRef, {

        task: taskId,
        title: subtask,
        description: '',
        deadline: '',
        completed: false,
        questions: '',
        totalTime: 0,
      })
      .then(() => {
        alert('Subtask added');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  addSubtaskInfo() {
    const subtaskId = localStorage.getItem('subtaskId') || '';

    const docRef = doc(database, 'subtasks', subtaskId);

    const descriptionInput = document.getElementById('inputField')?.value;
    const deadlineInput = document.getElementById('deadline')?.value;

    const questionInput = document.getElementById('questions')?.value;

    const cb = document.querySelector('#completed');
    const completedChecked = cb?.checked;

    updateDoc(docRef, {
      description: descriptionInput,
      deadline: deadlineInput,
      totalTime: 0,
      questions: questionInput,
      completed: completedChecked,

    })
    .then(() => {
        alert('Subtask updated');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  clearInput() {
    const getValue = document.getElementById('subtaskName') || '';
    if (getValue.value != '') {
      getValue.value = '';
    }
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
            className: 'taskTitle',
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
        onClick: () => {
          // this.createSubtask();
          this.addSubtask();

          this.clearInput();
        },
      }),
    );

    mainContainer.appendChild(createSubTaskcontainer);
    const SubtaskContainer = document.createElement('div');
    SubtaskContainer.appendChild(
      Elements.createP({
        textContent: 'Click on a subtask for more info',
        className: 'label',
      }),
    );
    mainContainer.appendChild(SubtaskContainer);
    const showSubtaskContainer = document.createElement('div');
    showSubtaskContainer.className = 'showSubtaskContainer';
    showSubtaskContainer.appendChild(
      Elements.createContainer({
        id: 'showSubtask',
        className: 'showSubtask',
      }),
    );
    const getModelInfo = (item: any) => {
      // get date timestamp
      const itemId = item.id;

      item = item.data();
      const newElement = document.createElement('button');
      newElement.setAttribute('id', 'myBtn');
      newElement.className = 'subtaskBtn';
      newElement.innerHTML = item.title;

      newElement.addEventListener('click', () => {
        // add the subtask id to localstorage THIS DOESNT WORK
        localStorage.setItem('subtaskId', itemId);

        // add the title to localstorage
        localStorage.setItem('subtaskTitle', item.title);
        // Create the modal element
        const modal = document.createElement('div');
        modal.setAttribute('id', 'myModal');
        modal.className = 'modal';

        // create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // create modal title and close button
        modalContent.appendChild(
          Elements.createP({
            className: 'close',
            textContent: 'X',
          }),
        );
        modalContent.appendChild(
          Elements.createP({
            className: 'modal-title',
            textContent: item.title,
          }),
        );

        // create modal form
        const modalForm = document.createElement('div');
        modalForm.className = 'modal-form';

        modalForm.appendChild(
          Elements.createP({
            className: 'modal-label',
            textContent: 'Description:',
          }),
        );
        const descriptionContainer = document.createElement('div');

        if (item.description) {
          const description = document.createElement('p');
          description.className = 'modal-input';
          description.setAttribute('id', 'description');
          description.textContent = item.description;
          descriptionContainer.appendChild(description);
          const editButton = document.createElement('button');
          editButton.innerHTML = 'Edit';
          editButton.addEventListener('click', () => {
            const inputField : any = document.createElement('input');
            inputField.type = 'text';
            inputField.value = description.textContent;
            inputField.className = 'modal-input';
            inputField.setAttribute('id', 'inputField');
            descriptionContainer.replaceChild(inputField, description);
            editButton.style.display = 'none'; // Hide the editButton
          });
          descriptionContainer.appendChild(editButton);
        } else {
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.value = '';
          inputField.setAttribute('id', 'inputField');
          inputField.className = 'modal-input';
          descriptionContainer.appendChild(inputField);
        }

      // const saveButton = document.createElement('button');
      // saveButton.innerHTML = 'Save';
      // saveButton.addEventListener('click', () => {
      //   description.textContent = inputField.value;
      //   descriptionContainer.replaceChild(description, inputField);
      // });
      // descriptionContainer.appendChild(saveButton);

    modalForm.appendChild(descriptionContainer);

        modalForm.appendChild(
          Elements.createP({
            className: 'modal-label',
            textContent: 'Deadline:',
          }),
        );
        modalForm.appendChild(
          Elements.createInput({
            className: 'modal-input',
            id: 'deadline',
            type: 'date',
          }),
        );
          // create a timer
          const timerLabel = Elements.createP({
            className: 'modal-label',
            textContent: 'Timer:',
            id: 'timer',
          });

          let timerInterval : any;
          let timer = 0;

          const startButton = Elements.createButton({
            className: 'start-button',
            textContent: 'Start',
            id: 'start-button',
            type: 'button',
            onClick: () => {
              if (startButton.textContent === 'Start') {
                timerInterval = setInterval(() => {
                  timer += 1;

                  const hours = Math.floor(timer / 3600);
                  const minutes = Math.floor((timer % 3600) / 60);
                  const seconds = timer % 60;

                  timerLabel.textContent = `Timer: ${hours.toString().padStart(2, '0')}:${minutes
                    .toString()
                    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }, 1000);
                startButton.textContent = 'Stop';
              } else {
                clearInterval(timerInterval);
                startButton.textContent = 'Start';
              }
            },
          });

          modalForm.appendChild(timerLabel);
          modalForm.appendChild(startButton);

        modalForm.appendChild(
          Elements.createP({
            className: 'modal-label',
            textContent: 'Questions:',
          }),
        );

        modalForm.appendChild(
          Elements.createInput({
            className: 'modal-input',
            id: 'questions',
            type: 'text',
            value: '',
          }),
        );

        modalForm.appendChild(
          Elements.createP({
            className: 'modal-label',
            textContent: 'Check if completed:',
          }),
        );

        modalForm.appendChild(
          Elements.createInput({
            className: 'modal-input',
            id: 'completed',
            type: 'checkbox',
            value: 'false',
          }),
        );
        modalForm.appendChild(
          Elements.createButton({
            className: 'modal-button',
            id: 'save-button',
            textContent: 'save',
            onClick: () => {
                console.log(document.getElementById('inputField')?.value);
              console.log(document.getElementById('deadline')?.value);

              console.log(timer);
              console.log(document.getElementById('questions')?.value);
              const cb = document.querySelector('#completed');
            console.log(cb?.checked);
              this.addSubtaskInfo();
            },
          }),
        );

        modalContent.appendChild(modalForm);

        modal.appendChild(modalContent);

        // Append the modal to the body
        document.body.appendChild(modal);

        // Get the 'close' button
        const closeButton = modal.querySelector('.close');

        // Add a click event listener to the 'close' button
        closeButton?.addEventListener('click', () => {
          // Hide the modal
          modal.style.display = 'none';
        });

        // Add a click event listener to the modal background
        // I DISABLED THIS BCS IT INTERFEREs WITH USING THE INPUT FIELDS
        // modal.addEventListener('click', (event) => {
        //   // If the user clicked on the modal background (not the modal content), hide the modal
        //   if (event.target === modal) {
        //     modal.style.display = 'none';
        //   }
        // });

        // Display the modal
        modal.style.display = 'block';
      });

      // get the item data throught id
      document.getElementById('showSubtask')?.appendChild(newElement);
      return newElement;
    };
    const collectionRef = collection(database, 'subtasks');

    const q = query(collectionRef, where('task', '==', taskId));
    onSnapshot(q, (response) => {
      response.docChanges().map((item: any) => {
        if (item.type === 'added') {
          showSubtaskContainer.appendChild(
            Elements.createContainer({
              className: 'showSubtask',
              id: 'showSubtask',
              children: [
                getModelInfo(item.doc),
              ],
            }),
          );
        }
      });
    });

    mainContainer.appendChild(showSubtaskContainer);
    return mainContainer;
  }
}

export default TaskComponent;
