
import { FirebaseApp, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_wtfANRULfUD9OhZQbKyN9i09XBKnU4g",
  authDomain: "netflix-nextjs-clone-d3165.firebaseapp.com",
  projectId: "netflix-nextjs-clone-d3165",
  storageBucket: "netflix-nextjs-clone-d3165.appspot.com",
  messagingSenderId: "197243716577",
  appId: "1:197243716577:web:11709657fa01f5ef9a48a0"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
 const db = getFirestore(app);
 export default db;


