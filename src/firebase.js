import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAO9Rc_JH4fN7zk80iNBjdLTxe2xDZ2yLI",
  authDomain: "midnightl9-18551.firebaseapp.com",
  databaseURL: "https://midnightl9-18551-default-rtdb.firebaseio.com",
  projectId: "midnightl9-18551",
  storageBucket: "midnightl9-18551.firebasestorage.app",
  messagingSenderId: "288936534734",
  appId: "1:288936534734:web:3190b89a28bbec8147e69f",
  measurementId: "G-6QPKKP8DHF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);