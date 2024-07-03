import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, StatusBar, Pressable } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { RetangGreen, RetangOrange } from './forms';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

// Configurar o idioma para o calendário
LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

export default function ReservarLivro({ navigation }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  const formatarData = (data) => {
    if (!data) return 'Selecionar data';
    const [ano, mes, dia] = data.split('-');
    return `${dia} de ${LocaleConfig.locales['pt'].monthNames[parseInt(mes) - 1]} de ${ano}`;
  };

  const marcarDatasSelecionadas = (dataInicio, dataFim) => {
    const dates = {};
    let currentDate = new Date(dataInicio);
    while (currentDate <= new Date(dataFim)) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      dates[formattedDate] = { selected: true, marked: true, selectedColor: '#FFAD9F' };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const onDayPress = (dia) => {
    const dataSelecionada = dia.dateString;
    const hoje = new Date().toISOString().split('T')[0];
    if (dataSelecionada < hoje) {
      Alert.alert('Erro', 'Não é possível selecionar uma data que já passou.');
      return;
    }
    const novaDataFim = new Date(dataSelecionada);
    novaDataFim.setDate(novaDataFim.getDate() + 14);
    setStartDate(dataSelecionada);
    setEndDate(novaDataFim.toISOString().split('T')[0]);
    const markedDates = marcarDatasSelecionadas(dataSelecionada, novaDataFim);
    setMarkedDates(markedDates);
  };

  // Obter a data de hoje
  const hoje = new Date().toISOString().split('T')[0];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />

        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
          <Text style={styles.paragraph}>Reservar livro</Text>
        </View>
      </View>

      <View style={styles.containerCalendar}>
        <Text style={styles.title}>Calendário</Text>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          minDate={hoje}
          markedDates={{
            ...markedDates,
            [startDate ? startDate : '']: { selected: true, marked: true, selectedColor: '#FF735C' },
            [endDate ? endDate : '']: { selected: true, marked: true, selectedColor: '#FF735C' }
          }}
        />
        <View style={styles.datePickerContainer}>
          <Text>Reservar de:</Text>
          <Text style={styles.dateText}>
            {formatarData(startDate)}
          </Text>
        </View>
        <View style={styles.datePickerContainer}>
          <Text>Até:</Text>
          <Text style={styles.dateText}>
            {formatarData(endDate)}
          </Text>
        </View>
        <Pressable 
          style={
            ({pressed}) => pressed ?
              [styles.button, styles.btnPress]
            :
              styles.button
            }   
          onPress={() => {
          if (startDate && endDate) {
            Alert.alert('Livro reservado com sucesso!', `Reserva de: ${formatarData(startDate)} até ${formatarData(endDate)}`);
          } else {
            Alert.alert('Erro', 'Por favor, selecione uma data de início e término.');
          }
        }}>
          <Text style={styles.buttonText}>Finalizar reserva</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

