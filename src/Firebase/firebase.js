import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDPeLVHxo95ELmPj29ITaQNPRgHKzLm3fY",
  authDomain: "shubhsita-18680.firebaseapp.com",
  databaseURL:
    "https://shubhsita-18680-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shubhsita-18680",
  storageBucket: "shubhsita-18680.appspot.com",
  messagingSenderId: "386389313580",
  appId: "1:386389313580:web:905af78265a437b26be989",
  measurementId: "G-47JDE8L1P5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
