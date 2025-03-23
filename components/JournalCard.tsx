import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const moodIcons: Record<string, ImageSourcePropType> = {
  "-2": icons.moodminus2,
  "-1": icons.moodminus1,
  "0": icons.mood0,
  "1": icons.mood1,
  "2": icons.mood2,
};

const JournalCard = ({ date, textJournal, mood }: HistoryJournal) => {
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return (
    <View style={styles.journalCard}>
      <Text style={styles.date}>
        {weekday}, {day} {month} {year}
      </Text>
      <View style={styles.journalContainer}>
        <Image
          source={moodIcons[mood.toString()]}
          style={styles.journalImage}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.journalTime}>
            Written {hours}:{minutes}
          </Text>
          <Text style={styles.journalText}>{textJournal}</Text>
        </View>
      </View>
    </View>
  );
};

export default JournalCard;

const styles = StyleSheet.create({
  journalCard: {
    width: "100%",
  },
  date: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#2732A5",
  },
  journalTime: {
    color: "#57A6E0",
    fontFamily: "Poppins_600SemiBold",
  },
  journalImage: {
    width: 44,
    height: "100%",
  },
  journalContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
  },
  journalText: {
    marginRight: 50,
    fontFamily: "Poppins_400Regular",
  },
});
