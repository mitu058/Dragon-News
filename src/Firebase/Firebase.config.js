// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQqJ_oakcnN7uFzsws8zjb8OEUAFAAnM8",
  authDomain: "dragon-news-f51fa.firebaseapp.com",
  projectId: "dragon-news-f51fa",
  storageBucket: "dragon-news-f51fa.firebasestorage.app",
  messagingSenderId: "1030802070746",
  appId: "1:1030802070746:web:2ebf89019938828f0459e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app