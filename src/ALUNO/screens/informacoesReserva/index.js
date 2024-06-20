import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import AnneFrank from '../../../../assets/Capa_dos_livros/o diário de anne frank.jpg';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function InformacoesReserva({ navigation }) {
return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
            
        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
          <Text style={styles.paragraph}>Informações do livro</Text>
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
        <Line />
              <Text style={styles.conf}>
                Confirmar retirada do livro
              </Text>
            <View style={styles.buttonsReserva}>
              <Pressable 
                onPress={() => navigation.navigate('Login')} 
                style={
                  ({pressed}) => pressed ?
                    [styles.buttonConf, styles.btnConfPress]
                  :
                    styles.buttonConf
                  }  
              >
                <Text style={styles.buttonTextConfReserv}>Retirada confirmada</Text>
              </Pressable>

              <Pressable 
                style={
                  ({pressed}) => pressed ?
                    [styles.buttonCanc, styles.btnCancPress]
                  :
                    styles.buttonCanc
                  }  
              >
                <Text style={styles.buttonTextCancReserv}>Cancelar retirada</Text>
              </Pressable>
            </View>
            <Text style={styles.observacao}>
              OBS: se após 3 dias da data inicial da reserva não for declarada nenhuma informação a respeito da retirada, a reserva será automaticamente cancelada.
            </Text>
          </View>

      </View>
    </ScrollView>
    
  );
}