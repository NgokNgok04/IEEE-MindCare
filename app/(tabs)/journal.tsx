import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";

const Journal = () => {
  const [selected, setSelected] = useState<"recent" | "history">("recent");
  return (
    <ScrollView>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>Journals</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            onPress={() => setSelected("recent")}
            style={[
              styles.toggleButton,
              selected === "recent" && styles.selectedToggle,
              {
                borderTopLeftRadius: 32,
                borderBottomLeftRadius: 32,
              },
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                selected === "recent" && styles.selectedTextToggle,
              ]}
            >
              Recent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected("history")}
            style={[
              styles.toggleButton,
              selected === "history" && styles.selectedToggle,
              {
                borderTopRightRadius: 32,
                borderBottomRightRadius: 32,
              },
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                selected === "history" && styles.selectedTextToggle,
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 32,
  },
  toggleButton: {
    backgroundColor: "#2732A5",
    width: "50%",
    height: 45,
  },
  toggleText: {
    color: "#FFF",
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    width: "100%",
    height: "100%",
    verticalAlign: "middle",
  },
  selectedToggle: {
    backgroundColor: "#2732A5",
  },
  selectedTextToggle: {
    color: "#57A6E0",
    backgroundColor: "#DEE5FB",
    borderColor: "#2732A5",
    borderWidth: 2,
    borderRadius: 32,
  },
});
