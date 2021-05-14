import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_Lc28zsT_X6B9sTu5t_OWP-N06gkp980",
    authDomain: "shop-app-db-ee142.firebaseapp.com",
    projectId: "shop-app-db-ee142",
    storageBucket: "shop-app-db-ee142.appspot.com",
    messagingSenderId: "479068535499",
    appId: "1:479068535499:web:a4fb198a0981ef081c794e"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;