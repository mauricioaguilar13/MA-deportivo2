import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function PadelScreen() {
  const productos = [
    { id: 1, nombre: "Pala Bullpadel", precio: "$250", color: "bg-blue-500" },
    { id: 2, nombre: "Pelotas Head (3pcs)", precio: "$15", color: "bg-yellow-400" },
    { id: 3, nombre: "Zapatillas Asics", precio: "$120", color: "bg-red-400" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Tienda de Padel</Text>
      
      {productos.map((item) => (
        <View key={item.id} className="bg-white rounded-xl p-4 mb-4 shadow-md border border-gray-200">
          <View className={`w-full h-32 rounded-lg mb-3 ${item.color} opacity-80`} />
          <Text className="text-lg font-semibold text-gray-700">{item.nombre}</Text>
          <View className="flex-row justify-between items-center mt-2">
            <Text className="text-blue-600 font-bold text-xl">{item.precio}</Text>
            <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-full">
              <Text className="text-white font-medium">Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
