import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA7IusemEMs2v2JGr2DeoTmsxvHGBlpklc",
  authDomain: "mission-garuda-control.firebaseapp.com",
  databaseURL: "https://mission-garuda-control-default-rtdb.firebaseio.com",
  projectId: "mission-garuda-control",
  storageBucket: "mission-garuda-control.firebasestorage.app",
  messagingSenderId: "713838817069",
  appId: "1:713838817069:web:def24ebb534e1e3cc7eda4",
  measurementId: "G-R3GXGRJ43W",
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Exports
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
