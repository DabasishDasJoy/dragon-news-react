// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs8xL8WNKpxxC6keNXtMYAPW6cJ7sVQDs",
  authDomain: "dragon-news-react.firebaseapp.com",
  projectId: "dragon-news-react",
  storageBucket: "dragon-news-react.appspot.com",
  messagingSenderId: "871377183012",
  appId: "1:871377183012:web:658d56b814f8290b22d3b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
