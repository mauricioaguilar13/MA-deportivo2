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

// 1. Definimos la Interface para que TypeScript sepa qué es un "Producto"
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: ImageSourcePropType; // Tipo especial para require() de imágenes
}

// 2. Creamos la lista de datos (Data) fuera del componente para que esté limpia
const PRODUCTOS_FUTBOL: Producto[] = [
  {
    id: 1,
    nombre: "Camisa Barcelona",
    precio: 45,
    imagen: require("../../assets/images/barcelona.jpg"),
  },
  {
    id: 2,
    nombre: "Camisa Real Madrid",
    precio: 45,
    imagen: require("../../assets/images/madrid.jpg"),
  },
  {
    id: 3,
    nombre: "Camisa Selección Honduras",
    precio: 40,
    imagen: require("../../assets/images/honduras.jpg"),
  },
  {
    id: 4,
    nombre: "Guantes de Portero",
    precio: 30,
    imagen: require("../../assets/images/guantes.jpg"),
  },
  {
    id: 5,
    nombre: "Balón Profesional",
    precio: 35,
    imagen: require("../../assets/images/balon.jpg"),
  },
];

export default function Futbol() {
  // 3. La función ahora recibe un objeto tipo "Producto"
  function comprar(item: Producto) {
    agregarAlCarrito({
      nombre: item.nombre,
      precio: item.precio,
    });

    alert(`${item.nombre} agregado al carrito`);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Artículos de Futbol</Text>

      {/* 4. Usamos .map() para renderizar todas las tarjetas automáticamente */}
      {PRODUCTOS_FUTBOL.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagen} style={styles.img} />
          <Text style={styles.nombreProducto}>{item.nombre}</Text>
          <Text style={styles.precioProducto}>${item.precio}</Text>

          <Button title="Agregar al carrito" onPress={() => comprar(item)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5", // Un color de fondo suave
  },
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
    // Sombra para que se vea más moderno (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  img: {
    width: 140,
    height: 140,
    marginBottom: 10,
    resizeMode: "contain",
  },
  nombreProducto: {
    fontSize: 18,
    fontWeight: "600",
  },
  precioProducto: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
});
