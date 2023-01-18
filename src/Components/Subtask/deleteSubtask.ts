/* eslint-disable @typescript-eslint/indent */
import {
  doc,
  deleteDoc,
} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

export default function deleteSubtask(itemId: any) {
  const docRef = doc(database, 'subtasks', itemId);

  deleteDoc(docRef)
  .then(() => {
    window.location.replace('/task');
  })
  .catch((error) => {
    console.log(error);
  });
 }
