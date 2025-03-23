import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const JournalRecent = () => {
  return (
    <View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryMainNumber}>93</Text>
        <Text style={styles.summaryMainText}>Total Journals</Text>
      </View>
      <View style={styles.summarySubContainer}>
        <View>
          <Image source={icons.emotPositive} style={styles.summarySubImage} />
          <Text style={styles.summarySubNumber}>46</Text>
          <Text style={styles.summarySubText}>Positive</Text>
        </View>
        <View>
          <Image source={icons.fire} style={styles.summarySubImage} />
          <Text style={styles.summarySubNumber}>17</Text>
          <Text style={styles.summarySubText}>Streaks</Text>
        </View>
        <View>
          <Image source={icons.emotNegative} style={styles.summarySubImage} />
          <Text style={styles.summarySubNumber}>32</Text>
          <Text style={styles.summarySubText}>Negative</Text>
        </View>
      </View>
      <Text style={styles.summaryText}>Keep it up, You are doing great!</Text>
    </View>
  );
};

export default JournalRecent;

const styles = StyleSheet.create({
  summaryContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  summarySubContainer: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    width: "100%",
    transform: [{ translateY: -10 }],
    flexDirection: "row",
  },
  summaryMainNumber: {
    color: "#2732A5",
    fontSize: 64,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  summaryMainText: {
    transform: [{ translateY: -30 }],
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "#57A6E0",
    textAlign: "center",
  },
  summarySubImage: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
  },
  summarySubNumber: {
    fontFamily: "Poppins_600SemiBold",
    color: "#2732A5",
    fontSize: 20,
    textAlign: "center",
  },
  summarySubText: {
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    transform: [{ translateY: -10 }],
    color: "#75838F",
  },
  summaryText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    transform: [{ translateY: -10 }],
    textAlign: "center",
    color: "#428CC3",
  },
});
