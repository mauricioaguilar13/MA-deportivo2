import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#007AFF" }}>
      <Tabs.Screen
        name="futbol"
        options={{
          title: "Fútbol",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="soccer-ball-o" color={color} />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="basket" options={{ href: null }} />
      <Tabs.Screen name="padel" options={{ href: null }} />
      <Tabs.Screen name="tennis" options={{ href: null }} />
    </Tabs>
  );
}
