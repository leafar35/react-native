import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyD6mniSswxxLGbjBHC6PMfDWN71ufNPLCc",
  authDomain: "wallet-react-afab0.firebaseapp.com",
  projectId: "wallet-react-afab0",
  storageBucket: "wallet-react-afab0.appspot.com",
  messagingSenderId: "998946410507",
  appId: "1:998946410507:web:698a7c01616f568ee5b70e"
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;