/**
 * The Login Component
 */

import {
  getDocs,
  collection,

  query,

  orderBy,
} from 'firebase/firestore';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

import {
  database,
} from '../lib/Firebase';

import { createHeader } from './header';

class LeaderboardComponent extends Component {
  constructor() {
    super({
      name: 'leaderboard',
      routerPath: '/leaderboard',
      model: {

      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const mainContainer = document.createElement('main');
    mainContainer.appendChild(createHeader());

    const leaderboardContainer = document.createElement('div');
    leaderboardContainer.className = 'leaderboardContainer';

    leaderboardContainer.appendChild(
      Elements.createLogo({
        innerHTML: '<i class="fa-solid fa-ranking-star"></i>',
        className: 'podium',
      }),
    );

    let i = 1;
    const collectionRef = collection(database, 'users');
    const q = query(collectionRef, orderBy('points', 'desc'));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'memberDiv';

        const position = document.createElement('p');
        position.className = 'position';
        position.textContent = `${i}`;
        const memberEmail = document.createElement('p');
        memberEmail.className = 'memberEmail';
        memberEmail.textContent = doc.data().userEmail;

        const memberPoints = document.createElement('p');
        memberPoints.className = 'memberPoints';
        memberPoints.textContent = `${doc.data().points} points`;

        memberDiv.appendChild(position);
        memberDiv.appendChild(memberEmail);
        memberDiv.appendChild(memberPoints);

        leaderboardContainer.appendChild(memberDiv);
        // eslint-disable-next-line no-plusplus
        i++;
      });
    });

    mainContainer.appendChild(leaderboardContainer);
    return mainContainer;
  }
}

export default LeaderboardComponent;
