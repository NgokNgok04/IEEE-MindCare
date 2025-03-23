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
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  User,
  JournalSession,
  Post,
  JournalQuestion,
  JournalWithQuestion,
  Journal,
} from "./interface";

/*
 ** Journal Questions Collection
 */
const addJournalQuestion = async (
  type: string = "General",
  question: string
) => {
  await addDoc(collection(db, "journalQuestions"), {
    type,
    question,
  });
};

const fetchJournalQuestionType = async (
  type: string
): Promise<JournalQuestion[]> => {
  const questionRef = collection(db, "journalQuestions");
  const q = query(questionRef, where("type", "==", type));

  const querySnapshot = await getDocs(q);
  const questions = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as JournalQuestion)
  );

  return questions;
};

const deleteJournalQuestion = async (id: string) => {
  await deleteDoc(doc(db, "journalQuestions", id));
};

/*
 ** Journal Sessions Collection
 */
const addJournalSession = async (
  userId: string,
  summary: string,
  score: number = 0,
  answers: {questionId: string, content:string}[],
) => {
  const userDoc = doc(db, "users", userId);
  const journalSession = await addDoc(collection(userDoc, "journalSessions"), {
    summary,
    score,
    updated_at: serverTimestamp(),
    created_at: serverTimestamp(),
  });

  await Promise.all(
    answers.map( async (ans)=>{
        await addJournal(userId, journalSession.id, ans.questionId, ans.content)
    }) 
  )
};

const deleteJournalSession = async (
  userId: string,
  journalSessionId: string
) => {
  const journalSessionDoc = doc(
    db,
    "users",
    userId,
    "journalSessions",
    journalSessionId
  );
  await deleteDoc(journalSessionDoc);
};

const editJournalSession = async (
  userId: string,
  journalSessionId: string,
  summary?: string,
  score?: number
) => {
  const journalSessionRef = doc(
    db,
    "users",
    userId,
    "journalSessions",
    journalSessionId
  );

  const updateData: Record<string, any> = {};

  if (summary !== undefined) updateData.summary = summary;
  if (score !== undefined) updateData.score = score;

  if (Object.keys(updateData).length > 0) {
    updateData.updated_at = serverTimestamp();
    await updateDoc(journalSessionRef, updateData);
  }
};

const fetchAllJournalSessions = async (
  userId: string
): Promise<JournalSession[]> => {
  const journalSessionCol = collection(db, "users", userId, "journalSessions");
  const journalDocs = await getDocs(journalSessionCol);
  const data = journalDocs.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as JournalSession)
  );
  return data;
};

/*
 ** Journals Collection
 */
const addJournal = async (
  userId: string,
  journalSessionId: string,
  questionId: string,
  content: string
) => {
  const journalSessionCol = collection(
    db,
    "users",
    userId,
    "journalSessions",
    journalSessionId,
    "journals"
  );
  await addDoc(journalSessionCol, {
    questionId,
    content,
  });
};

const editJournal = async (
  userId: string,
  journalSessionId: string,
  journalId: string,
  questionId?: string,
  content?: string
) => {
  const journalRef = doc(
    db,
    "users",
    userId,
    "journalSessions",
    journalSessionId,
    "journals",
    journalId
  );

  const updateData: Record<string, any> = {};

  if (questionId !== undefined) updateData.questionId = questionId;
  if (content !== undefined) updateData.content = content;

  if (Object.keys(updateData).length > 0) {
    updateData.updated_at = serverTimestamp(); // Tambahkan timestamp jika ada perubahan
    await updateDoc(journalRef, updateData);
  }
};

const fetchJournalsBySession = async (
  userId: string,
  journalSessionId: string
): Promise<JournalWithQuestion[]> => {
  const journalsCol = collection(
    db,
    "users",
    userId,
    "journalSessions",
    journalSessionId,
    "journals"
  );
  const journalDocs = await getDocs(journalsCol);
  const journals: JournalWithQuestion[] = await Promise.all(
    journalDocs.docs.map(async (docSnapshot) => {
      const data = { id: docSnapshot.id, ...docSnapshot.data() } as Journal;
      const questionId = data.questionId;

      let questionData: JournalQuestion | undefined = undefined;
      if (questionId) {
        const questionDoc = await getDoc(
          doc(db, "journalQuestions", questionId)
        );
        if (questionDoc.exists()) {
          questionData = {
            id: questionDoc.id,
            ...questionDoc.data(),
          } as JournalQuestion;
        }
      }

      return {
        ...data,
        question: questionData,
      };
    })
  );
  return journals;
};

export { addJournalQuestion, fetchJournalQuestionType, deleteJournalQuestion };
export {
  addJournalSession,
  editJournalSession,
  deleteJournalSession,
  fetchAllJournalSessions,
};
export { addJournal, editJournal, fetchJournalsBySession };
