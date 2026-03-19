import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function TennisScreen() {
  const productos = [
    { id: 1, nombre: "Raqueta Wilson Pro", precio: "$210", color: "bg-red-500" },
    { id: 2, nombre: "Set de Muñequeras", precio: "$12", color: "bg-white" },
    { id: 3, nombre: "Maleta de Tenis", precio: "$85", color: "bg-blue-800" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Tienda de Tennis</Text>
      
      {productos.map((item) => (
        <View key={item.id} className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <View className={`w-full h-32 rounded-xl mb-3 ${item.color} border border-gray-200`} />
          <Text className="text-lg font-bold text-gray-900">{item.nombre}</Text>
          <View className="flex-row justify-between items-center mt-2">
            <Text className="text-green-600 font-extrabold text-xl">{item.precio}</Text>
            <TouchableOpacity className="bg-black px-6 py-2 rounded-lg">
              <Text className="text-white font-bold">Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
