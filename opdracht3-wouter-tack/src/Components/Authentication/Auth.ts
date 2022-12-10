import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'


function register() {

  const username : string = ( < HTMLInputElement >document.getElementById('register__username')).value;
  const email : string = ( < HTMLInputElement >document.getElementById('register__email')).value;
  const password : string= ( < HTMLInputElement >document.getElementById('register__password')).value;
  const auth : any  = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userCredential;
      updateProfile(auth.currentUser, {
        displayName: username
      }).then(() => {
        // Profile updated!
        localStorage.setItem('emaiLoggedInUser', email);
        location.replace('./dashboard');
      }).catch((error) => {
        // An error occurred
        console.log(error);
      });
    });
}




export {register}