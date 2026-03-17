import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// @ts-ignore
import { carrito, limpiarCarrito } from "../store/cart";

export default function Carrito() {
  const [items, setItems] = useState<any[]>([]);
  const navigation = useNavigation();

  // Esto actualiza la lista cada vez que entras a la pestaña
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setItems([...carrito]);
    });
    return unsubscribe;
  }, [navigation]);

  const total = items.reduce((sum, item) => sum + (item.precio || 0), 0);

  const finalizarCompra = () => {
    if (items.length === 0)
      return Alert.alert("Carrito vacío", "Agrega productos primero.");

    Alert.alert("¡Éxito!", "Gracias por tu compra.");
    limpiarCarrito();
    setItems([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Carrito</Text>

      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>El carrito está vacío 🛒</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemNombre}>{item.nombre}</Text>
                <Text style={styles.itemPrecio}>${item.precio}</Text>
              </View>
            )}
          />

          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>${total}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnComprar}
              onPress={finalizarCompra}
            >
              <Text style={styles.btnText}>Finalizar Pedido</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemNombre: { fontSize: 16 },
  itemPrecio: { fontSize: 16, fontWeight: "bold" },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: "#999" },
  footer: { paddingVertical: 20, borderTopWidth: 2, borderTopColor: "#f5f5f5" },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalLabel: { fontSize: 20, fontWeight: "bold" },
  totalAmount: { fontSize: 22, fontWeight: "bold", color: "#27ae60" },
  btnComprar: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
