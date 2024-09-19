import React, { useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { RadioButton } from "react-native-paper";

import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";

const Line = () => <View style={styles.line} />;

export default function InformacoesReserva({ navigation, route }) {
  const [infoReserva] = useState([
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
  ]);

  const [selectedOption, setSelectedOption] = useState("liv_nome"); // Estado para controle de seleção

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
          <Text style={styles.paragraph}>
            Informações dos livros reservados
          </Text>
        </View>
        <BarraPesquisa />

        <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedOption(value)}
          value={selectedOption}
        >
          <View style={styles.seletores}>
            <View style={styles.radioOption}>
              <RadioButton value="liv_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Livro</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="aut_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Autor</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="dataReserva" color="#FF735C" />
              <Text style={styles.radioLabel}>Data da reserva</Text>
            </View>
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
                  <Text style={styles.reservado}>Reservado por: {usu_nome}</Text>
                  <Text style={styles.dataReserva}>
                    Reserva realizada no dia: {dataReserva}
                  </Text>
                  <Text style={styles.periodoReserva}>
                    Período da reserva: {periodo?.inicio || "Data não disponível"}{" "}
                    até {periodo?.fim || "Data não disponível"}
                  </Text>
                </View>
                <Line />
                <Text style={styles.conf}>Confirmar retirada do livro</Text>
                <View style={styles.buttonsReserva}>
                  {isConfirmed ? (
                    <View style={styles.confirmation}>
                      <Text style={styles.confirmationText}>Livro retirado</Text>
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
                          Confirmar retirada
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
