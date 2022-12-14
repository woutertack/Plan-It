import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  query,
  where,
  WithFieldValue,

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

  render() {
    const mainContainer = document.createElement('main');
    mainContainer.appendChild(createHeader());

    const mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';

    mainDiv.appendChild(
      Elements.createP({
        textContent: 'Your project(s)',
        className: 'label',
      }),
    );

    // GETTING YOUR PROJECTS FROM FIRESTORE
    const getModelInfo = (item) => {
      // const timestamp = {
      //   nanoseconds: item.data().deadline.nanoseconds,
      //   seconds: item.data().deadline.seconds,
      // };

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
          mainDiv.appendChild(
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
    // GETTING PROJECTS YOU HAVE JOINED FROM FIRESTORE

    // const invited = query(collectionRef, where('invited_members', 'array-contains', 'tackwouter@hotmail.com'));
    // getDocs(invited)
    //   .then((response) => {
    //     (response.docs.forEach((item) => {
    //       console.log(item);
    //     }));
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

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
