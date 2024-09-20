import React, { useState } from 'react';
import { View, Modal, TextInput, Pressable, StyleSheet, Text } from 'react-native';
import styles from './styles';
import useBotaoConfirmarAcao from '../alertConfirmacao';

const ModalAddGenero = ({ show, onClose }) => {
  const [genero, setGenero] = useState('');

  // Usando o hook de confirmação, passando a mensagem, ação e tela para navegar
  const showConfirmAlert = useBotaoConfirmarAcao(
    "Você realmente deseja adicionar este gênero?", // Mensagem de confirmação
    () => {
      // Ação ao confirmar, neste caso, salvar o gênero
      console.log(`Gênero ${genero} salvo!`);
      setGenero(''); // Limpar o campo após salvar
    },
    'addLivroNovo'
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
          <Text style={styles.textInput}>Gênero:</Text>
          <TextInput
            style={styles.inputField}
            value={genero}
            onChangeText={setGenero}
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

export default ModalAddGenero;
