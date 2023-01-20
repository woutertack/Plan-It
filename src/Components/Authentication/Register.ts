/**
 * The Login Component
 */

import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import { register } from './Auth';

class RegisterComponent extends Component {
  constructor() {
    super({
      name: 'register',
      routerPath: '/register',
      model: {

      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // create a home container
    const bodyRegister = document.createElement('div');
    bodyRegister.className = 'bodyRegister';

    const registerContainer = document.createElement('div');
    registerContainer.className = 'registercontainer';

    // Creating the look of the page
    // make logo
    registerContainer.appendChild(
      Elements.createLogo({
        innerHTML: '<i class="fa-solid fa-calendar-days"></i>',
        className: 'logo',

      }),
    );
    registerContainer.appendChild(
      Elements.createP({
        textContent: 'Welcome to Plan It!',
        className: 'title',
      }),
    );

    registerContainer.appendChild(
      Elements.createP({
        className: 'register_header',
        textContent: 'Register',
      }),
    );

    // register form
    registerContainer.appendChild(
      Elements.createInput({
        id: 'register_username',
        className: 'register_username',
        type: 'text',
        placeholder: 'Username',
      }),
    );

    registerContainer.appendChild(
      Elements.createInput({
        id: 'register_email',
        className: 'register_email',
        type: 'text',
        placeholder: 'Email',
      }),
    );
    registerContainer.appendChild(
      Elements.createP({
        id: 'invalid_email_error',
        className: 'invalid_email_error',

      }),
    );

    registerContainer.appendChild(
      Elements.createInput({
        id: 'register_password',
        className: 'register_password',
        type: 'password',
        placeholder: 'Password',
      }),
    );
    registerContainer.appendChild(
      Elements.createP({
        id: 'password_error',
        className: 'password_error',

      }),
    );
    registerContainer.appendChild(
      Elements.createBr(),
    );

    registerContainer.appendChild(
      Elements.createButton({
        className: 'registerButton',
        textContent: 'REGISTER',
        onClick: () => {
          register();
        },
      }),
    );

    registerContainer.appendChild(
      Elements.createBr(),
    );

    registerContainer.appendChild(
      Elements.createButton({
        className: 'RegisterBackBtn',
        textContent: 'Already have an account? Sign in here!',
        onClick: () => {
          window.location.replace('/');
        },
      }),
    );
    bodyRegister.appendChild(registerContainer);
    return bodyRegister;
  }
}

export default RegisterComponent;
