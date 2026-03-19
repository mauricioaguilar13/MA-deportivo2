import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
        headerTitle: "MA Deportivo",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="padel"
        options={{
          title: "Padel",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tennis"
        options={{
          title: "Tennis",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="circle-thin" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="futbol"
        options={{
          title: "Fútbol",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="soccer-ball-o" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="basket"
        options={{
          title: "Basket",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="dribbble" size={24} color={color} />
          ),
        }}
      />

      {/* OCULTAS (no salen en el menú) */}
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="f1" options={{ href: null }} />
      <Tabs.Screen name="noticias" options={{ href: null }} />
      <Tabs.Screen name="carrito" options={{ href: null }} />
    </Tabs>
  );
}
