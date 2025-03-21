import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { router } from "expo-router";

const BackButton = () => {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
      <Image source={icons.back} style={styles.backIcon} />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    gap: 10,
  },
  backIcon: {
    width: 10,
    height: 17,
  },
  backText: {
    color: "#000",
    fontSize: 16,
  },
});
