import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import styles from "./styles";
import useBotaoConfirmarAcao from "../alertConfirmacao";

const ModalAddAutor = ({ show, onClose }) => {
  const [autor, setAutor] = useState("");

  // Usando o hook de confirmação, passando a mensagem, ação e tela para navegar
  const showConfirmAlert = useBotaoConfirmarAcao(
    "Você realmente deseja adicionar este autor?", // Mensagem de confirmação
    () => {
      // Ação ao confirmar, neste caso, salvar o autor
      console.log(`Autor ${autor} salvo!`);
      setAutor(""); // Limpar o campo após salvar
    },
    "addLivroNovo"
  );

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.textInput}>Autor(a):</Text>
          <TextInput
            style={styles.inputField}
            value={autor}
            onChangeText={setAutor}
          />
          <View style={styles.buttonsContainer}>
            <Pressable onPress={showConfirmAlert} style={styles.modalButtonAdd}>
              <Text style={styles.buttonTextAdd}>Adicionar</Text>
            </Pressable>
            <Pressable onPress={onClose} style={styles.modalButtonCanc}>
              <Text style={styles.buttonTextCanc}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddAutor;
