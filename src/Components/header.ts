import Elements from '../lib/Elements';

import { logout } from './Authentication/Auth';

function createHeader() {
  const headerContainer = document.createElement('header');
  headerContainer.className = 'headerContainer';

  const menuWrap = document.createElement('div');
  menuWrap.className = 'menu-wrap';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'toggler';
  menuWrap.appendChild(checkbox);

  // subtasks where still showing when the menu was open, this fixes that
  checkbox.addEventListener('change', () => {
    const subtaskBtn = document.querySelector('.subtaskBtn') as HTMLElement;

    if (checkbox.checked) {
      subtaskBtn.style.display = 'none';
    } else {
      subtaskBtn.style.display = 'block';
    }
  });
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '<div></div>';
  menuWrap.appendChild(hamburger);

  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.innerHTML = `
    <div>
      <div>
        <ul class="menuList">
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/leaderboard">Leaderboard</a></li>
          <li><a href="/">Logout</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  `;

  menuWrap.appendChild(menu);
  headerContainer.appendChild(menuWrap);

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
