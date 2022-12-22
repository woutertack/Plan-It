// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDrf3Ubpo-WY6npIeUalNf8xiAo1aE9qCQ',
  authDomain: 'agenda-app-798fb.firebaseapp.com',
  projectId: 'agenda-app-798fb',
  storageBucket: 'agenda-app-798fb.appspot.com',
  messagingSenderId: '553615681756',
  appId: '1:553615681756:web:47e52596026a52b6636c19',
};

// Initialize Firebase
const initFirebase = () => {
  initializeApp(firebaseConfig);
};
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

export { initFirebase };
