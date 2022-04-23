import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import * as firebase from 'firebase/app';

const firebaseConfig = {

    apiKey: "AIzaSyCGXR0RPRMP5bqEQ-KQ6BYNwINNNScnxA0",
  
    authDomain: "projet-intensif-mobile.firebaseapp.com",
  
    databaseURL: "https://projet-intensif-mobile-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "projet-intensif-mobile",
  
    storageBucket: "projet-intensif-mobile.appspot.com",
  
    messagingSenderId: "381443059831",
  
    appId: "1:381443059831:web:2b10d5799dc3fcfd871672",
  
    measurementId: "G-M2GTCY6SFZ"
  
  };


const appfirebase = initializeApp(firebaseConfig);

// Inscription 
const auth = getAuth(appfirebase);


// Accéder aux données 
const db = getFirestore(appfirebase);

// Get a list of cities from your database


export { appfirebase, firebaseConfig, auth, db};