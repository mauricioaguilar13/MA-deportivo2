import React from "react";
import {
  Button,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { agregarAlCarrito } from "../store/cart";
import { View, Text } from "react-native";

export default function Basket() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Basket</Text>
    </View>
  );
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: ImageSourcePropType;
}

const PRODUCTOS_BASKET: Producto[] = [
  {
    id: 1,
    nombre: "Camiseta NBA",
    precio: 50,
    imagen: require("../../assets/images/nba.jpg"),
  },
  {
    id: 2,
    nombre: "Zapatillas Basket",
    precio: 120,
    imagen: require("../../assets/images/zapatillas.jpg"),
  },
  {
    id: 3,
    nombre: "Balón Basket",
    precio: 35,
    imagen: require("../../assets/images/balon.jpg"),
  },
  {
    id: 4,
    nombre: "Mangas Deportivas",
    precio: 15,
    imagen: require("../../assets/images/mangas.jpg"),
  },
  {
    id: 5,
    nombre: "Mochila Deportiva",
    precio: 40,
    imagen: require("../../assets/images/mochila.jpg"),
  },
];

export default function Basket() {
  function comprar(item: Producto) {
    agregarAlCarrito({ nombre: item.nombre, precio: item.precio });
    alert(`${item.nombre} agregado al carrito`);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Artículos de Basket</Text>
      {PRODUCTOS_BASKET.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagen} style={styles.img} />
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text style={styles.precio}>${item.precio}</Text>
          <Button title="Agregar al carrito" onPress={() => comprar(item)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#f5f5f5" },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  img: { width: 130, height: 130, marginBottom: 10, resizeMode: "contain" },
  nombre: { fontSize: 18, fontWeight: "600" },
  precio: { fontSize: 16, color: "#888", marginBottom: 10 },
});
