import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

import {
  signin, signInWithGoogle, facebookLogin, githubLogin,
} from './Auth';

class LoginComponent extends Component {
  constructor() {
    super({
      name: 'Login',
      model: {},
      routerPath: '/',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const bodyLogin = document.createElement('div');
    bodyLogin.className = 'bodyLogin';

    const loginContainer = document.createElement('div');
    loginContainer.className = 'logincontainer';

    // Creating the look of the page

    // make logo
    loginContainer.appendChild(
      Elements.createLogo({
        innerHTML: '<i class="fa-solid fa-calendar-days"></i>',
        className: 'logo',

      }),
    );
    loginContainer.appendChild(
      Elements.createP({
        textContent: 'Welcome to Plan It!',
        className: 'title',
      }),
    );

    loginContainer.appendChild(
      Elements.createP({
        className: 'login_header',
        textContent: 'Login',
      }),
    );

    // Login form
    loginContainer.appendChild(
      Elements.createInput({
        id: 'login__email',
        className: 'login__email',
        // type: inputEm,
        placeholder: 'Email',
      }),
    );

    loginContainer.appendChild(
      Elements.createInput({
        id: 'login__password',
        className: 'login__password',
        type: 'password',
        placeholder: 'Password',
      }),
    );

    loginContainer.appendChild(
      Elements.createBr(),
    );

    loginContainer.appendChild(
      Elements.createButton({
        className: 'loginButton',
        textContent: 'LOGIN',
        onClick: () => {
          signin();
        },
      }),
    );
    loginContainer.appendChild(
      Elements.createP({
        className: 'orUse',
        textContent: 'OR USE',
      }),
    );

    // social media container
    const socialsContainer = document.createElement('div');
    socialsContainer.className = 'socialContainer';

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    socialsContainer.appendChild(
      Elements.createSocialMediaButton({
        innerHTML: '<i class="fab fa-google-plus-g"></i>',
        className: 'google',
        onClick: () => {
          signInWithGoogle();
        },

      }),
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    socialsContainer.appendChild(
      Elements.createSocialMediaButton({
        innerHTML: '<i class="fab fa-facebook-f"></i>',
        className: 'facebook',
        onClick: () => {
          facebookLogin();
        },

      }),
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    socialsContainer.appendChild(
      Elements.createSocialMediaButton({
        innerHTML: '<i class="fa-brands fa-github"></i>',
        className: 'github',
        onClick: () => {
          githubLogin();
        },

      }),
    );

    loginContainer.appendChild(socialsContainer);

    // No account, Register element
    loginContainer.appendChild(
      Elements.createP({
        className: 'NoAccount',
        textContent: "Don't have an account yet?",
      }),
    );
    loginContainer.appendChild(
      Elements.createButton({
        className: 'MakeAnAccount',
        textContent: 'Make an account',
        onClick: () => {
          window.location.replace('/register');
        },
      }),
    );

    bodyLogin.appendChild(loginContainer);
    return bodyLogin;
  }
}

export default LoginComponent;
