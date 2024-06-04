import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
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

const ReservarLivro = () => {

  const [startDate, setStartDate] = useState(null);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const [showEndPicker, setShowEndPicker] = useState(false);
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
      dates[formattedDate] = { selected: true, marked: true, selectedColor: '#FF735C' };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const onDayPress = (dia) => {
    const dataSelecionada = dia.dateString;
    const novaDataFim = new Date(dataSelecionada);
    novaDataFim.setDate(novaDataFim.getDate() + 14);
    setStartDate(dataSelecionada);
    setEndDate(novaDataFim.toISOString().split('T')[0]);
    const markedDates = marcarDatasSelecionadas(dataSelecionada, novaDataFim);
    setMarkedDates(markedDates);
  };

  const onChangeStart = (evento, dataSelecionada) => {
    setShowStartPicker(false);
    if (dataSelecionada) {
      const novaDataFim = new Date(dataSelecionada);
      novaDataFim.setDate(novaDataFim.getDate() + 14);
      setStartDate(dataSelecionada.toISOString().split('T')[0]);
      setEndDate(novaDataFim.toISOString().split('T')[0]);
      const markedDates = marcarDatasSelecionadas(dataSelecionada, novaDataFim);
      setMarkedDates(markedDates);
    }
  };

  const onChangeEnd = (evento, dataSelecionada) => {
    setShowEndPicker(false);
    if (dataSelecionada) {
      setEndDate(dataSelecionada.toISOString().split('T')[0]);
      const markedDates = marcarDatasSelecionadas(startDate, dataSelecionada);
      setMarkedDates(markedDates);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />

        <View style={styles.titlePagina}>
        <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}/>
          <Text style={styles.paragraph}>Reservar livro</Text>
        </View>
      </View>

      <View style={styles.containerCalendar}>
        <Text style={styles.title}>Calendário</Text>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            ...markedDates,
            [startDate ? startDate : '']: { selected: true, marked: true, selectedColor: '#3F7263' },
            [endDate ? endDate : '']: { selected: true, marked: true, selectedColor: '#3F7263' }
          }}
        />
        <View style={styles.datePickerContainer}>
          <Text>Reservar de:</Text>
          <TouchableOpacity onPress={() => setShowStartPicker(true)}>
            <Text style={styles.dateText}>
              {formatarData(startDate)}
            </Text>
          </TouchableOpacity>
          {showStartPicker && (
            <DateTimePicker
              value={startDate ? new Date(startDate) : new Date()}
              mode="date"
              onChange={onChangeStart}
            />
          )}
        </View>
        <View style={styles.datePickerContainer}>
          <Text>Até:</Text>
          <TouchableOpacity onPress={() => setShowEndPicker(true)}>
            <Text style={styles.dateText}>
              {formatarData(endDate)}
            </Text>
          </TouchableOpacity>
          {showEndPicker && (
            <DateTimePicker
              value={endDate ? new Date(endDate) : new Date()}
              mode="date"
              onChange={onChangeEnd}
            />
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          if (startDate && endDate) {
            Alert.alert('Livro reservado com sucesso!', `Reserva de: ${formatarData(startDate)} até ${formatarData(endDate)}`);
          } else {
            Alert.alert('Erro', 'Por favor, selecione uma data de início e término.');
          }
        }}>
          <Text style={styles.buttonText}>Finalizar reserva</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ReservarLivro;
