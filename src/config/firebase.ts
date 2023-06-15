// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlZLeZZMJsa52SgOctY8zgRAaRY7S71CU",
  authDomain: "card-generator-24dfa.firebaseapp.com",
  projectId: "card-generator-24dfa",
  storageBucket: "card-generator-24dfa.appspot.com",
  messagingSenderId: "917903758881",
  appId: "1:917903758881:web:d0b95e3e436c775a067560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);