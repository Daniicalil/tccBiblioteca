import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import {RetangGreen, RetangOrange} from '../../../ALUNO/componentes/forms';

import styles from './styles';

export default function AddLivroExistente({ navigation }) {
  const [selectedlivros, setSelectedlivros] = useState('');

  const livros = [
    { label: '(Selecione)', value: '' },
    { label: 'O diário de Anne Frank - Anne Frank', value: 'OdiáriodeAnneFrank(AnneFrank)' },
    { label: 'Dom Casmurro - Machado de Assis', value: 'DomCasmurro(MachadodeAssis)' },
    { label: 'Romeu e Julieta - William Shakespeare', value: 'RomeueJulieta(WilliamShakespeare)' },
    { label: '1984 - George Orwell', value: '1984(GeorgeOrwell)' },
    { label: 'Os Miseráveis - Victor Hugo', value: 'OsMiseráveis(VictorHugo)' },
    { label: 'Orgulho e Preconceito - Jane Austen', value: 'OrgulhoePreconceito(JaneAusten)' },
    { label: 'A garota do lago - Charlie Donlea', value: 'Agarotadolago(CharlieDonlea)' },
    { label: 'Verity - Collen Hoover', value: 'Verity(CollenHoover)' },
    { label: 'Heartstopper - Alice Oseman', value: 'Heartstopper(AliceOseman)' },
    { label: 'Deixada para trás - Charlie Donlea', value: 'Deixadaparatrás(CharlieDonlea)' },
    { label: 'A revolução dos bichos - George Orwell', value: 'Arevoluçãodosbichos(GeorgeOrwell)' },
    { label: 'Procure nas cinzas - Charlie Donlea', value: 'Procurenascinzas(CharlieDonlea)' },
    { label: 'Harry Potter e a Pedra Filosofal - J.K. Rowling', value: 'HarryPottereaPedraFilosofal(J.K.Rowling)' },
    { label: 'Drácula - Bram Stoker', value: 'Dracula(BramStoker)' },
    { label: 'Os Sete Maridos de Evelyn Hugo - Taylor Jekins Reid', value: 'Ossetemaridosdeevelynhugo(TaylorJekinsReid)' },
  ]; 

  const handleAddLivroExist = () => {
    if (selectedlivros) {
      Alert.alert(
        'Livro existente adicionado com sucesso!',
        '',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('biblioteca'),
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
          <RetangGreen />
          <RetangOrange />
          <View style={styles.titlePagina}>
            <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
              <Text style={styles.paragraph}>Adicionar livro existente</Text>
          </View>

        <Text style={styles.textPicker}>Livro existente:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedlivros}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedlivros(itemValue)}
          >
            {livros.map((livros) => (
              <Picker.Item
                key={livros.value}
                label={livros.label}
                value={livros.value}
              />
            ))}
          </Picker>
        </View>
      
        <View style={styles.viewEditar}>
          <Pressable
            onPress={handleAddLivroExist}
            style={
              ({ pressed }) => pressed ? 
                [styles.button, styles.btnPress] 
              : 
                styles.button}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}