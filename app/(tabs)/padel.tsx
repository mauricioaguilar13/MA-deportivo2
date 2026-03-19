import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function PadelScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tienda de Padel</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => console.log("OK")}
      >
        <Text style={styles.buttonText}>Probar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24 },
  button: { backgroundColor: 'blue', padding: 10, marginTop: 20 },
  buttonText: { color: 'white' }
});
