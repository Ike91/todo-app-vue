import firebase from 'firebase/app'
import 'firebase/firestore'

 
 var firebaseConfig = {
  apiKey: "AIzaSyCtUhdJT2OVbAdnoxA17GA3KyrpsJl91BI",
  authDomain: "todo-a7f4e.firebaseapp.com",
  projectId: "todo-a7f4e",
  storageBucket: "todo-a7f4e.appspot.com",
  messagingSenderId: "222493379884",
  appId: "1:222493379884:web:f059c8dd9cb07aea4af089",
  measurementId: "G-F54TQ1ZR2K"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;