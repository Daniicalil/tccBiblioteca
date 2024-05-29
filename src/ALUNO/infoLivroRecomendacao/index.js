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

export default function InfoLivroRecomendacao() {
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
        <Image source={AnneFrank} style={styles.capaLivros}/>
        <Line />
          <View style={styles.sectionTitle}>
            <Text style={styles.general}>Visão geral</Text>
            <Text style={styles.title}>O diário de Anne Frank</Text>
          </View>
          <View style={styles.smallineSquare}>
            <Text style={styles.available}>Disp.: </Text>
            <Text style={styles.bold}>5</Text>
          </View>
            <Text style={styles.description}>
              O Diário de Anne Frank é um livro que relata a história de uma jovem judia chamada Anne Frank, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.
            </Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Autor(a)</Text>
              <Text style={styles.infoText}>Anne Frank</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Editora</Text>
              <Text style={styles.infoText}>Grupo Editorial Record</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Gênero</Text>
              <Text style={styles.infoText}>Autobiográfico</Text>
            </View>
          </View>

          <Line />

          <Text style={styles.recommendationTitle}>Descrição do professor:</Text>
          <Text style={styles.recommendation}>Recursos Humanos</Text>
          <View>
            <Text style={styles.recommendationTitle}>Recomendado para:</Text>
            <Text style={styles.recommendation}>1º Mod., 2º Mod., 3º Mod., 4º Mod.</Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Reservar livro</Text>
        </Pressable>
      </View>
    </ScrollView>
    
  );
}