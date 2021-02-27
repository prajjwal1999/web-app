import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyA9aJxAda4p3SiS4BSVBHTzeb9-3hv7L00",
  authDomain: "social-network-b4b7e.firebaseapp.com",
  projectId: "social-network-b4b7e",
  storageBucket: "social-network-b4b7e.appspot.com",
  messagingSenderId: "363089225564",
  appId: "1:363089225564:web:a5c4aa7ead58be66d7c399",
});

export const auth = app.auth();
const db = app.firestore();
export default db;
