import { icons } from "@/constants/icons";
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
          <View>
            <Text style={styles.name}>Hi, Matt!</Text>
            <Text style={styles.text}>How's Your Day?</Text>
          </View>
        </View>
      </View>
      <ScrollView></ScrollView>
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
  name: {
    fontSize: 32,
    fontFamily: "Poppins_600SemiBold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    transform: [{ translateY: -20 }],
  },
});
