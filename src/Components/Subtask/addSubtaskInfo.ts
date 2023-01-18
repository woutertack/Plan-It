/* eslint-disable @typescript-eslint/indent */
import {
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

  // eslint-disable-next-line class-methods-use-this
  export default function addSubtaskInfo() {
    const subtaskId = localStorage.getItem('subtaskId') || '';

    const docRef = doc(database, 'subtasks', subtaskId);

    const descriptionInput = (<HTMLInputElement | null>document.getElementById('inputField'))?.value;
    const deadlineInput = (<HTMLInputElement | null>document.getElementById('deadline'))?.value;
    const savedTimer = localStorage.getItem('timer');
    const questionText = (<HTMLInputElement | null>document.getElementById('questions'))?.value;
    const user = localStorage.getItem('emailUser') || '';
    const createdOn = new Date();
    const question = {
      questionInput: questionText,
      createdBy: user,
      createdAt: createdOn,
  };
    const cb = document.querySelector('#completed') as HTMLInputElement;
    const completedChecked = cb?.checked;

    // check if description is changed and if there is a question
    if (descriptionInput === undefined && questionText !== '') {
      updateDoc(docRef, {
        deadline: deadlineInput,
        totalTime: savedTimer,
        questions: arrayUnion(question),
        completed: completedChecked,
      })
      .then(() => {
          alert('Subtask updated');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (descriptionInput === undefined && questionText === '') {
    updateDoc(docRef, {
      deadline: deadlineInput,
      totalTime: savedTimer,
      completed: completedChecked,
    })
    .then(() => {
        alert('Subtask updated');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    } else if (descriptionInput !== undefined && questionText === '') {
      updateDoc(docRef, {
        description: descriptionInput,
        deadline: deadlineInput,
        totalTime: savedTimer,
        completed: completedChecked,
      })
      .then(() => {
          alert('Subtask updated');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
      updateDoc(docRef, {
        description: descriptionInput,
        deadline: deadlineInput,
        totalTime: savedTimer,
        questions: arrayUnion(question),
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
  }
