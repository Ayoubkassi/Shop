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


//our firestore

const db = firebase.firestore();

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = db.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName , email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('error creating user', err);
    }
  }

  return userRef;

}
