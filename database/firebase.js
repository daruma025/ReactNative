import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3ncHMZz8Qw1lu7tKvoLDU_eUU0WPQrCY",
    authDomain: "movieapp-50560.firebaseapp.com",
    projectId: "movieapp-50560",
    storageBucket: "movieapp-50560.appspot.com",
    messagingSenderId: "997715940468",
    appId: "1:997715940468:web:e8b2f24761e0ec29c82d21",
    measurementId: "G-S47V18B88C"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default firebase