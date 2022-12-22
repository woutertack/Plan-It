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

function createHeader() {
  const headerContainer = document.createElement('header');
  headerContainer.className = 'headerContainer';

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
        window.location.replace('/dashboard');
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

  return headerContainer;
}

export { createHeader };
