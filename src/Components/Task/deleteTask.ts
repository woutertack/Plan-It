import {
  doc,
  deleteDoc,
} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

export default function deleteTask(taskId: any) {
  const docRef = doc(database, 'projects', taskId);

  deleteDoc(docRef)
    .then(() => {
      window.location.replace('/dashboard');
    })
    .catch((error) => {
      console.log(error);
    });
}
