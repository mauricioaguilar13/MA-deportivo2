import React from "react";
import {
  Button,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { agregarAlCarrito } from "../store/cart";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: ImageSourcePropType;
}

const productosFutbol: Producto[] = [
  { id: 1, nombre: "Camiseta Oficial", precio: 85, imagen: require("../../assets/images/logo.png") },
  { id: 2, nombre: "Balón de Liga", precio: 30, imagen: require("../../assets/images/logo.png") },
];

export default function FutbolScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sección de Fútbol</Text>
      {productosFutbol.map((item) => (
        <View key={item.id} style={styles.productCard}>
          <Image source={item.imagen} style={styles.image} />
          <Text style={styles.productName}>{item.nombre}</Text>
          <Text style={styles.productPrice}>${item.precio}</Text>
          <Button title="Agregar" onPress={() => agregarAlCarrito(item)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  productCard: { marginBottom: 30, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 20 },
  image: { width: 150, height: 150, marginBottom: 10 },
  productName: { fontSize: 18, fontWeight: "500" },
  productPrice: { fontSize: 16, color: "#888", marginBottom: 10 },
});
