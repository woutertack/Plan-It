import Elements from '../lib/Elements';

import { logout } from './Authentication/Auth';

function createHeader() {
  const headerContainer = document.createElement('header');
  headerContainer.className = 'headerContainer';

  headerContainer.appendChild(
    Elements.createSocialMediaButton({
      innerHTML: '<i class="fa-solid fa-bars"></i>',
      className: 'navbars',
      onClick: () => {

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

// eslint-disable-next-line import/prefer-default-export
export { createHeader };
