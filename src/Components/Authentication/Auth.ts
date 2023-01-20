import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
  getAdditionalUserInfo,
} from 'firebase/auth';

import { addDoc, collection } from 'firebase/firestore';
import {
  database,
} from '../../lib/Firebase';

// register function
function register() {
  const collectionRef = collection(database, 'users');
  const username : string = (< HTMLInputElement >document.getElementById('register_username')).value;
  const email : string = (< HTMLInputElement >document.getElementById('register_email')).value;
  const password : string = (< HTMLInputElement >document.getElementById('register_password')).value;
  const auth : any = getAuth();
  // check if email is in correct format
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email)) {
    // check if password is longer than 6 characters
    if (password.length > 6) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Profile updated!
          localStorage.setItem('emailUser', email);
          window.location.replace('./dashboard');
        }).catch((error) => {
          // An error occurred
          console.log(error);
        });
      addDoc(collectionRef, {
        userEmail: email,
        userName: username,
        points: 0,
      });
    } else {
      // show text that password is too short
      const passwordError : any = (< HTMLInputElement >document.getElementById('password_error') || '');
      passwordError.innerHTML = 'Password is too short!';
    }
  } else {
    // Email is not in correct format
    const emailError : any = (< HTMLInputElement >document.getElementById('invalid_email_error') || '');
    emailError.innerHTML = 'Email is not in correct format!';
  }
}

// Sign in function
function signin() {
  const signinEmail = (< HTMLInputElement > document.getElementById('login_email')).value;
  const signinPassw = (< HTMLInputElement > document.getElementById('login_password')).value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, signinEmail, signinPassw)
    .then(() => {
    // Signed in
      localStorage.setItem('emailUser', signinEmail);
      window.location.replace('/dashboard');
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        const passwordError : any = (< HTMLInputElement >document.getElementById('password_error') || '');
        passwordError.innerHTML = 'Password is incorrect!';
      } else if (error.code === 'auth/invalid-email') {
        const emailError : any = (< HTMLInputElement >document.getElementById('invalid_email_error') || '');
        emailError.innerHTML = 'Email does not exist!';
      } else {
        alert('Give a valid email and password');
      }
    });
}

// Sign in with google + check if email already exists in database if not it will be added
function signInWithGoogle() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // const collectionRef = collection(database, 'users');
  signInWithPopup(auth, googleProvider)
    .then(async (result: any) => {
      // The signed-in user info.
      const { email } = result.user;
      const username : string = email?.substring(0, email.indexOf('@'));
      // check if user is in database already
      const isNewUser: any | null = getAdditionalUserInfo(result);

      // eslint-disable-next-line eqeqeq
      if (isNewUser == true) {
        await addDoc(collection(database, 'users'), {
          userEmail: email,
          userName: username,
          points: 0,
        });
      }
      localStorage.setItem('emailUser', email);
      window.location.replace('/dashboard');
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      alert(`An error has occurred, the error is ${errorMessage}!`);
    });
}

function facebookLogin() {
  const auth = getAuth();
  const facebookProvider = new FacebookAuthProvider();

  signInWithPopup(auth, facebookProvider)
    .then(async (result: any) => {
      const { email } = result.user;
      localStorage.setItem('emailUser', email);
      window.location.replace('/dashboard');
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.message);
    });
}

// Sign in with Github
// you can only use this if your github email has not been used to sign up with firebase yet
function githubLogin() {
  const auth = getAuth();
  const githubProvider = new GithubAuthProvider();

  signInWithPopup(auth, githubProvider)
    .then(async (result: any) => {
    // The signed-in user info.
      const { email } = result.user;
      const username : string = email?.substring(0, email.indexOf('@'));
      // check if user is in database already
      const isNewUser: any | null = getAdditionalUserInfo(result);

      // eslint-disable-next-line eqeqeq
      if (isNewUser == true) {
        await addDoc(collection(database, 'users'), {
          userEmail: email,
          userName: username,
          points: 0,
        });
      }
      localStorage.setItem('emailUser', email);
      window.location.replace('/dashboard');
    }).catch((error) => {
    // Handle Errors here.
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      alert(`An error has occurred, the error is ${errorMessage}!`);
    });
}

// logout function
function logout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      window.location.replace('/');
      localStorage.clear();
    })
    .catch((err) => {
      console.log(err.message);
    });
}
export {
  register, signin, signInWithGoogle, facebookLogin, githubLogin, logout,
};
