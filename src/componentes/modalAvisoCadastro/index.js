import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { API_URL, API_PORT } from "@env";
import styles from "./styles";
import useBotaoConfirmarAcao from "../alertConfirmacao";
import api from "../../services/api";

const ModalAvisoCadastro = ({ show, onClose, onConfirm }) => {
  const apiUrl = API_URL; // URL da API
  const apiPorta = API_PORT; // Porta da API

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text className={styles.sucess}>Cadastro realizado com sucesso!</Text>
          <Text className={styles.text}>
            O seu cadastro só será aprovado após o administrador selecionar o
            seu nível de acesso, enquanto isso não será possível realizar o
            login.
          </Text>
          <View className={styles.buttonsContainer}>
            <Pressable onClick={onConfirm} className={styles.modalButtonSim}>
              Ok
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddAutor;
