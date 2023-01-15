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

  // eslint-disable-next-line class-methods-use-this
  joinTask() {
    const getTaskId = localStorage.getItem('taskId');

    // this works but gives error
    const docRef = doc(database, 'projects', getTaskId);

    // const collectionRef = collection(database, 'projects', 'B9QZYfSyrAeEiTZkniD4');
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

  deleteTask(taskId: any) {
    const docRef = doc(database, 'projects', taskId);

    deleteDoc(docRef)
      .then(() => {
        alert('Task deleted successfully');
        window.location.replace('/dashboard');
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
    // make a div for your projects
    const yourProjectsInfo = document.createElement('div');
    yourProjectsInfo.className = 'yourProjectsInfo';

    // GETTING YOUR PROJECTS FROM FIRESTORE
    const getModelInfo = (item: any) => {
      const taskId = item.id;
      const nameTask = document.createElement('h3');
      nameTask.className = 'nameTask';

      const deadline = document.createElement('h4');
      const createdBy = document.createElement('h5');
      const points = document.createElement('h4');
      const taskDisplay = document.createElement('div');

      nameTask.innerHTML = ` ${item.data().title}`;
      deadline.innerHTML = `Deadline: ${item.data().deadline}`;
      points.innerHTML = `${item.data().points} points`;

      // if its your task you can delete it
      if (item.data().createdBy === localStorage.getItem('emailUser')) {
        createdBy.innerHTML = 'Created by: You';

        const deleteTask = document.createElement('button');
        deleteTask.className = 'deleteTask';
        deleteTask.innerHTML = 'Delete task';

        deleteTask.addEventListener('click', (event) => {
          event?.stopPropagation();
          this.deleteTask(taskId);
        });

        createdBy.appendChild(deleteTask);
      } else {
        createdBy.innerHTML = `Created by: ${item.data().createdBy}`;
      }

      //       taskDisplay.appendChild(nameTask);
      // taskDisplay.appendChild(deleteTask);
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
          yourProjectsInfo.appendChild(
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

    yourProjectsContainer.appendChild(yourProjectsInfo);
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
    // make a div for projects you can join
    const joinedInfo = document.createElement('div');
    joinedInfo.className = 'joinedInfo';

    const joined = query(collectionRef, where('joined_members', 'array-contains', email));

    getDocs(joined)
      .then((response) => {
        (response.docs.forEach((item) => {
          joinedInfo.appendChild(
            Elements.createButtonSecondary({
              className: 'taskInfo',
              onClick: () => {
                // this.joinTask();
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
    joinedContainer.appendChild(joinedInfo);
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
    // make a div for projects you are invited too
    const invitedInfo = document.createElement('div');
    invitedInfo.className = 'invitedInfo';

    const invited = query(collectionRef, where('invited_members', 'array-contains', email));
    getDocs(invited)
      .then((response) => {
        (response.docs.forEach((item) => {
          invitedInfo.appendChild(
            Elements.createButtonSecondary({
              className: 'taskInfo',
              onClick: () => {
                localStorage.setItem('taskId', item.id);
                this.joinTask();
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
    invitedContainer.appendChild(invitedInfo);
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
