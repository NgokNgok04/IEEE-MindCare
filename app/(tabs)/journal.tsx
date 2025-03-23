import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import ToggleJournal from "@/components/ToggleJournal";
import JournalHistory from "@/components/JournalHistory";
import JournalRecent from "@/components/JournalRecent";
import { icons } from "@/constants/icons";
import { Link } from "expo-router";

const Journal = () => {
  const [selected, setSelected] = useState<"recent" | "history">("recent");
  return (
    <View style={styles.scroll}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>My Journals</Text>
        <ToggleJournal selected={selected} setSelected={setSelected} />
      </View>
      {selected === "history" && <JournalHistory />}
      {selected === "recent" && <JournalRecent />}
      {selected === "recent" && (
        <Link style={styles.addButton} href={"/(journal)/createJournal"}>
          <Image source={icons.add} style={styles.addImage} />
        </Link>
      )}
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
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
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 0,
  },
  addImage: {
    width: 50,
    height: 50,
  },
});
