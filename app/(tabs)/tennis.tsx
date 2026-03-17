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

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: ImageSourcePropType;
}

const PRODUCTOS_TENNIS: Producto[] = [
  {
    id: 1,
    nombre: "Raqueta Tennis",
    precio: 180,
    imagen: require("../../assets/images/raqueta.jpg"),
  },
  {
    id: 2,
    nombre: "Pelotas Tennis",
    precio: 15,
    imagen: require("../../assets/images/pelotas.jpg"),
  },
  {
    id: 3,
    nombre: "Gorra Deportiva",
    precio: 25,
    imagen: require("../../assets/images/gorra.jpg"),
  },
];

export default function Tennis() {
  function comprar(item: Producto) {
    agregarAlCarrito({ nombre: item.nombre, precio: item.precio });
    alert(`${item.nombre} agregado al carrito`);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Artículos de Tennis</Text>

      {PRODUCTOS_TENNIS.map((item) => (
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
