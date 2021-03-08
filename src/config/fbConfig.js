  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: 'apiKey',
    authDomain: 'authDomain',
    projectId: 'projectId',
    storageBucket: 'storageBucket',
    messagingSenderId: 'messagingSenderId',
    appId: 'appId',
    measurementId: 'measurementId'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;