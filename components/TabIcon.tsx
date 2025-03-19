import { Image, StyleSheet, Text, View } from "react-native";

export default function TabIcon({ focused, icon, title }: TabIcon) {
  return (
    <View style={styles.tab}>
      <Image
        style={styles.icon}
        source={icon}
        tintColor={focused ? "#57A6E0" : "#D9D9D9"}
        resizeMode="contain"
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    marginTop: 4,
  },
});
