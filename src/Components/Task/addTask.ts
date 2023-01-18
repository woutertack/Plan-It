import {
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

import {
  database,
} from '../../lib/Firebase';

export default function addTask() {
  const collectionRef = collection(database, 'projects');
  const titleTask: string = (< HTMLInputElement > document.getElementById('titleTask')).value;
  const deadlineTask: any = (< HTMLInputElement > document.getElementById('calender')).value;
  // const subTask: string = (< HTMLInputElement > document.getElementById('subTask')).value;
  const pointsTask: any = (< HTMLInputElement > document.getElementById('totalPoints')).value;
  const email = localStorage.getItem('emailUser');

  // get checkboxed values and add them to array
  const checkboxes :any = document.getElementsByName('checkbox');

  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
    }
  }

  // add task to firebase
  if (titleTask !== '' && deadlineTask !== '' && pointsTask !== '') {
    addDoc(collectionRef, {
      title: titleTask,
      deadline: deadlineTask,
      createdAt: serverTimestamp(),
      createdBy: email,
      invited_members: result,
      joined_members: '',
      questions: '',
      checklist: false,
      timer: 0,
      points: pointsTask,
    })
      .then(() => {
        window.location.replace('/dashboard');
      })
      .catch((err) => {
        alert(err.message);
      });
  } else {
    alert('Please fill in all fields!');
  }
}
