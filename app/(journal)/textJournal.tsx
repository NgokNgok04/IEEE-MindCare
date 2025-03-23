import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { questions } from "@/constants/questions";

const TextJournal = () => {
  const [question, setQuestion] = useState(1);
  const total = questions.length;
  const handleNext = () => {
    setQuestion((question) => Math.min(total, question + 1));
  };
  const handlePrev = () => {
    setQuestion((question) => Math.max(1, question - 1));
  };
  const progress = ((question - 1) / total) * 100;
  return (
    <View>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>New Journals</Text>
        <View style={styles.progressBarWrapper}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.question}>{questions[question - 1].question}</Text>
        <TextInput
          placeholder="Write Your message here..."
          multiline={true}
          style={styles.answer}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.navButton}>
        {question !== 1 && (
          <TouchableOpacity style={styles.before} onPress={() => handlePrev()}>
            <Text style={styles.beforeText}>Before</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.next} onPress={() => handleNext()}>
          <Text style={styles.nextText}>
            {question !== total ? "Next" : "Submit"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextJournal;

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
  headerSubTitle: {
    color: "#2732A5",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  progressBarWrapper: {
    display: "flex",
    alignSelf: "center",
    height: 10,
    marginTop: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
    width: 350,
  },
  progressBarFill: {
    height: 10,
    backgroundColor: "#2732A5",
  },
  content: {
    marginTop: 20,
  },
  question: {
    paddingHorizontal: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#2732A5",
    fontSize: 20,
  },
  answer: {
    borderColor: "#2732A5",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 15,
    height: 278,
    padding: 20,
    paddingTop: 10,
  },
  navButton: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  before: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#428CC3",
    height: 40,
    width: 125,
  },
  next: {
    borderRadius: 32,
    height: 40,
    width: 125,
    backgroundColor: "#428CC3",
  },
  beforeText: {
    color: "#428CC3",
    fontFamily: "Poppins_600SemiBold",
    height: "100%",
    verticalAlign: "middle",
    alignSelf: "center",
  },
  nextText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#fff",
    display: "flex",
    height: "100%",
    verticalAlign: "middle",
    alignSelf: "center",
  },
});
