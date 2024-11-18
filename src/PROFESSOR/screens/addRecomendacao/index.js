import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { RadioButton } from "react-native-paper";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import api from "../../../services/api";
import styles from "./styles";

export default function AddRecomendacao({ navigation }) {
  const [curso, setCurso] = useState([]);
  const [livro, setLivro] = useState([]);

  const [recomendacao, setRecomendacao] = useState({
    rcm_cod: "",
    cur_nome: "",
    rcm_mod1: 0,
    rcm_mod2: 0,
    rcm_mod3: 0,
    rcm_mod4: 0,
    liv_cod: "",
    liv_nome: "",
  });

  const [selectedValue, setSelectedValue] = useState("");

  const modulos = [
    { label: "1º Mód.", value: "rcm_mod1" },
    { label: "2º Mód.", value: "rcm_mod2" },
    { label: "3º Mód.", value: "rcm_mod3" },
    { label: "4º Mód.", value: "rcm_mod4" },
  ];

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  useEffect(() => {
    listaCursos();
    listaLivro();
  }, []);

  async function listaCursos() {
    try {
      const response = await api.post("/autores");
      setCurso(response.data.dados);
      console.log(response.data);
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

  async function listaLivro() {
    try {
      const response = await api.post("/livros");
      setLivro(response.data.dados);
      console.log(response.data);
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

  function handleApiError(error) {
    if (error.response) {
      Alert.alert(
        error.response.data.mensagem + "\n" + error.response.data.dados
      );
    } else {
      alert("Erro no front-end" + "\n" + error);
    }
  }

  const handleChange = (e) => {
    setRecomendacao((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRadioButtonChange = (newValue) => {
    setSelectedValue(newValue);

    // Define o módulo selecionado como 1 e os outros como 0
    setRecomendacao((prev) => ({
      ...prev,
      rcm_mod1: newValue === "rcm_mod1" ? 1 : 0,
      rcm_mod2: newValue === "rcm_mod2" ? 1 : 0,
      rcm_mod3: newValue === "rcm_mod3" ? 1 : 0,
      rcm_mod4: newValue === "rcm_mod4" ? 1 : 0,
    }));
  };

  const [valida, setValida] = useState({
    cur_cod: {
      validado: valDefault,
      mensagem: [],
    },
    liv_cod: {
      validado: valDefault,
      mensagem: [],
    },
    modulo: {
      validado: valDefault,
      mensagem: [],
    },
  });

  function validaModulo() {
    let objTemp = {
      validado: valSucesso,
      mensagem: [],
    };

    if (
      recomendacao.rcm_mod1 === 0 &&
      recomendacao.rcm_mod2 === 0 &&
      recomendacao.rcm_mod3 === 0 &&
      recomendacao.rcm_mod4 === 0 
    ) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Selecione o módulo recomendado");
    }

    setValida((prevState) => ({
      ...prevState,
      modulo: objTemp,
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaSelectCurso() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!recomendacao.cur_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Por favor, selecione uma opção no campo.");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      cur_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaSelectLivro() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!recomendacao.liv_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Por favor, selecione uma opção no campo.");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      liv_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let itensValidados = 0;

    // Validar campos
    itensValidados += validaModulo();
    itensValidados += validaSelectCurso();
    itensValidados += validaSelectLivro();

    // Verificar se todos os campos estão validados
    if (itensValidados === 3) {
      try {
        const response = await api.post("/recomendacao", recomendacao);
        if (response.data.sucesso) {
          Alert.alert("Recomendação adicionada com sucesso");
          navigate.navigation("recomendacao");
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
  console.log(recomendacao);

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor='#3F7263' translucent={false} /> */}
      <RetangGreen />
      <RetangOrange />
      <View style={styles.titlePagina}>
        <FontAwesome
          name="angle-left"
          size={30}
          color="black"
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.paragraph}>Adicionar recomendação</Text>
      </View>

      <Text style={styles.textPicker}>Curso recomendado:</Text>
      <View style={styles.pickerContainer}>
        <View className={styles.radioOptions}>
          <Picker
            selectedValue={recomendacao.cur_cod}
            style={styles.picker}
            onValueChange={(value) => handleChange("cur_cod", value)}
            value={recomendacao.cur_cod}
          >
            {curso.map((cur) => (
              <Picker.Item
                key={cur.cur_cod}
                label={cur.cur_nome}
                value={cur.cur_cod}
              />
            ))}
          </Picker>
        </View>
      </View>
      {valida.cur_cod.mensagem.map((mens) => (
        <Text key={mens} style={styles.small}>
          {mens}
        </Text>
      ))}

      <Text style={styles.textPicker}>Livro recomendado:</Text>
      <View style={styles.pickerContainer}>
        <View className={styles.radioOptions}>
          <Picker
            selectedValue={recomendacao.liv_cod}
            style={styles.picker}
            onValueChange={(value) => handleChange("liv_cod", value)}
            value={recomendacao.liv_cod}
          >
            {livro.map((liv) => (
              <Picker.Item
                key={liv.liv_cod}
                label={`${liv.liv_cod} - ${liv.liv_nome} - ${liv.aut_nome}`}
                value={liv.liv_cod}
              />
            ))}
          </Picker>
        </View>
      </View>
      {valida.liv_cod.mensagem.map((mens) => (
        <Text key={mens} style={styles.small}>
          {mens}
        </Text>
      ))}

      {/* <Text style={styles.textPicker}>Descrição do professor:</Text>
          <TextInput
            style={styles.input}
            value={description}
            multiline
            onChangeText={setDescription}
          /> */}
      <RadioButton.Group
        onValueChange={handleRadioButtonChange}
        value={selectedValue}
      >
        <Text style={styles.recommendationMod}>Recomendado para:</Text>
        <View style={styles.RadioButtonQuad}>
          <View style={styles.divRadio}>
            {modulos.map((mod) => (
              <View key={mod.value} style={styles.buttonRadio}>
                <RadioButton
                  value={mod.value}
                  color="#FF735C"
                  uncheckedColor="#CCC"
                />
                <Text>{mod.label}</Text>
              </View>
            ))}
          </View>
          {valida.modulo.mensagem.map((mens) => (
            <Text key={mens} style={styles.small}>
              {mens}
            </Text>
          ))}
        </View>
      </RadioButton.Group>

      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.btnPress] : styles.button
        }
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}
