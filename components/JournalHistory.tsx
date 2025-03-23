import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import JournalCard from "./JournalCard";
import { journals } from "@/constants/journals";
import { JournalSession } from "@/firebase/db/interface";
import { Timestamp } from "firebase/firestore";
import { fetchAllJournalSessions } from "@/firebase/db/journalService";

const JournalHistory = () => {
  const [journalData, setJournalData] = useState<JournalSession[]>([
    {
      id: "0",
      created_at: Timestamp.now(),
      summary: "",
      score: 0,
    },
  ]);
  useEffect(() => {
    async function fetchResponse() {
      const response = await fetchAllJournalSessions("KWSOKwZPJL1Y1AxevHdX");
      setJournalData(response);
    }
    fetchResponse();
  }, []);
  return (
    <View style={styles.historyJournal}>
      <FlatList
        data={journalData}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <JournalCard
            date={item.created_at.toDate()}
            textJournal={item.summary}
            mood={item.score}
          />
        )}
      />
    </View>
  );
};

export default JournalHistory;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#57A6E0",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 20,
  },
  headerTitle: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  historyJournal: {
    marginVertical: 20,
    marginHorizontal: 20,
    display: "flex",
  },
});
