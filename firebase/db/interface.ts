interface User {
    id: string;
    name: string;
    email: string;
}

interface JournalSession {
    id: string;
    created_at: Date;
    summary?: string;
    score?: number;
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