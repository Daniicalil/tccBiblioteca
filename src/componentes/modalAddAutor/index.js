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

const ModalAddAutor = ({ show, onClose }) => {
  const apiUrl = API_URL;   // URL da API
  const apiPorta = API_PORT; // Porta da API

  const [autor, setAutor] = useState({});

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

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  // validação
  const [valida, setValida] = useState({
    aut_nome: {
      validado: valDefault,
      mensagem: [],
    },
  });

  const handleChange = (fieldName, value) => {
    setAutor((prev) => ({ ...prev, [fieldName]: value })); // Atualiza o campo específico do autor
  };

  function validaAutNome() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!autor.aut_nome) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O nome do autor(a) é obrigatório");
    } else if (autor.aut_nome.length < 5) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Insira o nome completo do autor(a)");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      aut_nome: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let itensValidados = 0;

    itensValidados += validaAutNome();

    if (itensValidados === 1) {
      try {
        showConfirmAlert();
        const response = await api.post("/autores", autor);
        if (response.data.sucesso) {
          alert("Autor adicionado com sucesso!");
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
  console.log(autor);

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
          <View style={styles.divInput}>
            <TextInput
              name="aut_nome"
              style={styles.inputField}
              value={autor.aut_nome || ""} // Evita erro caso autor.aut_nome esteja undefined
              onChangeText={(value) => handleChange("aut_nome", value)}
            />
          </View>
          {valida.aut_nome.mensagem.map((mens) => (
            <Text key={mens} id="aut_nome" style={styles.small}>
              {mens}
            </Text>
          ))}

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

export default ModalAddAutor;
