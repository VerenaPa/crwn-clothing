import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmWT9xqNuM7-CDLagklPid0fUKLudGqrc",
    authDomain: "crwn-db-52934.firebaseapp.com",
    projectId: "crwn-db-52934",
    storageBucket: "crwn-db-52934.appspot.com",
    messagingSenderId: "573607711015",
    appId: "1:573607711015:web:3ded0bcb72d76c92ce9902",
    measurementId: "G-GEV8T8HND9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;