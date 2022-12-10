import Component from "../../lib/Component";
import Elements from "../../lib/Elements";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider
} from 'firebase/auth'


class LoginComponent extends Component{
  constructor(){
    super({
      name: 'Login',
      model: {},
      routerPath: '/'
    })
  }


  
  render(){
    const loginContainer = document.createElement('div');

    // Creating the look of the page

    // make logo
    loginContainer.appendChild(
      Elements.createLogo({
        innerHTML: '<i class="fa-solid fa-calendar-days"></i>',
        className: 'logo'
        
      })
    )
    loginContainer.appendChild(
      Elements.createP({
        textContent: 'Welcome to Plan It!',
        className: 'title'
      })
    )


    loginContainer.appendChild(
      Elements.createP({
        className: 'login_header',
        textContent: 'Login',
      }),
    );

    //Login form
    loginContainer.appendChild(
      Elements.createInput({
        id: 'login__email',
        className: 'login__email',
        // type: inputEm,
        placeholder: "Email",
      }),
    );

    loginContainer.appendChild(
      Elements.createInput({
        id: 'login__password',
        className: 'login__password',
        // type: inputPW,
        placeholder: "Password",
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
          this.signin();

        },
      }),
    );
    loginContainer.appendChild(
      Elements.createP({
        className: 'orUse',
        textContent: 'OR USE',
      }),
    );

    //social media container 
    const socialsContainer = document.createElement('div');
    socialsContainer.className = 'socialContainer'

    socialsContainer.appendChild(
        Elements.createSocialMediaButton({
          innerHTML: '<i class="fab fa-google-plus-g"></i>',
          className: 'google',
          onClick: () => {
            this.signInWithGoogle()
          }

        })),
      socialsContainer.appendChild(
        Elements.createSocialMediaButton({
          innerHTML: '<i class="fab fa-facebook-f"></i>',
          className: 'facebook',
          onClick: () => {
            this.facebookLogin()
          }

        })),
      socialsContainer.appendChild(
        Elements.createSocialMediaButton({
          innerHTML: '<i class="fa-brands fa-github"></i>',
          className: 'github',
          onClick: () => {
            this.githubLogin()
          }

        }))

    loginContainer.appendChild(socialsContainer)
   
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
          location.replace('/register');
        },
      }),
    );
    return loginContainer;

  }
}

export default LoginComponent