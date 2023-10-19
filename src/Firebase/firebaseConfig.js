import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgE7Jc8LoTT79UI42a4EZaRv1xAfy2JUU",
  authDomain: "kindercare-18c08.firebaseapp.com",
  projectId: "kindercare-18c08",
  storageBucket: "kindercare-18c08.appspot.com",
  messagingSenderId: "610486279684",
  appId: "1:610486279684:web:5092db21927c48d1fcdf51",
  measurementId: "G-KZHYV7Z99S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
