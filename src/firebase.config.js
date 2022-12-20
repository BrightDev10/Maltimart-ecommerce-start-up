// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDCYVT_-CMpvDSRDZQ0wx590I0MdAHHs28",
  authDomain: "maltimart-aab97.firebaseapp.com",
  projectId: "maltimart-aab97",
  storageBucket: "maltimart-aab97.appspot.com",
  messagingSenderId: "1074815358745",
  appId: "1:1074815358745:web:78c08ca1c7c196b71b5788",
  measurementId: "G-0HJT37MJDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;