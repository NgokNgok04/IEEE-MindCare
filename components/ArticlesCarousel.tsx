import { articles } from "@/constants/articles";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function ArticleCarousel() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
  },
  listContainer: {
    paddingLeft: 0, // Ensures left margin
  },
  card: {
    width: 126, // Adjust size of each card
    marginRight: 15, // Spacing between cards
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 0.5,
  },
  image: {
    width: "100%",
    height: 85,
  },
  title: {
    marginTop: 8,
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: "600",
  },
});
