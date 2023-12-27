import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5Qk63NKq8IG3EcLo6de_ES-AfgSi8EME",
    authDomain: "ecommerce-react-f1fa2.firebaseapp.com",
    projectId: "ecommerce-react-f1fa2",
    storageBucket: "ecommerce-react-f1fa2.appspot.com",
    messagingSenderId: "290834386941",
    appId: "1:290834386941:web:38651761112b3cf3a89394"
  };
   const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

    export { auth };