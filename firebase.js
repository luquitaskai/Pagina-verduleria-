import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIUNt9Glg7yQe0JdAq5FI7s2PPBny2QeI",
  authDomain: "verduleria-online-85069.firebaseapp.com",
  databaseURL: "https://verduleria-online-85069-default-rtdb.firebaseio.com",
  projectId: "verduleria-online-85069",
  storageBucket: "verduleria-online-85069.appspot.com",
  messagingSenderId: "654511928664",
  appId: "1:654511928664:web:9eb3a73acdf22ebcfd212d",
  measurementId: "G-ZSGGGGS58W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
