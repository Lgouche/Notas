// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr8Hy6jcTEfZvbyiGaycnitr0jW5_jd5g",
  authDomain: "notas-8efb4.firebaseapp.com",
  projectId: "notas-8efb4",
  storageBucket: "notas-8efb4.appspot.com",
  messagingSenderId: "664243930720",
  appId: "1:664243930720:web:deb9b61ab7962a81eea505"
};

// Initialize Firebase
const appFirebase   = initializeApp(firebaseConfig);
export default appFirebase;