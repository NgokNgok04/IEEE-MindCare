import { Timestamp } from "firebase/firestore";

interface User {
  id: string;
  name: string;
  email: string;
}

interface JournalSession {
  id: string;
  created_at: Timestamp;
  summary: string;
  score: number;
}

interface Journal {
  id: string;
  questionId: string;
  content: string;
}

interface JournalWithQuestion extends Journal {
  question?: JournalQuestion;
}

interface JournalQuestion {
  id: string;
  type: string;
  question: string;
}

interface Post {
  id: string;
  userId: string;
  content: string;
  parentId: string | null;
  created_at: Timestamp;
  updated_at: Timestamp;
}

interface Like {
    id: string;
    likerId: string;
    created_at: Timestamp;
}

export {
  User,
  JournalSession,
  JournalQuestion,
  JournalWithQuestion,
  Journal,
  Post,
  Like,
};
