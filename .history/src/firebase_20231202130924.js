import firebase from './firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAZUZq7Nme4y8C1X1GKFhYFTjOlIw8_KRA",
    authDomain: "linkedin-clone-637be.firebaseapp.com",
    projectId: "linkedin-clone-637be",
    storageBucket: "linkedin-clone-637be.appspot.com",
    messagingSenderId: "1040418036639",
    appId: "1:1040418036639:web:844fe6bf6beab0ea3abbaa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;