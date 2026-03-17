import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface Noticia {
  id: number;
  emoji: string;
  titulo: string;
  descripcion: string;
}

const LISTA_NOTICIAS: Noticia[] = [
  {
    id: 1,
    emoji: "⚽",
    titulo: "Real Madrid gana",
    descripcion: "Victoria contundente en su último partido de liga.",
  },
  {
    id: 2,
    emoji: "🏀",
    titulo: "NBA Temporada",
    descripcion: "Inicia la nueva temporada con grandes sorpresas.",
  },
  {
    id: 3,
    emoji: "🏎",
    titulo: "Fórmula 1",
    descripcion: "Nueva carrera este fin de semana. ¡No te la pierdas!",
  },
  {
    id: 4,
    emoji: "🎾",
    titulo: "Djokovic Campeón",
    descripcion: "Gana el torneo internacional tras una final épica.",
  },
];

export default function Noticias() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Noticias Deportivas</Text>

      {LISTA_NOTICIAS.map((item) => (
        <View key={item.id} style={styles.cardNoticia}>
          <Text style={styles.emoji}>{item.emoji}</Text>
          <View style={styles.textoContenedor}>
            <Text style={styles.tituloNoticia}>{item.titulo}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 25, color: "#333" },
  cardNoticia: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    borderLeftWidth: 5,
    borderLeftColor: "#007AFF", // Un toque de color azul
  },
  emoji: { fontSize: 30, marginRight: 15 },
  textoContenedor: { flex: 1 },
  tituloNoticia: { fontSize: 18, fontWeight: "bold", color: "#222" },
  descripcion: { fontSize: 14, color: "#666", marginTop: 4 },
});
