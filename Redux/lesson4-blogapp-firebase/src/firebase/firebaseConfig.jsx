import firebase from "firebase/app";
import 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRGjBltcAvQ4mDvV5LkWZJVXJ0UccDfoc",
    authDomain: "evoteam-4b2d1.firebaseapp.com",
    databaseURL: "https://evoteam-4b2d1-default-rtdb.firebaseio.com",
    projectId: "evoteam-4b2d1",
    storageBucket: "evoteam-4b2d1.appspot.com",
    messagingSenderId: "828084452441",
    appId: "1:828084452441:web:08901ba852844286170548"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  export {database  as default} 