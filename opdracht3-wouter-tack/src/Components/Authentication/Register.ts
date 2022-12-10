/**
 * The Login Component
 */

import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import { register } from './Auth';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile
// } from 'firebase/auth'

class RegisterComponent extends Component {
  constructor() {
    super({
      name: 'register',
      routerPath: '/register',
      model: {
        
      },
    });
  }
  


  render() {
    

    // create a home container
    const registerContainer = document.createElement('div');

    // Creating the look of the page
    // make logo
    registerContainer.innerHTML = '<i class="fa-solid fa-calendar-days"></i>'
    registerContainer.appendChild(
      Elements.createP({
        textContent: 'Welcome to Plan It!',
        className: 'title'
      })
    )


    registerContainer.appendChild(
      Elements.createP({
        className: 'register_header',
        textContent: 'Register',
      }),
    );

    // register form
    registerContainer.appendChild(
      Elements.createInput({
        id: 'register__username',
        className: 'register__username',
        type: 'text',
        placeholder: "Username",
      }),
    );

    registerContainer.appendChild(
      Elements.createInput({
        id: 'register__email',
        className: 'register__email',
        type: 'text',
        placeholder: "Email",
      }),
    );

    registerContainer.appendChild(
      Elements.createInput({
        id: 'register__password',
        className: 'register__password',
        type: 'password',
        placeholder: "Password",
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
          register()
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
          location.replace('/');
        },
      }),
    );
    return registerContainer;

  }
}

export default RegisterComponent;