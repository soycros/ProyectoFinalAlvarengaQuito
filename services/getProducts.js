import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getProducts = async () => {
  try {
    const colRef = collection(db, "productos");
    const snapshot = await getDocs(colRef);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};
