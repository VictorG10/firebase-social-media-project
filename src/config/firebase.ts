// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ7YQ_iP1aFMeaBTlF_iXiXx7Fh6DpXl4",
  authDomain: "fir-social-media-f57cc.firebaseapp.com",
  projectId: "fir-social-media-f57cc",
  storageBucket: "fir-social-media-f57cc.appspot.com",
  messagingSenderId: "544838053825",
  appId: "1:544838053825:web:31e1ef3b5537e94e9f8940",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
