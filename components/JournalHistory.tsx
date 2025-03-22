import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import JournalCard from "./JournalCard";
import { journals } from "@/constants/journals";

const JournalHistory = () => {
  return (
    <View style={styles.historyJournal}>
      <FlatList
        data={journals}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <JournalCard
            date={item.date}
            textJournal={item.textJournal}
            mood={item.mood}
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
