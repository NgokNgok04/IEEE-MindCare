import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import BackButton from "@/components/BackButton";
import { icons } from "@/constants/icons";
import { Link, router, useLocalSearchParams } from "expo-router";
const FinishJournal = () => {
  const { score, summary } = useLocalSearchParams();
  return (
    <ScrollView>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>DONE!!!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Journaling Done!!!</Text>
        <Image source={icons.person} style={styles.image} />
        <Text style={styles.text}>{summary}</Text>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/journal")}
          style={styles.finishBtn}
        >
          <Text style={styles.textBtn}>Finish</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FinishJournal;

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
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#2732A5",
  },
  image: {
    width: 192,
    height: 192,
  },
  content: {
    paddingHorizontal: 40,
    marginTop: 40,
    gap: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#428CC3",
    fontSize: 20,
    textAlign: "center",
  },
  finishBtn: {
    backgroundColor: "#428CC3",
    display: "flex",
    justifyContent: "center",
    borderRadius: 32,
    width: 280,
    height: 45,
  },
  textBtn: {
    display: "flex",
    justifyContent: "center",
    verticalAlign: "middle",
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },
});
