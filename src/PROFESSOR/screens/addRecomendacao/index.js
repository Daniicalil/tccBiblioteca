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
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeChange = (newValue) => {
    console.log("Novo valor selecionado:", newValue);
    setValue(newValue); // Atualiza o valor selecionado
  };

  const modulos = [
    { label: "1º Mód.", value: "0" },
    { label: "2º Mód.", value: "1" },
    { label: "3º Mód.", value: "2" },
    { label: "4º Mód.", value: "3" },
  ];

  const [recomendacao, setRecomendacao] = useState({
    rcm_cod: "",
    cur_nome: "",
    rcm_mod1: "",
    rcm_mod2: "",
    rcm_mod3: "",
    rcm_mod4: "",
  });

  const [value, setValue] = useState();

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  useEffect(() => {
    listaCursos();
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

  useEffect(() => {
    listaLivro();
  }, []);

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

  const handleChange = (e) => {
    setRecomendacao((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function validaModulo() {
    let objTemp = {
      validado: valSucesso,
      mensagem: [],
    };

    if (recomendacao.usu_sexo == 0) {
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

  //tem como uma rota puxar todas as informações do livro em um picker para escolher o livro na recomendação

  const SquareRadioButton = ({ label, checked, onPress }) => (
    <Pressable onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 8 }}>
          {checked ? (
            <Icon name="square" size={22} color="#3F7263" />
          ) : (
            <Icon name="square-o" size={22} color="#B9B9B9" />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );

  // const handleAddRecommendation = () => {
  //   if (selectedCurso && selectedLivro && description && selectedMode) {
  //     Alert.alert(
  //       "Confirmação",
  //       "Você realmente deseja adicionar esta recomendação?",
  //       [
  //         {
  //           text: "Cancelar",
  //           style: "cancel",
  //         },
  //         {
  //           text: "Confirmar",
  //           onPress: () => {
  //             Alert.alert(
  //               "Recomendação realizada",
  //               "Recomendação adicionada com sucesso!",
  //               [
  //                 {
  //                   text: "OK",
  //                   onPress: () => navigation.navigate("recomendacao"),
  //                 },
  //               ],
  //               { cancelable: false }
  //             );
  //           },
  //         },
  //       ]
  //     );
  //   } else {
  //     Alert.alert("Erro", "Por favor, preencha todos os campos.");
  //   }
  // };

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
      {/* <View style={styles.pickerContainer}>
        <View className={styles.radioOptions}>
          <Picker
            selectedValue={recomendacao}
            style={styles.picker}
            onValueChange={(value) => handleChange("", value)}
            value={recomendacao.liv_cod}
          >
            {recomendacao.map((livro) => (
              <Picker.Item
                key={livro.value}
                label={livro.label}
                value={livro.value}
              />
            ))}
          </Picker>
        </View>
      </View>
      {valida.liv_cod.mensagem.map((mens) => (
        <Text key={mens} style={styles.small}>
          {mens}
        </Text>
      ))} */}

      {/* <Text style={styles.textPicker}>Descrição do professor:</Text>
          <TextInput
            style={styles.input}
            value={description}
            multiline
            onChangeText={setDescription}
          /> */}
      <RadioButton.Group onValueChange={handleModeChange} value={value}>
        <Text style={styles.recommendationMod}>Recomendado para:</Text>
        <View style={styles.RadioButtonQuad}>
          <View style={styles.divRadio}>
            {modulos.map((mod) => (
              <View key={mod.value} style={styles.buttonRadio}>
                <RadioButton
                  value={mod.value}
                  color="#FF735C"
                  uncheckedColor="#CCC"
                  status={value === mod.value ? "checked" : "unchecked"}
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
