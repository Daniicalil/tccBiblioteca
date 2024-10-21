import * as React from "react";
import { useState, useEffect } from "react";
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

import api from "../../../services/api";
import styles from "./styles";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";

const Line = () => {
  return <View style={styles.line} />;
};

const situacao = ["Ativo", "Inativo", "Pendente"];

export default function Solicitacao({ navigation }) {
  // const [infoUsuario, setInfoUsuario] = useState([
  //   {
  //     usu_nome: "Clara Oliveira da Silva",
  //     usu_email: "clara.oliveira.silva@example.com",
  //     usu_rm: "550726",
  //     usu_cad: "13/03/2024",
  //     optionLevel: "",
  //     confirmedLevel: "",
  //     isSelected: false,
  //   },
  //   {
  //     usu_nome: "Ana Beatriz Silva",
  //     usu_email: "ana.silva@example.com",
  //     usu_rm: "782134",
  //     usu_cad: "15/03/2024",
  //     optionLevel: "",
  //     confirmedLevel: "",
  //     isSelected: false,
  //   },
  //   {
  //     usu_nome: "Ana Carolina Silva",
  //     usu_email: "ana.carolina@exemplo.com",
  //     usu_rm: "483726",
  //     usu_cad: "18/03/2024",
  //     optionLevel: "",
  //     confirmedLevel: "",
  //     isSelected: false,
  //   },
  // ]);

  const handleCheckboxChange = (index) => {
    const updatedInfoUsuario = [...infoUsuario];
    updatedInfoUsuario[index].isSelected =
      !updatedInfoUsuario[index].isSelected;
    setInfoUsuario(updatedInfoUsuario);
  };

  const [selectedSearchOption, setSelectedSearchOption] = useState("usu_nome");
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [usuarioTipo, setUsuarioTipo] = useState("");
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [solicitacoesFiltradas, setSolicitacoesFiltradas] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [optionLevel, setOptionLevel] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [livNome, setlivNome] = useState("");

  const handleConfirm = async () => {
    if (selectedUsers.size === 0) {
      alert(
        "Nenhum usuário selecionado. Por favor, selecione um usuário antes de confirmar."
      );
      return;
    }

    const updatedData = Array.from(selectedUsers).map((usu_cod) => ({
      usu_cod,
      usu_tipo: parseInt(usuarioTipo),
      usu_ativo: 1,
      usu_aprovado: 1,
    }));

    try {
      await api.patch("/analizarUcu", { usuarios: updatedData });
      setShowModalConfirm(false);
      router.push("../usuarios/usu_pendentes");
    } catch (error) {
      alert("Erro ao atualizar usuários.");
      console.error(error);
    }
  };

  const toggleUserSelection = (usu_cod) => {
    setSelectedUsers((prevSelectedUsers) => {
      const updatedSelection = new Set(prevSelectedUsers);
      if (updatedSelection.has(usu_cod)) {
        updatedSelection.delete(usu_cod);
      } else {
        updatedSelection.add(usu_cod);
      }
      return updatedSelection;
    });
  };

  useEffect(() => {
    async function handleListaUsuarios() {
      try {
        const response = await api.post("/usu_pendentes");
        setListaUsuarios(response.data.dados);
        setSolicitacoesFiltradas(response.data.dados);
      } catch (error) {
        alert("Erro ao buscar usuários pendentes.");
      }
    }
    handleListaUsuarios();
  }, []);

  const filtrarSolicitacoes = (situacao) => {
    const filtradas = listaUsuarios.filter(
      (solicit) => solicit.situacao === situacao
    );
    setSolicitacoesFiltradas(filtradas);
  };

  function atLivNome(nome) {
    setlivNome(nome);
  }

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = { [selectedSearchOption]: livNome };
    try {
      const response = await api.post("/emprestimos", dados);
      console.log(response.data.dados);
      setEmprestimo(response.data.dados);
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
        <BarraPesquisa
          livNome={livNome}
          atLivNome={atLivNome}
          listaLivros={listaLivros}
        />

        <View style={styles.radioContainer}>
          <RadioButton.Group
            onValueChange={setSelectedSearchOption}
            value={selectedSearchOption}
          >
            <View style={styles.seletores}>
              {[
                { label: "Usuário", value: "usu_nome" },
                { label: "Tipo de usuário", value: "usu_tipo" },
                { label: "RM", value: "usu_rm" },
              ].map((option) => (
                <View key={option.value} style={styles.radioOption}>
                  <RadioButton
                    value={option.value}
                    color="#FF735C"
                    uncheckedColor="#CCC"
                    checked={selectedSearchOption === option.value}
                  />
                  <Text style={styles.radioLabel}>{option.label}</Text>
                </View>
              ))}
            </View>
          </RadioButton.Group>
        </View>

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
              <Picker.Item label="Funcionário(a) - ADM" value="2" />
              <Picker.Item label="Professor(a)" value="1" />
              <Picker.Item label="Aluno(a)" value="0" />
              <Picker.Item label="Negar acesso" value="5" />
            </Picker>
          </View>

          <Pressable
            style={({ pressed }) =>
              pressed
                ? [styles.buttonConf, styles.btnConfPress]
                : styles.buttonConf
            }
            onPress={handleConfirm}
          >
            <Text style={styles.buttonTextConfSel}>Confirmar</Text>
          </Pressable>
        </View>

        {solicitacoesFiltradas.length > 0 ? (
          solicitacoesFiltradas.map((solicit) => (
            <View key={solicit.usu_cod} style={styles.lineSquare}>
              <View style={styles.dados}>
                <Text style={styles.nome}>Nome: {solicit.usu_nome}</Text>
                <Text style={styles.nome}>RM: {solicit.usu_rm}</Text>
                <Text style={styles.email}>E-mail: {solicit.usu_email}</Text>
                <Text style={styles.email}>
                  Curso técnico ou médio: {solicit.cur_nome}
                </Text>

                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedUsers.has(solicit.usu_cod) ? 'checked' : 'unchecked'}
                    onPress={() => toggleUserSelection(solicit.usu_cod)}
                    color="#FF735C"
                  />
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text>Não há resultados para a requisição</Text>
        )}
      </View>
    </ScrollView>
  );
}
