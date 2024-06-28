import * as React from 'react';
import { StatusBar, ScrollView, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { RetangGreen, RetangOrange } from './forms';

import styles from './styles';

export default function AddRecomendacao() {
  const [selectedRecomendacao, setSelectedRecomendacao] = React.useState('');

  const recomendações = [
    { label: '(Selecione)', value: '' },
    { label: 'Téc. em Recursos Humanos', value: 'tec.recursoshumanos' },
    { label: 'Téc. em Contabilidade', value: 'tec.contabilidade' },
    { label: 'Téc. em Design de Interiores', value: 'tec.designdeinteriores' },
    { label: 'Téc. em Enfermagem', value: 'tec.enfermagem' },
    { label: 'Téc. em Farmácia', value: 'tec.farmácia' },
    { label: 'Téc. em Informática', value: 'tec.informática' },
    { label: 'Téc. em Administração', value: 'tec.administração' },
    { label: 'Téc. em Redes', value: 'tec.redes' },
    { label: 'Téc. em Desenvolvimento de Sistemas', value: 'tec.desenvolvimentodesistemas' },
    { label: 'Téc. em Edificações', value: 'tec.edificações' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />

        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} />
          <Text style={styles.paragraph}>Adicionar recomendação</Text>
        </View>

        {/* Picker */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedRecomendacao}
            style={styles.picker}
            onValueChange={(itemValue) =>
              setSelectedRecomendacao(itemValue)
            }>
            {recomendações.map((recomendacao) => (
              <Picker.Item
                key={recomendacao.value}
                label={recomendacao.label}
                value={recomendacao.value}
              />
            ))}
          </Picker>
        </View>
      </View>
    </ScrollView>
  );
}
