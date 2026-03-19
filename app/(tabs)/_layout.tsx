import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

function LogoHeader() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logoImage}
      />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarLabelStyle: { fontSize: 10 },
        headerTitle: () => <LogoHeader />,
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#fff", height: 110 },
      }}
    >
      <Tabs.Screen name="padel" options={{ title: "Padel", tabBarIcon: ({ color }) => <FontAwesome size={22} name="star" color={color} /> }} />
      <Tabs.Screen name="tennis" options={{ title: "Tennis", tabBarIcon: ({ color }) => <FontAwesome size={22} name="circle-thin" color={color} /> }} />
      <Tabs.Screen name="futbol" options={{ title: "Fútbol", tabBarIcon: ({ color }) => <FontAwesome size={22} name="soccer-ball-o" color={color} /> }} />
      <Tabs.Screen name="basket" options={{ title: "Basket", tabBarIcon: ({ color }) => <FontAwesome size={22} name="dribbble" color={color} /> }} />
      <Tabs.Screen name="f1" options={{ title: "F1", tabBarIcon: ({ color }) => <FontAwesome size={22} name="car" color={color} /> }} />
      <Tabs.Screen name="noticias" options={{ title: "Noticias", tabBarIcon: ({ color }) => <FontAwesome size={22} name="newspaper-o" color={color} /> }} />
      <Tabs.Screen name="carrito" options={{ title: "Carrito", tabBarIcon: ({ color }) => <FontAwesome size={22} name="shopping-cart" color={color} /> }} />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logoContainer: { paddingTop: 10, justifyContent: "center", alignItems: "center" },
  logoImage: { width: 120, height: 60, resizeMode: "contain" },
});
