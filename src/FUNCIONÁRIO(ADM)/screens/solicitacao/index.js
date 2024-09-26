import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { RadioButton, Checkbox } from "react-native-paper";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";

const Line = () => {
  return <View style={styles.line} />;
};

export default function Solicitacao({ navigation }) {
  const [infoUsuario, setInfoUsuario] = useState([
    {
      usu_nome: "Clara Oliveira da Silva",
      usu_email: "clara.oliveira.silva@example.com",
      usu_rm: "550726",
      usu_cad: "13/03/2024",
      optionLevel: "",
      confirmedLevel: "",
      isSelected: false,
    },
    {
      usu_nome: "Ana Beatriz Silva",
      usu_email: "ana.silva@example.com",
      usu_rm: "782134",
      usu_cad: "15/03/2024",
      optionLevel: "",
      confirmedLevel: "",
      isSelected: false,
    },
    {
      usu_nome: "Ana Carolina Silva",
      usu_email: "ana.carolina@exemplo.com",
      usu_rm: "483726",
      usu_cad: "18/03/2024",
      optionLevel: "",
      confirmedLevel: "",
      isSelected: false,
    },
  ]);
  const handleCheckboxChange = (index) => {
    const updatedInfoUsuario = [...infoUsuario];
    updatedInfoUsuario[index].isSelected = !updatedInfoUsuario[index].isSelected;
    setInfoUsuario(updatedInfoUsuario);
  };

  const [selectedOption, setSelectedOption] = useState("usu_nome"); // Estado para controle de seleção

  const [optionLevel, setOptionLevel] = useState("");
  const [confirmedLevel, setConfirmedLevel] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleConfirm = (index) => {
    const updatedInfoUsuario = [...infoUsuario];

    if (updatedInfoUsuario[index].optionLevel === "") {
      Alert.alert("Erro", "Por favor, selecione um nível de acesso.");
    } else {
      Alert.alert(
        "Confirmação",
        "Você realmente deseja confirmar este nível para este usuário?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Confirmar",
            onPress: () => {
              updatedInfoUsuario[index].confirmedLevel =
                updatedInfoUsuario[index].optionLevel;
              setInfoUsuario(updatedInfoUsuario);
            },
          },
        ]
      );
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView style={styles.container}>
  <View style={styles.inicio}>
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
      <Text style={styles.paragraph}>Solicitações de usuários</Text>
    </View>
    <BarraPesquisa />

    <View style={styles.radioContainer}>
      <RadioButton.Group
        onValueChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        <View style={styles.seletores}>
          <View style={styles.radioOption}>
            <RadioButton
              value="usu_cad"
              color="#FF735C"
              uncheckedColor="#CCC"
            />
            <Text style={styles.radioLabel}>Data de cadastro</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton
              value="usu_nome"
              color="#FF735C"
              uncheckedColor="#CCC"
            />
            <Text style={styles.radioLabel}>Usuário</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton
              value="usu_rm"
              color="#FF735C"
              uncheckedColor="#CCC"
            />
            <Text style={styles.radioLabel}>RM</Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>

    {/* Mover o Picker para cá, logo abaixo dos RadioButtons */}
    <View style={styles.buttonsSelecao}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={optionLevel}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.picker,
            isFocused ? styles.pickerFocused : styles.pickerUnfocused,
          ]}
          onValueChange={(itemValue) => {
            setOptionLevel(itemValue); // Atualiza o optionLevel
          }}
        >
          <Picker.Item label="Selecione uma opção" value="" />
          <Picker.Item
            label="Funcionário(a) - ADM"
            value="Funcionário(a) - ADM"
          />
          <Picker.Item label="Professor(a)" value="Professor(a)" />
          <Picker.Item label="Aluno(a)" value="Aluno(a)" />
        </Picker>
      </View>

      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonConf, styles.btnConfPress]
            : styles.buttonConf
        }
        onPress={() => {
          infoUsuario.forEach((_, index) => {
            handleConfirm(index); // Chama a confirmação para cada usuário
          });
        }}
      >
        <Text style={styles.buttonTextConfSel}>Confirmar</Text>
      </Pressable>
    </View>

    {infoUsuario.map((infosUsu, index) => (
      <View key={infosUsu.usu_rm} style={styles.lineSquare}>
        <View style={styles.dados}>
          <Text style={styles.dataCadastro}>
            Cadastro realizado no dia: {infosUsu.usu_cad}
          </Text>
          <Text style={styles.nome}>Nome: {infosUsu.usu_nome}</Text>
          <Text style={styles.nome}>RM: {infosUsu.usu_rm}</Text>
          <Text style={styles.email}>E-mail: {infosUsu.usu_email}</Text>

          {/* Checkbox */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={infosUsu.isSelected ? "checked" : "unchecked"}
              onPress={() => handleCheckboxChange(index)}
              color="#FF735C"
            />
          </View>
        </View>
      </View>
    ))}
  </View>
</ScrollView>

  );
}
