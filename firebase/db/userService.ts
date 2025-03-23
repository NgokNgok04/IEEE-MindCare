import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { User } from "./interface";

const addUser = async (name: string, email: string) => {
    await addDoc(collection(db,"users"), {
        name, email
    });
}

const fetchUsers = async(): Promise<User[]> => {
    const docs = await getDocs(collection(db,"users"))
    const users = docs.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
    } as User)) 
    return users;
}

const fetchUser = async (id: string) : Promise<User> => {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(doc(db, "users", id));
    
    return {
        id: docSnap.id,
        ...docSnap.data(),
    } as User
}

const deleteUser = async (id: string) => {
    await deleteDoc(doc(db,"users",id));
}

export {addUser, fetchUsers, fetchUser, deleteUser};