import React, { useState } from 'react';
import { View, Modal, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Altere a importação

const ModalAddAutor = ({ show }) => {
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [autor, setAutor] = useState('');
  const navigation = useNavigation(); // Use useNavigation

  const openModalConfirm = () => setShowModalConfirm(true);
  const closeModalConfirm = () => setShowModalConfirm(false);

  const handleConfirm = () => {
    setShowModalConfirm(false);
    // Adicione a lógica para salvar o autor aqui
    navigation.navigate('biblioteca'); // Altere para usar navigation.navigate
  };

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
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
            <TouchableOpacity onPress={openModalConfirm} style={styles.modalButtonAdd}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModalConfirm} style={styles.modalButtonCanc}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showModalConfirm && (
        <ModalConfirmar
          show={showModalConfirm}
          onClose={closeModalConfirm}
          onConfirm={handleConfirm}
        />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    marginBottom: 10,
    fontSize: 16,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButtonAdd: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  modalButtonCanc: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ModalAddAutor;
