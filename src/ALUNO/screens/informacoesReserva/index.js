import React, { useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { RadioButton } from "react-native-paper";

import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api"
import styles from "./styles";

const Line = () => <View style={styles.line} />;

export default function InformacoesReserva({ navigation, route }) {
  // const [infoReserva] = useState([
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
  // ]);

  const [reserva, setReserva] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState('liv_nome');

  const [livNome, setlivNome] = useState('')

  function atLivNome(nome) {
    setlivNome(nome)
  }

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = {
      usu_cod: 18,
      [selectedSearchOption]: livNome
    };
    try {
      const response = await api.post('/reservas', dados);
      console.log(response.data.dados);
      setReserva(response.data.dados);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + '\n' + error.response.data.dados);
      } else {
        alert('Erro no front-end' + '\n' + error);
      }
    }
  }

  const { startDate = null, endDate = null } = route.params || {};

  const [reservasStatus, setReservasStatus] = useState(
    infoReserva.map(() => ({ isConfirmed: false, isCanceled: false }))
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
        <BarraPesquisa livNome={livNome} atLivNome={atLivNome} listaLivros={listaLivros} />

        <View style={styles.radioContainer}>
          <RadioButton.Group
            onValueChange={setSelectedSearchOption}
            value={selectedSearchOption} liv_nome aut_nome emp_data_emp
          >
            <View style={styles.seletores}>
              {[
                { label: "Livro", value: "liv_nome" },
                { label: "Autor", value: "aut_nome" },
                { label: "Data da reserva", value: "emp_data_emp" },
                { label: "Código", value: "liv_cod" },
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

        {infoReserva.length === 0 ? (
          <Text style={styles.paragraph}>Nenhuma reserva ativa.</Text>
        ) : (
          infoReserva.map((reserva, index) => {
            const { livro, usu_nome, dataReserva, periodo } = reserva;
            const { isConfirmed, isCanceled } = reservasStatus[index];

            return (
              <View key={index} style={styles.lineSquare}>
                <View style={styles.infoLivro}>
                  <Image
                    source={livro.liv_foto_capa}
                    style={styles.capaLivros}
                  />
                  <View style={styles.livro}>
                    <Text style={styles.titleLivro}>{livro.liv_nome}</Text>
                    <Text style={styles.autor}>Por: {livro.aut_nome}</Text>
                  </View>
                </View>

                <Line />
                <View style={styles.dadosReservado}>
                  <Text style={styles.reservado}>
                    Reservado por: {usu_nome}
                  </Text>
                  <Text style={styles.dataReserva}>
                    Reserva realizada no dia: {dataReserva}
                  </Text>
                  <Text style={styles.periodoReserva}>
                    Período da reserva:{" "}
                    {periodo?.inicio || "Data não disponível"} até{" "}
                    {periodo?.fim || "Data não disponível"}
                  </Text>
                </View>
                <Line />
                <Text style={styles.conf}>Confirmar retirada do livro</Text>
                <View style={styles.buttonsReserva}>
                  {isConfirmed ? (
                    <View style={styles.confirmation}>
                      <Text style={styles.confirmationText}>
                        Livro retirado
                      </Text>
                      <FontAwesome
                        name="check-circle"
                        size={24}
                        color="green"
                      />
                    </View>
                  ) : isCanceled ? (
                    <View style={styles.cancellation}>
                      <Text style={styles.cancellationText}>
                        Retirada cancelada
                      </Text>
                      <FontAwesome name="times-circle" size={24} color="red" />
                    </View>
                  ) : (
                    <>
                      <Pressable
                        style={({ pressed }) =>
                          pressed
                            ? [styles.buttonConf, styles.btnConfPress]
                            : [
                              styles.buttonConf,
                              { opacity: !isDateAvailable ? 0.5 : 1 },
                            ]
                        }
                        onPress={
                          isDateAvailable ? () => handleConfirm(index) : null
                        }
                        disabled={!isDateAvailable}
                      >
                        <Text style={styles.buttonTextConfReserv}>
                          Retirada confirmada
                        </Text>
                      </Pressable>

                      <Pressable
                        style={({ pressed }) =>
                          pressed
                            ? [styles.buttonCanc, styles.btnCancPress]
                            : [
                              styles.buttonCanc,
                              { opacity: !isDateAvailable ? 0.5 : 1 },
                            ]
                        }
                        onPress={
                          isDateAvailable ? () => handleCancel(index) : null
                        }
                        disabled={!isDateAvailable}
                      >
                        <Text style={styles.buttonTextCancReserv}>
                          Cancelar retirada
                        </Text>
                      </Pressable>
                    </>
                  )}
                </View>
                <Text style={styles.observacao}>
                  OBS: se após 3 dias da data inicial da reserva não for
                  declarada nenhuma informação a respeito da retirada, a reserva
                  será automaticamente cancelada.
                </Text>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
}
