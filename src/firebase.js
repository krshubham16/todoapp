
  import firebase from "firebase";
  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDdYd2yvTbcIVsQRInRdm3g8bpUwnAjN8I",
    authDomain: "todo-app-25999.firebaseapp.com",
    projectId: "todo-app-25999",
    storageBucket: "todo-app-25999.appspot.com",
    messagingSenderId: "1047344833609",
    appId: "1:1047344833609:web:ed0102589c167975f20b98"

  });
  const db=firebaseApp.firestore();

  export default db;