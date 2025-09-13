import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmk5KFunSCUODD2-J3gif41bIlidV_cbM",
    authDomain: "netflixclone-18da9.firebaseapp.com",
    projectId: "netflixclone-18da9",
    storageBucket: "netflixclone-18da9.firebasestorage.app",
    messagingSenderId: "224659509049",
    appId: "1:224659509049:web:186e9c52d8e2afcdcf22e8",
    measurementId: "G-P44RF1NB05"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();