import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBu1Ei5NKKDD8ICHDvfvdujhnBS9IQvC3A",
  authDomain: "carrito-compras-7dcfc.firebaseapp.com",
  databaseURL: "https://carrito-compras-7dcfc-default-rtdb.firebaseio.com",
  projectId: "carrito-compras-7dcfc",
  storageBucket: "carrito-compras-7dcfc.appspot.com",
  messagingSenderId: "738777540953",
  appId: "1:738777540953:web:9f8bc6f439ebf077104448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)