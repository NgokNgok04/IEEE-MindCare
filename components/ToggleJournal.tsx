import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ToggleJournal = ({ selected, setSelected }: ToggleJournal) => {
  return (
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
  );
};

export default ToggleJournal;

const styles = StyleSheet.create({
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
