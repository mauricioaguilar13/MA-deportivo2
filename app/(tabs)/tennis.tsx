import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function TennisScreen() {
  const productos = [
    { id: 1, nombre: "Raqueta Wilson Pro", precio: "$210", color: "#ef4444" },
    { id: 2, nombre: "Set de Muñequeras", precio: "$12", color: "#e5e7eb" },
    { id: 3, nombre: "Maleta de Tenis", precio: "$85", color: "#1e40af" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tienda de Tennis</Text>
      {productos.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={[styles.imagePlaceholder, { backgroundColor: item.color }]} />
          <Text style={styles.productName}>{item.nombre}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>{item.precio}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#f3f4f6' },
  imagePlaceholder: { width: '100%', height: 120, borderRadius: 12, marginBottom: 12 },
  productName: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 20, fontWeight: '800', color: '#059669' },
  button: { backgroundColor: '#000', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
