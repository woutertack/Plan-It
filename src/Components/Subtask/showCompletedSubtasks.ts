/* eslint-disable @typescript-eslint/indent */
import {
  collection,
  doc,
  query,
  where,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

export default function showCompletedSubtasks() {
  const taskId = localStorage.getItem('taskId') || '';
  const collectionRef = collection(database, 'subtasks');

  const docRef = doc(database, 'projects', taskId);
  let completedSubtasks : number = 0;
  let totalSubtasks = 0;

  // Get all subtasks for the task
  const q = query(collectionRef, where('task', '==', taskId));
  onSnapshot(q, (snapshot) => {
    totalSubtasks = snapshot.size;
      snapshot.forEach((subtask) => {
        if (subtask.data().completed === true) {
          // eslint-disable-next-line no-plusplus
          completedSubtasks++;
        }
      });

      const displayContainer = document.getElementById('subtask-display') as HTMLElement;
      displayContainer.innerHTML = `${completedSubtasks} / ${totalSubtasks}`;

      // if all subtasks are completed, change the task to completed
      if (completedSubtasks === totalSubtasks) {
        updateDoc(docRef, {
          checklist: true,
        })
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        updateDoc(docRef, {
          checklist: false,
        })
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
}
