// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBgMB9rXU14UNatD6dRZNBhNp2ZLaXCmQ",
    authDomain: "resume-maker-f0ab3.firebaseapp.com",
    projectId: "resume-maker-f0ab3",
    storageBucket: "resume-maker-f0ab3.firebasestorage.app",
    messagingSenderId: "1091413320267",
    appId: "1:1091413320267:web:636e51a10ddc1219a663ce",
    measurementId: "G-664GPN92J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;