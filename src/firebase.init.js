// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBewkrhwx_B6BXhc3vOUQpZelvW0cHFcOA",
  authDomain: "onion-restorent.firebaseapp.com",
  projectId: "onion-restorent",
  storageBucket: "onion-restorent.appspot.com",
  messagingSenderId: "514781533916",
  appId: "1:514781533916:web:fe83276a48965b26dd8619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth