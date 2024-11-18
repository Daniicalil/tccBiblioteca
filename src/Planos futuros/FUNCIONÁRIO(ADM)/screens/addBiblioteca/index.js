import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import styles from "./styles";

export default function AddBiblioteca({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor="#3F7263" transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome
            name="angle-left"
            size={30}
            color="black"
            style={styles.icon}
            onPress={() => navigation.navigate("biblioteca")}
          />
          <Text style={styles.paragraph}>Administrar</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("gerenciarLivroExistente")}
          style={({ pressed }) =>
            pressed ? [styles.button, styles.btnPress] : styles.button
          }
        >
          <Text style={styles.buttonText}>Gerenciar livro existente</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("addLivroNovo")}
          style={({ pressed }) =>
            pressed ? [styles.button, styles.btnPress] : styles.button
          }
        >
          <Text style={styles.buttonText}>Adicionar livro novo</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
