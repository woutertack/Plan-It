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

import { logout } from './Authentication/Auth';

class DashboardComponent extends Component {
  constructor() {
    super({
      name: 'dashboard',
      routerPath: '/dashboard',
      model: {

      },
    });
  }

  // function to delete a chatroom Not finished yet
  // deleteChatroom () {

  //   deleteDoc(doc(database, "chatrooms", item.id));
  //   location.replace('/')
  // }

  render() {
    const headerContainer = document.createElement('header');
    headerContainer.className = 'headerContainer';
    const mainContainer = document.createElement('main');

    headerContainer.appendChild(
      Elements.createSocialMediaButton({
        innerHTML: '<i class="fa-solid fa-bars"></i>',
        className: 'navbars',
        onClick: () => {
          console.log('here comes navbar');
        },
      }),
    );

    headerContainer.appendChild(
      Elements.createSocialMediaButton({
        innerHTML: 'Plan It!',
        className: 'logoHeader',
        onClick: () => {
          location.replace('/dashboard');
        },
      }),
    );

    headerContainer.appendChild(
      Elements.createSocialMediaButton({
        innerHTML: '<i class="fa-solid fa-right-from-bracket"></i>',
        className: 'logoutBtn',
        onClick: () => {
          logout();
        },
      }),
    );

    mainContainer.appendChild(headerContainer);
    return mainContainer;
  }
}

export default DashboardComponent;
