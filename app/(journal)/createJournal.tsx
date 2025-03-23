import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import BackButton from "@/components/BackButton";
import { icons } from "@/constants/icons";
import { Link } from "expo-router";

const createJournal = () => {
  return (
    <View>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>New Journals</Text>
        <Text style={styles.headerSubTitle}>Which one do you prefer ?</Text>
      </View>
      <View style={styles.content}>
        <Link style={styles.container} href={"/(journal)/textJournal"}>
          <View style={styles.containerContent}>
            <Image
              style={styles.image}
              source={icons.voice}
              resizeMode="contain"
            />
            <Text style={styles.subtitle}>Voice Journal</Text>
            <Text style={styles.text}>
              Love to express yourself with long stories? Try voice journaling –
              just talk and let your thoughts flow!
            </Text>
          </View>
        </Link>
        <Link style={styles.container} href={"/(journal)/textJournal"}>
          <View style={styles.containerContent}>
            <Image
              style={styles.image}
              source={icons.text}
              resizeMode="contain"
            />
            <Text style={styles.subtitle}>Text Journal</Text>
            <Text style={styles.text}>
              Prefer organizing your thoughts in writing? Go for text journaling
              and put your feelings into words!
            </Text>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default createJournal;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#57A6E0",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 20,
  },
  headerTitle: {
    marginTop: 30,
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  headerSubTitle: {
    color: "#2732A5",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  content: {
    marginTop: 30,
    marginHorizontal: 20,
    gap: 20,
  },
  container: {
    borderColor: "#428CC3",
    borderWidth: 0.7,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    borderRadius: 16,
    height: 180,
    gap: 16,
  },
  containerContent: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: 40,
    height: 40,
  },
  subtitle: {
    color: "#2732A5",
    fontFamily: "Poppins_400Regular",
  },
  text: {
    color: "#428CC3",
    fontFamily: "Poppins_400Regular",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
  },
});
