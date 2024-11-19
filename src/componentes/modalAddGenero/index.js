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

const ModalAddGenero = ({ show, onClose }) => {
  const apiUrl = API_URL;   // URL da API
  const apiPorta = API_PORT; // Porta da API

  const [genero, setGenero] = useState({});

  // Usando o hook de confirmação, passando a mensagem, ação e tela para navegar
  const showConfirmAlert = useBotaoConfirmarAcao(
    "Você realmente deseja adicionar este gênero?", // Mensagem de confirmação
    () => {
      // Ação ao confirmar, neste caso, salvar o gênero
      console.log(`Gênero ${genero} salvo!`);
      setGenero(""); // Limpar o campo após salvar
    },
    "addLivroNovo"
  );

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  // validação
  const [valida, setValida] = useState({
    gen_nome: {
      validado: valDefault,
      mensagem: [],
    },
  });

  const handleChange = (fieldName, value) => {
    setGenero((prev) => ({ ...prev, [fieldName]: value }));
  };

  function validaGenNome() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!genero.gen_nome) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O gênero é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      gen_nome: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let itensValidados = 0;

    itensValidados += validaGenNome();

    if (itensValidados === 1) {
      try {
        showConfirmAlert();
        const response = await api.post("/generos", genero);
        if (response.data.sucesso) {
          alert("Gênero adicionado com sucesso!");
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
  console.log(genero);

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
          <View style={styles.divInput}>
            <TextInput
              name="gen_nome"
              style={styles.inputField}
              value={genero.gen_nome || ""}
              onChangeText={(value) => handleChange("gen_nome", value)}
            />
            {valida.gen_nome.mensagem.map((mens) => (
              <Text key={mens} id="gen_nome" style={styles.small}>
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

export default ModalAddGenero;
