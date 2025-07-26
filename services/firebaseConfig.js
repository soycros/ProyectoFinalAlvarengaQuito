import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUz5SUniH5xGK0AK15KRXG8WkVKdSKA",
  authDomain: "proyectofinalalvarengaquito.firebaseapp.com",
  projectId: "proyectofinalalvarengaquito",
  storageBucket: "proyectofinalalvarengaquito.appspot.com",
  messagingSenderId: "1072791468778",
  appId: "1:1072791468778:web:5e5e5e5e5e5e5e5e5e5e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
