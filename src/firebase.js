import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBZkMty8PIpGvo4WBHATOWRa3J89rXT7E",
  authDomain: "chat-c3a51.firebaseapp.com",
  projectId: "chat-c3a51",
  storageBucket: "chat-c3a51.firebasestorage.app",
  messagingSenderId: "82000235855",
  appId: "1:82000235855:web:ea73a716b5a350ad06093a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()