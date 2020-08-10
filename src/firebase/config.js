
  import * as firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/storage';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyB1qvZr-A4YS3vxGjD4UY14-UQDUgcKM",
    authDomain: "firegram-6aea8.firebaseapp.com",
    databaseURL: "https://firegram-6aea8.firebaseio.com",
    projectId: "firegram-6aea8",
    storageBucket: "firegram-6aea8.appspot.com",
    messagingSenderId: "464554136560",
    appId: "1:464554136560:web:5aaa913ceb2effacab8335"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore,projectStorage,timestamp}
