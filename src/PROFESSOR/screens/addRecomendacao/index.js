import React, { useState } from 'react';
import { StatusBar, ScrollView, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RetangGreen, RetangOrange } from './forms';
import styles from './styles';

export default function AddRecomendacao({ navigation }) {
  const [selectedCurso, setSelectedCurso] = useState('');
  const [selectedLivro, setSelectedLivro] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMode, setSelectedMode] = useState(null);

  const cursos = [
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

  const livros = [
    { label: '(Selecione)', value: '' },
    { label: 'O diário de Anne Frank - Anne Frank', value: 'OdiáriodeAnneFrank(AnneFrank)' },
    { label: 'A garota do lago - Charlie Donlea', value: 'Agarotadolago(CharlieDonlea)' },
    { label: 'Verity - Collen Hoover', value: 'Verity(CollenHoover)' },
    { label: 'Heartstopper - Alice Oseman', value: 'Heartstopper(AliceOseman)' },
    { label: 'Deixada para trás - Charlie Donlea', value: 'Deixadaparatrás(CharlieDonlea)' },
    { label: 'A revolução dos bichos - George Orwell', value: 'Arevoluçãodosbichos(GeorgeOrwell)' },
    { label: 'Procure nas cinzas - Charlie Donlea', value: 'Procurenascinzas(CharlieDonlea)' },
  ];

  const SquareRadioButton = ({ label, checked, onPress }) => (
    <Pressable onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          {checked ? (
            <Icon name="square" size={22} color="#3F7263" />
          ) : (
            <Icon name="square-o" size={22} color="#B9B9B9" />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  const handleAddRecommendation = () => {
    if (selectedCurso && selectedLivro && description && selectedMode) {
      Alert.alert(
        'Recomendação adicionada com sucesso!',
        '',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('recomendacao'),
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
      <StatusBar backgroundColor='#3F7263' translucent={false} />
      <RetangGreen />
      <RetangOrange />

      <View style={styles.titlePagina}>
        <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
        <Text style={styles.paragraph}>Adicionar recomendação</Text>
      </View>

      <Text style={styles.textPicker}>Curso recomendado:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCurso}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCurso(itemValue)}
        >
          {cursos.map((curso) => (
            <Picker.Item
              key={curso.value}
              label={curso.label}
              value={curso.value}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.textPicker}>Livro recomendado:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLivro}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLivro(itemValue)}
        >
          {livros.map((livro) => (
            <Picker.Item
              key={livro.value}
              label={livro.label}
              value={livro.value}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.textPicker}>Descrição do professor:</Text>
      <TextInput
        style={styles.input}
        value={description}
        multiline
        onChangeText={setDescription}
      />

      <Text style={styles.recommendationMod}>Recomendado para:</Text>
      <View style={styles.RadioButtonQuad}>
        <SquareRadioButton
          label="1º Mod."
          checked={selectedMode === "1stMod"}
          onPress={() => handleModeChange("1stMod")}
        />
        <SquareRadioButton
          label="2º Mod."
          checked={selectedMode === "2ndMod"}
          onPress={() => handleModeChange("2ndMod")}
        />
        <SquareRadioButton
          label="3º Mod."
          checked={selectedMode === "3rdMod"}
          onPress={() => handleModeChange("3rdMod")}
        />
        <SquareRadioButton
          label="4º Mod."
          checked={selectedMode === "4thMod"}
          onPress={() => handleModeChange("4thMod")}
        />
      </View>

      <Pressable
        style={({ pressed }) => pressed ? [styles.button, styles.btnPress] : styles.button}
        onPress={handleAddRecommendation}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}
