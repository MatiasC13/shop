import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { firebaseCollections } from "./helper";
import db from "./firebaseConfig";
const { orders, discos } = firebaseCollections;

export const getItems = async () => {
  const discsSnapshot = await getDocs(collection(db, discos));
  const discList = discsSnapshot.docs.map((d) => {
    let disc = d.data();
    disc.id = d.id;

    return disc;
  });
  return discList;
};

export const getItem = async (id) => {
  const docRef = doc(db, discos, id);
  const docSnaptshop = await getDoc(docRef);
  let disc = docSnaptshop.data();
  disc.id = docSnaptshop.id;
  return disc;
};

export async function saveData(order) {
  try {
    const orderRef = collection(db, orders);
    const res = await addDoc(orderRef, order);
    return res;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
