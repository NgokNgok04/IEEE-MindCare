import { db } from "../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

const addPost = async (
  userId: string,
  content: string,
  parentId: string | null
) => {
  const postCol = collection(db, "posts");
  await addDoc(postCol, {
    userId,
    content,
    parentId,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
};

const editPost = async (postId: string, content?: string) => {
  const journalRef = doc(db, "posts", postId);

  const updateData: Record<string, any> = {};

  if (content !== undefined) updateData.content = content;

  if (Object.keys(updateData).length > 0) {
    updateData.updated_at = serverTimestamp();
    await updateDoc(journalRef, updateData);
  }
};

const updateLike = async ( postId: string, likerId: string) => {
    const likeCol = collection(db,"posts",postId,"likes");
    const q = query(likeCol,where("likerId","==",likerId))
    const likes = await getDocs(q);
    if(likes.empty){
        await addDoc(likeCol,{
            likerId,
            created_at: serverTimestamp(),
        })
    }else{
        await deleteDoc(doc(likeCol,likes.docs[0].id))
    }
}

const deletePost = async (postId: string) => {
  const postDoc = doc(db, "posts", postId);
  await deleteDoc(postDoc);
};

const fetchPostReplies = async (postId: string) => {
  const postCol = collection(db, "posts");
  const q = query(postCol, where("parentId", "==", postId));

  const docs = await getDocs(q);
  const replies = docs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return replies;
};
