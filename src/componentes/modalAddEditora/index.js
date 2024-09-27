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

const ModalAddEditora = ({ show, onClose }) => {
  const [editora, setEditora] = useState("");

  // Usando o hook de confirmação, passando a mensagem, ação e tela para navegar
  const showConfirmAlert = useBotaoConfirmarAcao(
    "Você realmente deseja adicionar esta editora?", // Mensagem de confirmação
    () => {
      // Ação ao confirmar, neste caso, salvar a editora
      console.log(`Editora ${editora} salva!`);
      setEditora(""); // Limpar o campo após salvar
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
          <Text style={styles.textInput}>Editora:</Text>
          <TextInput
            style={styles.inputField}
            value={editora}
            onChangeText={setEditora}
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

export default ModalAddEditora;
