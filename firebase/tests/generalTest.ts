import {
  addJournalSession,
  fetchAllJournalSessions,
  fetchJournalsBySession,
} from "../db/journalService";
import { fetchUser } from "../db/userService";

// KWSOKwZPJL1Y1AxevHdX
const testUserService = async () => {
  const userId = "KWSOKwZPJL1Y1AxevHdX";

  const answers = [];
  for (let i = 0; i < 10; i++) {
    answers.push({
      questionId: "HIHI",
      content: "Mantap ke-" + i,
    });
  }

  await addJournalSession(userId, "MANTAP", 2, answers);
  const user = await fetchUser(userId);
  const Sessions = await fetchAllJournalSessions(userId);

  const journals = await fetchJournalsBySession(userId, Sessions[0].id);
};

testUserService();
