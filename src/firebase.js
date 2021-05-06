
  import firebase from "firebase";
  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyA3U4tfjxR6Sr0oVjsuV4r6cUSnoqw1C3s",
    authDomain: "todo-app-8cae2.firebaseapp.com",
    projectId: "todo-app-8cae2",
    storageBucket: "todo-app-8cae2.appspot.com",
    messagingSenderId: "404317734072",
    appId: "1:404317734072:web:6067e6e0f7d0aa69a4e04d"

  });
  const db=firebaseApp.firestore();

  export default db;