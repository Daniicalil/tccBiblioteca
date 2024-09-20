import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";

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
    },
    {
      usu_nome: "Ana Beatriz Silva",
      usu_email: "ana.silva@example.com",
      usu_rm: "782134",
      usu_cad: "15/03/2024",
      optionLevel: "",
      confirmedLevel: "",
    },
    {
      usu_nome: "Ana Carolina Silva",
      usu_email: "ana.carolina@exemplo.com",
      usu_rm: "483726",
      usu_cad: "18/03/2024",
      optionLevel: "",
      confirmedLevel: "",
    },
  ]);

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
              updatedInfoUsuario[index].confirmedLevel = updatedInfoUsuario[index].optionLevel;
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
        {/* <StatusBar backgroundColor="#3F7263" translucent={false} /> */}
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
                <RadioButton value="usu_cad" color="#FF735C" />
                <Text style={styles.radioLabel}>Data de cadastro</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="usu_nome" color="#FF735C" />
                <Text style={styles.radioLabel}>Usuário</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="usu_rm" color="#FF735C" />
                <Text style={styles.radioLabel}>RM</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        {infoUsuario.length === 0 ? (
          <Text style={styles.paragraph}>Nenhum cadastro disponível.</Text>
        ) : (
          infoUsuario.map((infosUsu, index) => (
            <View key={index} style={styles.lineSquare}>
              <View style={styles.dados}>
                <Text style={styles.dataCadastro}>
                  Cadastro realizado no dia: {infosUsu.usu_cad}
                </Text>
                <Text style={styles.nome}>Nome: {infosUsu.usu_nome}</Text>
                <Text style={styles.nome}>RM: {infosUsu.usu_rm}</Text>
                <Text style={styles.email}>E-mail: {infosUsu.usu_email}</Text>
              </View>
              <Line />
              <Text style={styles.conf}>Confirmar nível do usuário</Text>
              <View style={styles.buttonsSelecao}>
                {infosUsu.confirmedLevel === "" ? (
                  <>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={infosUsu.optionLevel}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={[
                          styles.picker,
                          isFocused
                            ? styles.pickerFocused
                            : styles.pickerUnfocused,
                        ]}
                        onValueChange={(itemValue) => {
                          const updatedInfoUsuario = [...infoUsuario];
                          updatedInfoUsuario[index].optionLevel = itemValue;
                          setInfoUsuario(updatedInfoUsuario);
                        }}
                      >
                        <Picker.Item label="Selecione uma opção" value="" />
                        <Picker.Item
                          label="Funcionário(a) - ADM"
                          value="Funcionário(a) - ADM"
                        />
                        <Picker.Item
                          label="Professor(a)"
                          value="Professor(a)"
                        />
                        <Picker.Item label="Aluno(a)" value="Aluno(a)" />
                      </Picker>
                    </View>
                    <Pressable
                      style={({ pressed }) =>
                        pressed
                          ? [styles.buttonConf, styles.btnConfPress]
                          : styles.buttonConf
                      }
                      onPress={() => handleConfirm(index)}
                    >
                      <Text style={styles.buttonTextConfSel}>Confirmar</Text>
                    </Pressable>
                  </>
                ) : (
                  <View style={styles.confirmation}>
                    <Text style={styles.confirmationText}>
                      Nível do usuário selecionado = {infosUsu.confirmedLevel}
                    </Text>
                    <FontAwesome name="check-circle" size={24} color="green" />
                  </View>
                )}
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
