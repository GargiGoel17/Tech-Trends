// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6b9da.firebaseapp.com",
  projectId: "mern-blog-6b9da",
  storageBucket: "mern-blog-6b9da.appspot.com",
  messagingSenderId: "565376559167",
  appId: "1:565376559167:web:7218f91af0497fafe5308a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);