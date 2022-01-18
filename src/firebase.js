import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEbtzyQ8GaqJEzqrWiwLXMh0Io97YC4Jw",
  authDomain: "netflix-9c125.firebaseapp.com",
  projectId: "netflix-9c125",
  storageBucket: "netflix-9c125.appspot.com",
  messagingSenderId: "444233217584",
  appId: "1:444233217584:web:9f310228473ce8c84a9ff5",
  measurementId: "G-CFN3R75WF5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
