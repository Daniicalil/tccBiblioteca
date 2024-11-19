import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { RadioButton } from "react-native-paper";
import { API_URL, API_PORT } from "@env";

import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api";
import styles from "./styles";

const Line = () => <View style={styles.line} />;

export default function InformacoesReserva({ navigation, route }) {
  const apiUrl = API_URL; // URL da API
  const apiPorta = API_PORT; // Porta da API

  const [reserva, setReserva] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("liv_nome");

  const [livNome, setlivNome] = useState("");

  function atLivNome(nome) {
    setlivNome(nome);
  }

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = {
      usu_cod: 18,
      [selectedSearchOption]: livNome,
    };
    try {
      const response = await api.post("/reservas", dados);
      console.log(response.data.dados);
      setReserva(response.data.dados);
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

  const { startDate = null, endDate = null } = route.params || {};

  const [reservasStatus, setReservasStatus] = useState(
    reserva.map(() => ({ isConfirmed: false, isCanceled: false }))
  );

  const handleConfirm = (index) => {
    setReservasStatus((prevStatus) =>
      prevStatus.map((status, i) =>
        i === index
          ? { ...status, isConfirmed: true, isCanceled: false }
          : status
      )
    );
  };

  const handleCancel = (index) => {
    setReservasStatus((prevStatus) =>
      prevStatus.map((status, i) =>
        i === index
          ? { ...status, isConfirmed: false, isCanceled: true }
          : status
      )
    );
  };

  const isDateAvailable = startDate && endDate;

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
          <Text style={styles.paragraph}>Informações do livro reservado</Text>
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
                { label: "Livro", value: "liv_nome" },
                { label: "Autor", value: "aut_nome" },
                { label: "Data da reserva", value: "emp_data_emp" },
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

        {reserva.length > 0 ? (
          reserva.map((reserv) => (
            <View key={reserv.usu_cod} style={styles.lineSquare}>
              <View style={styles.infoLivro}>
                <Image
                  source={reserv.liv_foto_capa}
                  style={styles.capaLivros}
                />
                <View style={styles.livro}>
                  <Text style={styles.titleLivro}>{reserv.liv_nome}</Text>
                  <Text style={styles.autor}>Por: {reserv.aut_nome}</Text>
                </View>
              </View>

              <Line />
              <View style={styles.dadosReservado}>
                <Text style={styles.reservado}>
                  Reservado por: {reserv.usu_nome}
                </Text>
                <Text style={styles.dataReserva}>
                  Data do Empréstimo:{" "}
                  {reserv.Empréstimo || "Data não disponível"}
                </Text>
                <Text style={styles.dataReserva}>
                  Data de Devolução: {reserv.Devolução || "Data não disponível"}
                </Text>
              </View>
              <Line />
              <Text style={styles.observacao}>
                OBS: Lembre-se de devolver o livro até a data!
              </Text>
            </View>
          ))
        ) : (
          <Text>Não há resultados para a requisição</Text>
        )}
      </View>
    </ScrollView>
  );
}
