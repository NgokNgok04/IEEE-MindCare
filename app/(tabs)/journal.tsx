import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import ToggleJournal from "@/components/ToggleJournal";
import JournalHistory from "@/components/JournalHistory";

const Journal = () => {
  const [selected, setSelected] = useState<"recent" | "history">("recent");
  return (
    <ScrollView>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>My Journals</Text>
        <ToggleJournal selected={selected} setSelected={setSelected} />
      </View>
      {selected === "history" && <JournalHistory />}
    </ScrollView>
  );
};

export default Journal;

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
});
