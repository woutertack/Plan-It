/* eslint-disable @typescript-eslint/indent */
import {
  collection,
  addDoc,
} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

  // this will add the created subtask to firebase
  export default function addSubtask() {
    const collectionRef: any = collection(database, 'subtasks');
    const taskId = localStorage.getItem('taskId') || '';
    const subtask = (<HTMLInputElement | null>document.getElementById('subtaskName'))?.value;

    if (subtask !== '') {
    addDoc(collectionRef, {

        task: taskId,
        title: subtask,
        description: '',
        deadline: '',
        completed: false,
        questions: [],
        totalTime: 0,
      })
      .then(() => {

      })
      .catch((err) => {
        alert(err.message);
      });
    } else {
      alert('Please give a name to your subtask!');
    }
  }
