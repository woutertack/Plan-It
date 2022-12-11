import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';

// register function
function register() {
  const username : string = (< HTMLInputElement >document.getElementById('register__username')).value;
  const email : string = (< HTMLInputElement >document.getElementById('register__email')).value;
  const password : string = (< HTMLInputElement >document.getElementById('register__password')).value;
  const auth : any = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Profile updated!
      localStorage.setItem('emaiLoggedInUser', email);
      localStorage.setItem('username', username);
      location.replace('./dashboard');
    }).catch((error) => {
      // An error occurred
      console.log(error);
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
      location.replace('/dashboard');
      localStorage.setItem('emaiLoggedInUser', signinEmail);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`An error has occurred, the error is ${errorMessage}!`);
    });
}

// Sign in with google
function signInWithGoogle() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  signInWithPopup(auth, googleProvider)
    .then((result: any) => {
      // The signed-in user info.
      const {
        user,
      } = result;
      localStorage.setItem('emaiLoggedInUser', user.email);
      location.replace('/dashboard');
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
    .then(() => {
      location.replace('/dashboard');
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
      location.replace('/dashboard');
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
      location.replace('/');
      localStorage.clear();
    })
    .catch((err) => {
      console.log(err.message);
    });
}
export {
  register, signin, signInWithGoogle, facebookLogin, githubLogin, logout,
};
