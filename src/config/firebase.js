import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_zO-yyMfPf3ZR6h0I4WLR_8AsfVj2zJo",
  authDomain: "react-project-d9376.firebaseapp.com",
  projectId: "react-project-d9376",
  storageBucket: "react-project-d9376.firebasestorage.app",
  messagingSenderId: "861584602771",
  appId: "1:861584602771:web:f459a80113f05c468f7f66",
  measurementId: "G-489YP0RS3R",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);