import * as React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from '../../componentes/forms';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AnneFrank from '../../../../assets/Capa_dos_livros/o diário de anne frank.jpg';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function InformacoesReserva({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [showAviso, setShowAviso] = useState(false);
  const [devolucaoDate, setDevolucaoDate] = useState(null); // Novo estado para a data de devolução
  const [daysRemaining, setDaysRemaining] = useState(null); // Estado para dias restantes

  useEffect(() => {
    let interval;
    if (isConfirmed) {
      // Calcular a data de devolução (3 dias após a confirmação)
      const today = new Date();
      const devolucaoDate = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 dias depois
      setDevolucaoDate(devolucaoDate);

      // Atualizar a contagem de dias restantes a cada segundo
      interval = setInterval(() => {
        const now = new Date();
        const remainingTime = devolucaoDate - now;
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        if (remainingTime <= 0) {
          clearInterval(interval);
          setDaysRemaining(0);
        } else {
          setDaysRemaining(days);
        }
      }, 1000);
    }

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [isConfirmed]);

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
          <View style={styles.titlePagina}>
            <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
              <Text style={styles.paragraph}>Informações do livro</Text>
          </View>
          <Searchbar
            placeholder="Pesquisar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.barraPesq}
            inputStyle={styles.placeholderStyle}
            icon={() => (
              <Icon name="search" size={20} color="#000" style={styles.iconStyle} />
            )}
          />
          <View style={styles.lineSquare}>
            <View style={styles.infoLivro}>
              <Image source={AnneFrank} style={styles.capaLivros}/>
                <View style={styles.sectionTitle}>
                  <Text style={styles.titleLivro}>O diário de anne frank</Text>
                  <Text style={styles.autor}>Por: Anne Frank</Text>
                </View>
            </View>
            <Line />
            <View style={styles.dadosReservado}>
              <Text style={styles.reservado}>
                Reservado por: Clara Oliveira da Silva
              </Text>
              <Text style={styles.dataReserva}>
                Reserva realizada no dia: 12/08/2024
              </Text>
              <Text style={styles.periodoReserva}>
                Período da reserva: 12/08/2024 até 27/08/2024
              </Text>
              {showAviso && devolucaoDate && (
                <Text style={styles.avisoDevolucao}>
                  Você terá que fazer a devolução do livro em {daysRemaining} {daysRemaining === 1 ? 'dia' : 'dias'}
                </Text>
              )}
            </View>
            <Line />
            <Text style={styles.conf}>
              Confirmar retirada do livro
            </Text>
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
                    style={({ pressed }) => pressed ?
                      [styles.buttonConf, styles.btnConfPress]
                      : styles.buttonConf}
                    onPress={handleConfirm}
                  >
                    <Text style={styles.buttonTextConfReserv}>Retirada confirmada</Text>
                  </Pressable>

                  <Pressable
                    style={({ pressed }) => pressed ?
                      [styles.buttonCanc, styles.btnCancPress]
                      : styles.buttonCanc}
                    onPress={handleCancel}
                  >
                    <Text style={styles.buttonTextCancReserv}>Cancelar retirada</Text>
                  </Pressable>
                </>
              )}
            </View>
            <Text style={styles.observacao}>
              OBS: se após 3 dias da data inicial da reserva não for declarada nenhuma informação a respeito da retirada, a reserva será automaticamente cancelada.
            </Text>
          </View>
      </View>
    </ScrollView>
  );
}
