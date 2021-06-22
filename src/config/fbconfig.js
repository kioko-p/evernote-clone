import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyC-3-Y7xi-RoHg40yLgXmBerfMf4AYAeXc",
    authDomain: "evernote-clone-8c485.firebaseapp.com",
    projectId: "evernote-clone-8c485",
    storageBucket: "evernote-clone-8c485.appspot.com",
    messagingSenderId: "474177486843",
    appId: "1:474177486843:web:cba9f52ce0e45d6074d55e",
    measurementId: "G-GCGY5RFD91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;