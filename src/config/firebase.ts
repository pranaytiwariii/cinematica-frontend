import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfi_yWp84NT12QSfdr9OLZQL5zmc07ZPM",
  authDomain: "fir-61478.firebaseapp.com",
  projectId: "fir-61478",
  storageBucket: "fir-61478.firebasestorage.app",
  messagingSenderId: "546362099844",
  appId: "1:546362099844:web:8cf25ca1e0edb4b38a5ad1",
  measurementId: "G-K6R5W9WY7H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);