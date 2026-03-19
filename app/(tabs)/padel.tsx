import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function PadelScreen() {
  const productos = [
    { id: 1, nombre: "Pala Bullpadel", precio: "$250", color: "#3b82f6" },
    { id: 2, nombre: "Pelotas Head (3pcs)", precio: "$15", color: "#facc15" },
    { id: 3, nombre: "Zapatillas Asics", precio: "$120", color: "#f87171" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tienda de Padel</Text>
      {productos.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={[styles.imagePlaceholder, { backgroundColor: item.color }]} />
          <Text style={styles.productName}>{item.nombre}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>{item.precio}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#1f2937', marginBottom: 16 },
 card: { 
    backgroundColor: '#ffffff', 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 16,
    elevation: 3
  },
  imagePlaceholder: { width: '100%', height: 120, borderRadius: 8, marginBottom: 12 },
  productName: { fontSize: 18, fontWeight: '600', color: '#374151' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 20, fontWeight: 'bold', color: '#2563eb' },
  button: { backgroundColor: '#2563eb', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
  buttonText: { color: '#fff', fontWeight: '500' }
});
