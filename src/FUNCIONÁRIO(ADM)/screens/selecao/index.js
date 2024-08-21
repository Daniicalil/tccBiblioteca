import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { RetangGreen, RetangOrange } from '../../../ALUNO/componentes/forms';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function Selecao({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [confirmedLevel, setConfirmedLevel] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleConfirm = () => {
    if (selectedOption === "") {
      Alert.alert("Erro", "Por favor, selecione um nível.");
    } else {
      setConfirmedLevel(selectedOption);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
          <RetangGreen />
          <RetangOrange />
            <View style={styles.titlePagina}>
              <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
                <Text style={styles.paragraph}>Seleção de usuários</Text>
            </View>
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={styles.barraPesq}
              inputStyle={styles.placeholderStyle}
              icon={({size, color}) => (
                <Icon name="search" size={20} color="#CCC" style={styles.iconStyle}/>
              )}
            />
            <View style={styles.lineSquare}>
              <View style={styles.dados}>
                <Text style={styles.dataCadastro}>
                  Cadastro realizado no dia: 12/03/2024
                </Text>
                <Text style={styles.nome}>
                  Nome: Clara Oliveira da Silva
                </Text>
                <Text style={styles.nome}>
                  RM: 550726
                </Text>
                <Text style={styles.email}>
                  E-mail: clara.oliveira.silva@example.com
                </Text>
              </View>
              <Line />
              <Text style={styles.conf}>
                Confirmar nível do usuário
              </Text>
              <View style={styles.buttonsSelecao}>
                {confirmedLevel === "" ? (
                  <>
                  <View style={styles.pickerContainer}>
                    <Picker
                      selectedValue={selectedOption}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      style={[styles.picker, isFocused ? styles.pickerFocused : styles.pickerUnfocused]}
                      onValueChange={(itemValue) => setSelectedOption(itemValue)}
                    >
                      <Picker.Item label="Selecione uma opção" value="" />
                      <Picker.Item label="Funcionário(a) - ADM" value="Funcionário(a) - ADM" />
                      <Picker.Item label="Professor(a)" value="Professor(a)" />
                      <Picker.Item label="Aluno(a)" value="Aluno(a)" />
                    </Picker>
                  </View>
                    <Pressable
                      style={({ pressed }) => pressed ?
                        [styles.buttonConf, styles.btnConfPress]
                        : styles.buttonConf}
                      onPress={handleConfirm}
                    >
                      <Text style={styles.buttonTextConfSel}>Confirmar</Text>
                    </Pressable>
                  </>
                ) : (
                  <View style={styles.confirmation}>
                    <Text style={styles.confirmationText}>
                      Nível do usuário selecionado = {confirmedLevel}
                    </Text>
                    <FontAwesome name="check-circle" size={24} color="green" />
                  </View>
                )}
              </View>
            </View>
      </View>
    </ScrollView>
  );
}
