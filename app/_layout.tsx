import { Stack } from "expo-router";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import "./globals.css";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="articles"
        options={{
          headerShown: true,
          headerTitle: "Articles",
          headerTitleAlign: "center",
          headerStyle: styles.headerStyle, // Custom background color
          headerTitleStyle: styles.headerTitleStyle, // Text styling
          headerTintColor: "#000", // Text color
          // headerBackTitleVisible: false, // Hide back text
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#57A6E0", // Blue background
    borderBottomLeftRadius: 32, // Rounded bottom corners
    borderBottomRightRadius: 10,
    height: 120, // Increase height for curved effect
  },
  headerTitleStyle: {
    fontSize: 22,
    height: "50%",
    marginTop: 50,
    fontWeight: "bold",
    color: "#000", // Black text like the image
  },
});
