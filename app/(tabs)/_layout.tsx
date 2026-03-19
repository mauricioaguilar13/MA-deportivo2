import React from "react";
import { FontAwesome6 } from "@expo/vector-icons"; // Cambiado a FontAwesome6
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "MA Deportivo",
      }}
    >
      {/* Pantallas visibles en el TabBar */}
      <Tabs.Screen
        name="futbol"
        options={{
          title: "Fútbol",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="futbol" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="padel"
        options={{
          title: "Pádel",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="racket" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="tennis"
        options={{
          title: "Tenis",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="racket" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="basket"
        options={{
          title: "Basket",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="basketball" size={size} color={color} />
          ),
        }}
      />

      {/* Pantallas ocultas del TabBar */}
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="f1" options={{ href: null }} />
      <Tabs.Screen name="noticias" options={{ href: null }} />
      <Tabs.Screen name="carrito" options={{ href: null }} />
    </Tabs>
  );
}
