import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';

import AnneFrank from '../../../../assets/Capa_dos_livros/o diário de anne frank.jpg';
import Verity from '../../../../assets/Capa_dos_livros/verity.jpg';
import OsMiseraveis from '../../../../assets/Capa_dos_livros/os miseráveis.jpg';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function Emprestimos({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />

        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
          <Text style={styles.paragraph}>Empréstimos</Text>
        </View>
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
              Reserva realizada no dia: 12/03/2024
            </Text>
            <Text style={styles.periodoReserva}>
              Período da reserva: 12/03/2024 até 27/03/2024
            </Text>
          </View>
        </View>

        <View style={styles.lineSquare}>
          <View style={styles.infoLivro}>
            <Image source={Verity} style={styles.capaLivros}/>
              <View style={styles.sectionTitle}>
                <Text style={styles.titleLivro}>Verity</Text>
                <Text style={styles.autor}>Por: Collen Hoover</Text>
              </View>
          </View>
          <Line />
          <View style={styles.dadosReservado}>
            <Text style={styles.reservado}>
              Reservado por: Ana Carolina da Silva Santos
            </Text>
            <Text style={styles.dataReserva}>
              Reserva realizada no dia: 10/03/2024
            </Text>
            <Text style={styles.periodoReserva}>
              Período da reserva: 10/03/2024 até 25/03/2024
            </Text>
          </View>
        </View>

        <View style={styles.lineSquare}>
          <View style={styles.infoLivro}>
            <Image source={OsMiseraveis} style={styles.capaLivros}/>
              <View style={styles.sectionTitle}>
                <Text style={styles.titleLivro}>Os Miseráveis</Text>
                <Text style={styles.autor}>Por: Victor Hugo</Text>
              </View>
          </View>
          <Line />
          <View style={styles.dadosReservado}>
            <Text style={styles.reservado}>
              Reservado por: João Pedro Oliveira Souza
            </Text>
            <Text style={styles.dataReserva}>
              Reserva realizada no dia: 25/03/2024
            </Text>
            <Text style={styles.periodoReserva}>
              Período da reserva: 25/03/2024 até 09/04/2024
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
