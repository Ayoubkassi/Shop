import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3S6m5ZRaa6WkI3KPD03IoUrmRF_hBZk4",
  authDomain: "ecommerce-1cc64.firebaseapp.com",
  projectId: "ecommerce-1cc64",
  storageBucket: "ecommerce-1cc64.appspot.com",
  messagingSenderId: "194310460721",
  appId: "1:194310460721:web:25f81fb66f76658b154c10",
  measurementId: "G-K7LTQ2KXQ2"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const GoogleSignIn = () =>firebase.auth().signInWithPopup(provider)
