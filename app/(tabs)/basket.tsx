import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function BasketScreen() {
  const productos = [
    { id: 1, nombre: "Balón Spalding NBA", precio: "$60", color: "bg-orange-500" },
    { id: 2, nombre: "Camiseta Lakers #23", precio: "$90", color: "bg-purple-600" },
    { id: 3, nombre: "Red de Repuesto", precio: "$10", color: "bg-gray-300" },
  ];

  return (
    <ScrollView className="flex-1 bg-orange-50 p-4">
      <Text className="text-2xl font-black text-orange-900 mb-4">Basket Zone</Text>
      
      {productos.map((item) => (
        <View key={item.id} className="bg-white rounded-3xl p-5 mb-4 shadow-lg">
          <View className={`w-full h-40 rounded-2xl mb-4 ${item.color}`} />
          <Text className="text-xl font-bold text-gray-800">{item.nombre}</Text>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-orange-600 font-black text-2xl">{item.precio}</Text>
            <TouchableOpacity className="bg-orange-500 px-5 py-3 rounded-2xl">
              <Text className="text-white font-bold text-center">Añadir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
