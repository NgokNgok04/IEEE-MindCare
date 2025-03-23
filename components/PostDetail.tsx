import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PostDetail = ({ name, content }: Post) => {
  return (
    <View style={styles.post}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  post: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#75838F",
    marginVertical: 5,
    padding: 10,
  },
  name: {
    color: "#2732A5",
    fontFamily: "Poppins_600SemiBold",
  },
  content: {
    color: "#428CC3",
    fontFamily: "Poppins_400Regular",
  },
});
