import {
  getDocs,
  collection,
  doc,
  deleteDoc,
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
