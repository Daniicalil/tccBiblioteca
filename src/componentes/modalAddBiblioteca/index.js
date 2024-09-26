import React, { useState } from "react";
import { View, Modal, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Ícone de X
import styles from "./styles";
import useBotaoConfirmarAcao from "../alertConfirmacao";

const ModalAddBiblioteca = ({ show, onClose }) => {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Ícone de X para fechar o modal */}
          <Pressable onPress={onClose} style={styles.closeIcon}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>

          <View style={styles.buttonsContainer}>
            {/* Botão para gerenciar livro existente */}
            <Pressable
              onPress={() => {
                navigation.navigate("gerenciarLivroExistente");
                onConfirm("gerenciarLivroExistente");
              }}
              style={styles.modalButtonAdd}
            >
              <Text style={styles.buttonTextAdd}>
                Gerenciar livro existente
              </Text>
            </Pressable>

            {/* Botão para adicionar novo livro */}
            <Pressable
              onPress={() => {
                navigation.navigate("adicionarLivroNovo"); // Navegar para página de adicionar novo livro
                onConfirm("adicionarLivroNovo");
              }}
              style={styles.modalButtonAdd}
            >
              <Text style={styles.buttonTextAdd}>Adicionar livro novo</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddBiblioteca;
