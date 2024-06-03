import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReservarLivro = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndPicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALENDAR</Text>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        markedDates={{
          '2024-03-15': { selected: true, marked: true, selectedColor: 'orange' },
          '2024-03-16': { marked: true },
          '2024-03-17': { marked: true, dotColor: 'red', activeOpacity: 0 },
        }}
      />
      <View style={styles.datePickerContainer}>
        <Text>Reservar de:</Text>
        <TouchableOpacity onPress={() => setShowStartPicker(true)}>
          <Text style={styles.dateText}>
            {startDate.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onChangeStart}
          />
        )}
      </View>
      <View style={styles.datePickerContainer}>
        <Text>Até:</Text>
        <TouchableOpacity onPress={() => setShowEndPicker(true)}>
          <Text style={styles.dateText}>
            {endDate.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEnd}
          />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
        console.log(`Reserva de: ${startDate.toLocaleDateString()} até ${endDate.toLocaleDateString()}`);
      }}>
        <Text style={styles.buttonText}>Finalizar reserva</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
  },
  calendar: {
    marginBottom: 16,
  },
  datePickerContainer: {
    marginBottom: 16,
  },
  dateText: {
    fontSize: 18,
    color: '#000',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ReservarLivro;
