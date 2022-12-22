import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,

} from 'firebase/firestore';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

import {
  database,
} from '../lib/Firebase';

import { createHeader } from './header';

class DashboardComponent extends Component {
  constructor() {
    super({
      name: 'dashboard',
      routerPath: '/dashboard',
      model: {

      },
    });
  }

  joinTask() {
    const docRef = doc(database, 'projects', 'B9QZYfSyrAeEiTZkniD4');
    // const collectionRef = collection(database, 'projects', 'B9QZYfSyrAeEiTZkniD4');
    const email = localStorage.getItem('emailUser');

    // invitedMembers.push(email);

    updateDoc(docRef, {
      joined_members: arrayUnion(email),
      invited_members: arrayRemove(email),
    })
      .then(() => {
        console.log('A New Document Field has been added to an existing document');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const mainContainer = document.createElement('main');
    mainContainer.appendChild(createHeader());

    const mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';

    const yourProjectsContainer = document.createElement('div');
    yourProjectsContainer.className = 'yourProjectsContainer';

    yourProjectsContainer.appendChild(
      Elements.createP({
        textContent: 'Your project(s)',
        className: 'label',
      }),
    );

    // GETTING YOUR PROJECTS FROM FIRESTORE
    const getModelInfo = (item: any) => {
      const nameTask = document.createElement('h3');

      const deadline = document.createElement('h4');
      const createdBy = document.createElement('h5');
      const points = document.createElement('h4');
      const taskDisplay = document.createElement('div');

      nameTask.innerHTML = ` ${item.data().title}`;
      deadline.innerHTML = `Deadline: ${item.data().deadline}`;
      points.innerHTML = `${item.data().points} points`;
      if (item.data().createdBy === localStorage.getItem('emailUser')) {
        createdBy.innerHTML = 'Created by: You';
      } else {
        createdBy.innerHTML = `Created by: ${item.data().createdBy}`;
      }

      taskDisplay.appendChild(nameTask);

      taskDisplay.appendChild(deadline);
      taskDisplay.appendChild(points);
      taskDisplay.appendChild(createdBy);

      // let users delete their own task NOT FINISHED YET

      return taskDisplay;
    };
    const email = localStorage.getItem('emailUser');
    const collectionRef = collection(database, 'projects');

    const q = query(collectionRef, where('createdBy', '==', email));
    getDocs(q)
      .then((response) => {
        (response.docs.forEach((item) => {
          yourProjectsContainer.appendChild(
            Elements.createButtonSecondary({
              className: 'taskInfo',
              onClick: () => {
                localStorage.setItem('taskId', item.id);
                window.location.replace('/task');
              },
              children: [
                getModelInfo(item),
              ],
            }),
          );
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
    mainDiv.appendChild(yourProjectsContainer);

    // GETTING PROJECTS YOU HAVE JOINED FROM FIRESTORE
    const joinedContainer = document.createElement('div');
    joinedContainer.className = 'joinedContainer';

    joinedContainer.appendChild(
      Elements.createP({
        textContent: 'Joined project(s)',
        className: 'label',
      }),
    );

    const joined = query(collectionRef, where('joined_members', 'array-contains', email));

    getDocs(joined)
      .then((response) => {
        (response.docs.forEach((item) => {
          joinedContainer.appendChild(
            Elements.createButtonSecondary({
              className: 'taskInfo',
              onClick: () => {
                this.joinTask();
                localStorage.setItem('taskId', item.id);
                window.location.replace('/task');
              },
              children: [
                getModelInfo(item),
              ],
            }),
          );
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
    mainDiv.appendChild(joinedContainer);
    // GETTING PROJECTS YOU HAVE JOINED FROM FIRESTORE
    const invitedContainer = document.createElement('div');
    invitedContainer.className = 'invitedContainer';

    invitedContainer.appendChild(
      Elements.createP({
        textContent: 'Invited project(s)',
        className: 'label',
      }),
    );

    const invited = query(collectionRef, where('invited_members', 'array-contains', email));
    getDocs(invited)
      .then((response) => {
        (response.docs.forEach((item) => {
          invitedContainer.appendChild(
            Elements.createButtonSecondary({
              className: 'taskInfo',
              onClick: () => {
                this.joinTask();
                localStorage.setItem('taskId', item.id);
                // window.location.replace('/task');
              },
              children: [
                getModelInfo(item),
              ],
            }),
          );
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
    mainDiv.appendChild(invitedContainer);
    mainContainer.appendChild(mainDiv);

    const createTaskContainerBtn = document.createElement('div');
    createTaskContainerBtn.className = 'divCreateTask';

    createTaskContainerBtn.appendChild(
      Elements.createButton({
        textContent: 'Create new task',
        className: 'createTaskBtn',
        onClick: () => {
          window.location.replace('./create-task');
        },
      }),
    );

    mainContainer.appendChild(createTaskContainerBtn);
    return mainContainer;
  }
}

export default DashboardComponent;
