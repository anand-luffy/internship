// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your api",
  authDomain: "your api",
  projectId: "testapp-a1141",
  storageBucket: "testapp-a1141.appspot.com",
  messagingSenderId: "yours",
  appId: "yours",
  measurementId: "yours"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);