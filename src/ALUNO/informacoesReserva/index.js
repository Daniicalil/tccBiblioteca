import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { ScrollView ,View, Text, Image, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import AnneFrank from '../../../assets/Capa_dos_livros/o diário de anne frank.jpg';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function InformacoesReserva() {
return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
            
        <View style={styles.title}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}/>
          <Text style={styles.paragraph}>Informações do livro</Text>
        </View>
        <View style={styles.lineSquare}>
          <View style={styles.infoLivro}>
            <Image source={AnneFrank} style={styles.capaLivros}/>
              <View style={styles.sectionTitle}>
                <Text style={styles.title}>O diário de anne frank</Text>
                <Text style={styles.autor}>Por: Anne Frank</Text>
              </View>
          </View>
        <Line />
            <View style={styles.dadosReservado}>
              <Text style={styles.reservado}>
                Reservado por: Clara Oliveira da Silva
              </Text>
              <Text style={styles.dataReserva}>
                Reserva realizada no dia: 12/03/2024
              </Text>
              <Text style={styles.periodoReserva}>
                Período da reserva: 12/03/2024 até 27/03/2024
              </Text>
            </View>
        <Line />
              <Text style={styles.dataReserva}>
                Confirmar retirada do livro
              </Text>
            <View style={styles.buttonsReserva}>
              <Pressable style={styles.buttonConf}>
                <Text style={styles.buttonTextRes}>Retirada confirmada</Text>
              </Pressable>
              <Pressable style={styles.buttonCanc}>
                <Text style={styles.buttonTextRes}>Cancelar retirada</Text>
              </Pressable>
            </View>
          </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Reservar livro</Text>
        </Pressable>
      </View>
    </ScrollView>
    
  );
}