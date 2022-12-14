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
  const username : string = (< HTMLInputElement >document.getElementById('register__username')).value;
  const email : string = (< HTMLInputElement >document.getElementById('register__email')).value;
  const password : string = (< HTMLInputElement >document.getElementById('register__password')).value;
  const auth : any = getAuth();

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
  });
}

// Sign in function
function signin() {
  const signinEmail = (< HTMLInputElement > document.getElementById('login__email')).value;
  const signinPassw = (< HTMLInputElement > document.getElementById('login__password')).value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, signinEmail, signinPassw)
    .then(() => {
      // Signed in
      localStorage.setItem('emailUser', signinEmail);
      window.location.replace('/dashboard');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`An error has occurred, the error is ${errorMessage}!`);
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
      const username = email?.substring(0, email.indexOf('@'));
      // check if user is in database already
      const { isNewUser } = getAdditionalUserInfo(result);

      if (isNewUser) {
        await addDoc(collection(database, 'users'), {
          userEmail: email,
          userName: username,
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
function githubLogin() {
  const auth = getAuth();
  const githubProvider = new GithubAuthProvider();

  signInWithPopup(auth, githubProvider)
    .then(() => {
      window.location.replace('/dashboard');
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.message);
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
