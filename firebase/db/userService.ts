import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";

const addUser = async (name: string, email: string) => {
    await addDoc(collection(db,"users"), {
        name, email
    });
}

const fetchUsers = async() => {
    return (await getDocs(collection(db,"users"))).docs;
}

const fetchUser = async (id: string) => {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(doc(db, "users", id));
    
    return docSnap
}

const deleteUser = async (id: string) => {
    await deleteDoc(doc(db,"users",id));
}

export {addUser, fetchUsers, fetchUser, deleteUser};