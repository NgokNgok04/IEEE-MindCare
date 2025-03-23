import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { icons } from "@/constants/icons";
import BackButton from "@/components/BackButton";
import { articles } from "@/constants/articles";

const Articles = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerTitle}>Articles</Text>
      </View>
      <Text style={styles.textSubtitle}>Read New Articles</Text>
      <FlatList
        contentContainerStyle={styles.articlesGrid}
        data={articles}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Articles;

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
  textSubtitle: {
    marginLeft: 20,
    marginTop: 20,
    color: "#092C4C",
  },
  card: {
    width: 150, // Adjust size of each card
    marginRight: 15, // Spacing between cards
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 0.5,
    alignSelf: "flex-start",
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
    minHeight: 40,
  },
  articlesGrid: {
    alignItems: "center",
    gap: 20,
  },
  columnWrapper: {
    justifyContent: "flex-start",
  },
});
