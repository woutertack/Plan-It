/* eslint-disable @typescript-eslint/indent */
import {

  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,

} from 'firebase/firestore';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

import {
  database,
} from '../../lib/Firebase';

import {
  createHeader,
} from '../header';

import addSubtask from '../Subtask/addSubtask';
import addSubtaskInfo from '../Subtask/addSubtaskInfo';
import deleteSubtask from '../Subtask/deleteSubtask';
import showCompletedSubtasks from '../Subtask/showCompletedSubtasks';

class TaskComponent extends Component {
  constructor() {
    super({
      name: 'task',
      routerPath: '/task',
      model: {

      },

    });
  }

  // eslint-disable-next-line class-methods-use-this
  clearInput() {
    const getValue = document.getElementById('subtaskName') as HTMLInputElement || null;

    if (getValue?.value !== '') {
      getValue.value = '';
    }
  }

  render() {
    showCompletedSubtasks();
    const mainContainer = document.createElement('main');
    mainContainer.appendChild(createHeader());

    const taskcontainer = document.createElement('div');
    taskcontainer.className = 'taskcontainer';

    // get the item data throught id
    const taskId = localStorage.getItem('taskId') || '';

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
          addSubtask();

          this.clearInput();
        },
      }),
    );

    mainContainer.appendChild(createSubTaskcontainer);
    const subtaskContainer = document.createElement('div');
    subtaskContainer.appendChild(
      Elements.createP({
        textContent: 'Click on a subtask for more info',
        className: 'label',
      }),
    );
    subtaskContainer.appendChild(
      Elements.createP({
        textContent: 'COMPLETION',
        className: 'completion',
      }),
    );
    subtaskContainer.appendChild(
      Elements.createP({
        className: 'subtask-display',
        id: 'subtask-display',

      }),
    );
    mainContainer.appendChild(subtaskContainer);
    const showSubtaskContainer = document.createElement('div');
    showSubtaskContainer.className = 'showSubtaskContainer';

    const getModelInfo = (item: any) => {
      // get date timestamp
      const itemId = item.id;

      // eslint-disable-next-line no-param-reassign
      item = item.data();

      const newElement = document.createElement('button');
      newElement.setAttribute('id', 'myBtn');
      newElement.className = 'subtaskBtn';
      newElement.innerHTML = item.title;

      // show icon if task is completed
      if (item.completed === true) {
        newElement.style.backgroundColor = 'rgb(97 234 97)';
       }

      const deleteBtn = document.createElement('p');
      deleteBtn.className = 'deleteBtn';
      deleteBtn.innerHTML = 'X';

      deleteBtn.addEventListener('click', (event) => {
        event?.stopPropagation();
        deleteSubtask(itemId);
     });
      newElement.appendChild(deleteBtn);

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
          description.className = 'modal-input-description';
          description.setAttribute('id', 'description');
          description.textContent = item.description;
          descriptionContainer.appendChild(description);
          const editButton = document.createElement('button');
          editButton.className = 'editButton';
          editButton.innerHTML = 'Edit';
          editButton.addEventListener('click', () => {
            const inputField : any = document.createElement('textarea');
            inputField.value = description.textContent;
            inputField.className = 'modal-input-description';
            inputField.setAttribute('id', 'inputField');
            descriptionContainer.replaceChild(inputField, description);
            editButton.style.display = 'none'; // Hide the editButton
          });
          descriptionContainer.appendChild(editButton);
        } else {
          const inputField = document.createElement('textarea');
          inputField.value = '';
          inputField.setAttribute('id', 'inputField');
          inputField.className = 'modal-input-description';
          descriptionContainer.appendChild(inputField);
        }

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
            value: item.deadline,
          }),
        );
          // create a timer
          const timerLabel = Elements.createP({
            className: 'modal-label',
            textContent: 'Timer:',
            id: 'timer',
          });

          let timerInterval : any;
          let timer: any = +item.totalTime;

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

                // Store the value of timer in the local storage to push it to firebase
                localStorage.setItem('timer', timer);
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
          Elements.createTextarea({
            className: 'modal-input-questions',
            id: 'questions',
            value: '',
          }),
        );
          // check if there are questions if so display them
        if (item.questions && item.questions.length > 0) {
          // Iterate the questions array
          let i : number = 1;
          item.questions.forEach((question: {
            createdAt: any;createdBy: any; questionInput: any; }) => {
            // Create an HTML element to display the question
            const questionElement = document.createElement('div');
            const date = question.createdAt.toDate().toLocaleString();
            questionElement.innerHTML = `<p class='modal-label'>Question ${i}:</p>
             <p class='textQuestion'>${question.questionInput}</p>
           
             <p class="infoQuestion">By: ${question.createdBy}, ${date}</p>`;
            // Append the question element to the webpage
            modalForm.appendChild(questionElement);

            // eslint-disable-next-line no-plusplus
            i++;
          });
        }

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
            checked: item.completed,
          }),
        );
        modalForm.appendChild(
          Elements.createButton({
            className: 'modal-button',
            id: 'save-button',
            textContent: 'save',
            onClick: () => {
              addSubtaskInfo();
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
      // eslint-disable-next-line array-callback-return
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
