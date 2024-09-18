import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import Icon from "react-native-vector-icons/MaterialIcons";

import AnneFrank from "../../../../assets/Capa_dos_livros/o diário de anne frank.jpg";
import Verity from "../../../../assets/Capa_dos_livros/verity.jpg";
import OsMiseraveis from "../../../../assets/Capa_dos_livros/os miseráveis.jpg";

import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";

const Line = () => {
  return <View style={styles.line} />;
};

export default function Emprestimos({ navigation }) {
  const [emprestimos] = useState([
    {
      livro: {
        liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
        liv_nome: "O diário de Anne Frank",
        aut_nome: "Anne Frank",
      },
      usu_nome: "Clara Oliveira da Silva",
      dataReserva: "12/03/2024",
      periodo: {
        inicio: "12/03/2024",
        fim: "27/03/2024",
      },
    },
    {
      livro: {
        liv_foto_capa: require("../../../../assets/Capa_dos_livros/verity.jpg"),
        liv_nome: "Verity",
        aut_nome: "Colleen Hoover",
      },
      usu_nome: "Ana Carolina da Silva Santos",
      dataReserva: "10/03/2024",
      periodo: {
        inicio: "10/03/2024",
        fim: "25/03/2024",
      },
    },
    {
      livro: {
        liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
        liv_nome: "Os Miseráveis",
        aut_nome: "Victor Hugo",
      },
      usu_nome: "João Pedro Oliveira Souza",
      dataReserva: "25/03/2024",
      periodo: {
        inicio: "25/03/2024",
        fim: "09/04/2024",
      },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

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
        <BarraPesquisa />
        {emprestimos.length === 0 ? (
          <Text style={styles.paragraph}>Nenhum empréstimo disponível.</Text>
        ) : (
          emprestimos.map((infos, index) => (
            <View key={index} style={styles.lineSquare}>
              <View style={styles.infoLivro}>
                <Image
                  source={infos.livro.liv_foto_capa}
                  style={styles.capaLivros}
                />
                <View style={styles.sectionTitle}>
                  <Text style={styles.titleLivro}>{infos.livro.liv_nome}</Text>
                  <Text style={styles.autor}>Por: {infos.livro.aut_nome}</Text>
                </View>
              </View>
              <Line />
              <View style={styles.dadosReservado}>
                <Text style={styles.reservado}>
                  Reservado por: {infos.usu_nome}
                </Text>
                <Text style={styles.dataReserva}>
                  Reserva realizada no dia: {infos.dataReserva}
                </Text>
                <Text style={styles.periodoReserva}>
                  Período da reserva: {infos.periodo.inicio} até {infos.periodo.fim}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
