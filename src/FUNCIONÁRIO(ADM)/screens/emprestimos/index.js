import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import Icon from "react-native-vector-icons/MaterialIcons";

import AnneFrank from "../../../../assets/Capa_dos_livros/o diário de anne frank.jpg";
import Verity from "../../../../assets/Capa_dos_livros/verity.jpg";
import OsMiseraveis from "../../../../assets/Capa_dos_livros/os miseráveis.jpg";

import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api";
import styles from "./styles";

const Line = () => {
  return <View style={styles.line} />;
};

export default function Emprestimos({ navigation }) {
  // const [emprestimos] = useState([
  //   {
  //     livro: {
  //       liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
  //       liv_nome: "O diário de Anne Frank",
  //       aut_nome: "Anne Frank",
  //     },
  //     usu_nome: "Clara Oliveira da Silva",
  //     dataReserva: "12/03/2024",
  //     periodo: {
  //       inicio: "12/03/2024",
  //       fim: "27/03/2024",
  //     },
  //   },
  //   {
  //     livro: {
  //       liv_foto_capa: require("../../../../assets/Capa_dos_livros/verity.jpg"),
  //       liv_nome: "Verity",
  //       aut_nome: "Colleen Hoover",
  //     },
  //     usu_nome: "Ana Carolina da Silva Santos",
  //     dataReserva: "10/03/2024",
  //     periodo: {
  //       inicio: "10/03/2024",
  //       fim: "25/03/2024",
  //     },
  //   },
  //   {
  //     livro: {
  //       liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
  //       liv_nome: "Os Miseráveis",
  //       aut_nome: "Victor Hugo",
  //     },
  //     usu_nome: "João Pedro Oliveira Souza",
  //     dataReserva: "25/03/2024",
  //     periodo: {
  //       inicio: "25/03/2024",
  //       fim: "09/04/2024",
  //     },
  //   },
  // ]);

  const [selectedSearchOption, setSelectedSearchOption] = useState("usu_nome");

  const [emprestimo, setEmprestimo] = useState([]);

  const [livNome, setlivNome] = useState("");

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
        <StatusBar backgroundColor="#3F7263" transLucent={false} />
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
          <Text style={styles.paragraph}>Empréstimos</Text>
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
                { label: "Data da reserva", value: "emp_data_emp" },
                { label: "Livro", value: "liv_nome" },
                { label: "Autor", value: "aut_nome" },
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

        {emprestimo.length > 0 ? (
          emprestimo.map(emp => (
            <View key={emp.usu_cod} style={styles.lineSquare}>
              <View style={styles.infoLivro}>
                <Image
                  source={emp.liv_foto_capa}
                  style={styles.capaLivros}
                />
                <View style={styles.sectionTitle}>
                  <Text style={styles.titleLivro}>{emp.liv_nome}</Text>
                  <Text style={styles.autor}>Por: {emp.aut_nome}</Text>
                </View>
              </View>
              <Line />
              <View style={styles.dadosReservado}>
                <Text style={styles.reservado}>
                  Reservado por: {emp.usu_nome}
                </Text>
                <Text style={styles.dataReserva}>
                  Reserva realizada no dia: {emp.emp_data_emp}
                </Text>
                <Text style={styles.periodoReserva}>
                  Período da reserva: {emp.periodo.inicio} até{" "}
                  {emp.periodo.fim}
                </Text>
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
