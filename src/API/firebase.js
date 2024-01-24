import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5-kKkJl8DzrcDGOvXSo2HpzqiWlVoUZc",
  authDomain: "saveupload-eb597.firebaseapp.com",
  projectId: "saveupload-eb597",
  storageBucket: "saveupload-eb597.appspot.com",
  messagingSenderId: "484074608029",
  appId: "1:484074608029:web:4040fdcb7360edcd79cb74"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
