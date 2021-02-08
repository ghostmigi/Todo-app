import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBS8qm4TPfAhcUb8AdEP3jWxxtEga4GkI",
  authDomain: "todo-app-9c4fc.firebaseapp.com",
  projectId: "todo-app-9c4fc",
  storageBucket: "todo-app-9c4fc.appspot.com",
  messagingSenderId: "24170974953",
  appId: "1:24170974953:web:e326434e3df63522d02a78",
  measurementId: "G-WME80K04BY",
});

const db = firebaseApp.firestore();

export default db;
