import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: "#007AFF",
      headerShown: true,
      headerTitle: "MA Deportivo" 
    }}>
      <Tabs.Screen
        name="futbol"
        options={{
          title: "Fútbol",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="soccer-ball-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="padel"
        options={{
          title: "Padel",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="star" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tennis"
        options={{
          title: "Tennis",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="circle-thin" color={color} />,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          title: "Basket",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="dribbble" color={color} />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="f1" options={{ href: null }} />
      <Tabs.Screen name="noticias" options={{ href: null }} />
      <Tabs.Screen name="carrito" options={{ href: null }} />
    </Tabs>
  );
}
