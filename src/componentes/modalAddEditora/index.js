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
import styles from "./styles";
import useBotaoConfirmarAcao from "../alertConfirmacao";
import api from "../../services/api";

const ModalAddEditora = ({ show, onClose }) => {
  const [editora, setEditora] = useState({});

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

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  // validação
  const [valida, setValida] = useState({
    edt_nome: {
      validado: valDefault,
      mensagem: [],
    },
  });

  const handleChange = (fieldName, value) => {
    setEditora((prev) => ({ ...prev, [fieldName]: value }));
  };

  function validaEdtNome() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!editora.edt_nome) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O nome da editora é obrigatório");
    }
    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      edt_nome: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let itensValidados = 0;

    itensValidados += validaEdtNome();

    if (itensValidados === 1) {
      try {
        showConfirmAlert();
        const response = await api.post("/editoras", editora);
        if (response.data.sucesso) {
          alert("Editora adicionada com sucesso!");
          setTimeout(() => {
            onClose(); // Fecha o modal após 2 segundos
          }, 2000);
        }
      } catch (error) {
        if (error.response) {
          Alert.alert(
            error.response.data.mensagem + "\n" + error.response.data.dados
          );
        } else {
          alert("Erro no front-end" + "\n" + error);
        }
      }
    }
  }
  console.log(editora);

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
          <View style={styles.divInput}>
            <TextInput
            name="edt_nome"
              style={styles.inputField}
              value={editora.edt_nome || ""}
              onChangeText={(value) => handleChange("edt_nome", value)}
            />
            {valida.edt_nome.mensagem.map((mens) => (
            <Text key={mens} id="edt_nome" style={styles.small}>
              {mens}
            </Text>
          ))}
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable onPress={handleSubmit} style={styles.modalButtonAdd}>
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
