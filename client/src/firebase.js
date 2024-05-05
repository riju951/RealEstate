// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c604a.firebaseapp.com",
  projectId: "mern-auth-c604a",
  storageBucket: "mern-auth-c604a.appspot.com",
  messagingSenderId: "190229859880",
  appId: "1:190229859880:web:12d24a787da4a52f3eaf1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
