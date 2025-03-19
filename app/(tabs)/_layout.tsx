import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Journal" icon={icons.journal} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Community"
              icon={icons.community}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="counseling"
        options={{
          title: "Counseling",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Counseling"
              icon={icons.counseling}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="goal"
        options={{
          title: "Goal",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Goal" icon={icons.goal} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    display: "flex",
    height: 80,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 28,
  },
});
