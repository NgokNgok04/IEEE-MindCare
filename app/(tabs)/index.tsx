import ArticleCarousel from "@/components/ArticlesCarousel";
import { icons } from "@/constants/icons";
import { Link, router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <Image source={icons.logo3} resizeMode="contain" style={styles.logo} />
        <View style={styles.profile}>
          <Image
            source={icons.kiel}
            resizeMode="cover"
            style={styles.profilePicture}
          />
          <View style={styles.textSection}>
            <Text style={styles.name}>Hi, Matt</Text>
            <Text style={styles.text}>How's Your Day?</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.subTitle}>How's your mood level?</Text>
        <Image source={icons.statistic} style={styles.statistic} />
      </View>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Goals Ahead</Text>
        <View style={styles.goal}>
          <Image source={icons.createGoal} style={styles.createGoal} />
          <View style={styles.goalText}>
            <Text>Don't forget to create your goals.</Text>
            <Link style={styles.linkGoal} href={"/goal"}>
              Create Goals
            </Link>
          </View>
        </View>
      </View>
      <View style={styles.articlecontent}>
        <View style={styles.articles}>
          <Text>Read New Articles</Text>
          <Link style={styles.readAll} href={"/articles"}>
            Read All
          </Link>
        </View>
        <ArticleCarousel />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  navbar: {
    backgroundColor: "#57A6E0",
    height: 190,
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logo: {
    marginTop: 20,
    marginLeft: 20,
    width: 160,
    height: 56,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  profilePicture: {
    marginTop: 0,
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 599,
  },
  textSection: {
    width: "100%",
  },
  name: {
    width: "100%",
    fontSize: 32,
    fontFamily: "Poppins_600SemiBold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    transform: [{ translateY: -10 }],
  },
  content: {
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 25,
    alignItems: "center",
  },
  articlecontent: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 25,
    alignItems: "center",
  },
  subTitle: {
    width: "100%",
  },
  statistic: {
    marginTop: 20,
    width: 170,
    height: 170,
  },
  createGoal: {
    width: 43,
    height: 59,
  },
  goal: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
    gap: 12,
  },
  goalText: {
    display: "flex",
    justifyContent: "center",
  },
  linkGoal: {
    fontFamily: "Poppins_600SemiBold",
    textDecorationLine: "underline",
  },
  articles: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingRight: 25,
    justifyContent: "space-between",
  },
  readAll: {
    textDecorationLine: "underline",
  },
});
