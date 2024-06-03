import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DatePicker from 'react-native-datepicker';

const CalendarScreen = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
        <DatePicker
          style={styles.datePicker}
          date={startDate}
          mode="date"
          placeholder="Selecione a data"
          format="DD-MM-YYYY"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          onDateChange={(date) => {
            setStartDate(date);
          }}
        />
      </View>
      <View style={styles.datePickerContainer}>
        <Text>Até:</Text>
        <DatePicker
          style={styles.datePicker}
          date={endDate}
          mode="date"
          placeholder="Selecione a data"
          format="DD-MM-YYYY"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          onDateChange={(date) => {
            setEndDate(date);
          }}
        />
      </View>
      <Button
        title="Finalizar reserva"
        color="#ff6347"
        onPress={() => {
          console.log(`Reserva de: ${startDate} até ${endDate}`);
        }}
      />
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
  datePicker: {
    width: '100%',
  },
});

export default CalendarScreen;
