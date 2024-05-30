// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkIzXinHFttht3PczCiB-Yjj_BX3s2JEM",
  authDomain: "efwedding-6d4fa.firebaseapp.com",
  projectId: "efwedding-6d4fa",
  storageBucket: "efwedding-6d4fa.appspot.com",
  messagingSenderId: "132300325486",
  appId: "1:132300325486:web:c2a6cc1935f733ebc79c7f",
  measurementId: "G-YEFYNV4TRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);