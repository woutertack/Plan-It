import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,

} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

// eslint-disable-next-line class-methods-use-this
export default function joinTask() {
  const getTaskId = localStorage.getItem('taskId') || '';

  const docRef = doc(database, 'projects', getTaskId);

  const email = localStorage.getItem('emailUser');

  // invitedMembers.push(email);

  updateDoc(docRef, {
    joined_members: arrayUnion(email),
    invited_members: arrayRemove(email),
  })
    .then(() => {
      window.location.replace('/task');
    })
    .catch((error) => {
      console.log(error);
    });
}
