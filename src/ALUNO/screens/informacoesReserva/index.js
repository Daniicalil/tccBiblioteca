import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RetangGreen, RetangOrange } from "../../../componentes/cabecalho/forms";
import Icon from "react-native-vector-icons/MaterialIcons";

import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";

const Line = () => {
  return <View style={styles.line} />;
};

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

  // Desestruturar startDate e endDate, com valores default se params não estiver definido
  const { startDate = null, endDate = null } = route.params || {};

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [showAviso, setShowAviso] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(null);

  // useEffect(() => {
  //   if (isConfirmed && endDate) {
  //     const calculateDaysRemaining = () => {
  //       const now = new Date();
  //       const finalDate = new Date(endDate);
  //       const timeDiff = finalDate - now;
  //       const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  //       setDaysRemaining(days >= 0 ? days : 0);
  //     };

  //     calculateDaysRemaining();

  //     const interval = setInterval(calculateDaysRemaining, 60 * 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [isConfirmed, endDate]);

  const handleConfirm = () => {
    setIsConfirmed(true);
    setIsCanceled(false);
    setShowAviso(true);
  };

  const handleCancel = () => {
    setIsCanceled(true);
    setIsConfirmed(false);
    setShowAviso(false);
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
        <BarraPesquisa />
        <View style={styles.lineSquare}>
          <View style={styles.infoLivro}>
            {infoReserva && infoReserva.livro && (
              <Image
                source={infoReserva.livro.liv_foto_capa}
                style={styles.capaLivros}
              />
            )}
            <View style={styles.sectionTitle}>
              {infoReserva && infoReserva.livro && (
                <Text style={styles.titleLivro}>
                  {infoReserva.livro.liv_nome}
                </Text>
              )}
              {infoReserva && infoReserva.livro && (
                <Text style={styles.autor}>
                  Por: {infoReserva.livro.aut_nome}
                </Text>
              )}
            </View>
          </View>
          <Line />
          <View style={styles.dadosReservado}>
            <Text style={styles.reservado}>
              Reservado por: {infoReserva.usu_nome}
            </Text>
            <Text style={styles.dataReserva}>
              Reserva realizada no dia: {infoReserva.dataReserva}
            </Text>
            <Text style={styles.periodoReserva}>
              Período da reserva:{" "}
              {infoReserva.periodo?.inicio || "Data não disponível"} até{" "}
              {infoReserva.periodo?.fim || "Data não disponível"}
            </Text>
            {/* <Text style={styles.dataReserva}>
              Reserva realizada no dia:{" "}
              {startDate
                ? new Date(startDate).toLocaleDateString()
                : "Data não disponível"}
            </Text>
            <Text style={styles.periodoReserva}>
              Período da reserva:{" "}
              {startDate
                ? new Date(startDate).toLocaleDateString()
                : "Data não disponível"}{" "}
              até{" "}
              {endDate
                ? new Date(endDate).toLocaleDateString()
                : "Data não disponível"}
            </Text> */}
            {/* {showAviso && (
              <Text style={styles.avisoDevolucao}>
                Você terá que fazer a devolução do livro em {daysRemaining}{" "}
                {daysRemaining === 1 ? "dia" : "dias"}
              </Text>
            )} */}
          </View>
          <Line />
          <Text style={styles.conf}>Confirmar retirada do livro</Text>
          <View style={styles.buttonsReserva}>
            {isConfirmed ? (
              <View style={styles.confirmation}>
                <Text style={styles.confirmationText}>Livro retirado</Text>
                <FontAwesome name="check-circle" size={24} color="green" />
              </View>
            ) : isCanceled ? (
              <View style={styles.cancellation}>
                <Text style={styles.cancellationText}>Retirada cancelada</Text>
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
                  } // Desativa o botão se a data não estiver disponível
                  onPress={isDateAvailable ? handleConfirm : null}
                  disabled={!isDateAvailable} // Desativa o botão se a data não estiver disponível
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
                  } // Desativa o botão se a data não estiver disponível
                  onPress={isDateAvailable ? handleCancel : null}
                  disabled={!isDateAvailable} // Desativa o botão se a data não estiver disponível
                >
                  <Text style={styles.buttonTextCancReserv}>
                    Cancelar retirada
                  </Text>
                </Pressable>
              </>
            )}
          </View>
          <Text style={styles.observacao}>
            OBS: se após 3 dias da data inicial da reserva não for declarada
            nenhuma informação a respeito da retirada, a reserva será
            automaticamente cancelada.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
