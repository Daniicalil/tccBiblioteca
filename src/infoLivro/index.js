import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { ScrollView ,View, Text, Image, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import AnneFrank from '../../assets/Capa_dos_livros/o diário de anne frank.jpg';

import styles from './styles';

export default function InformacaoLivro() {
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
            <View style={styles.line}></View>
            <View>
                <Text>Visão geral</Text>
                <Text>O diário de Anne Frank</Text>
                <View style={styles.squareQuant}>
                    <Text>Disponíveis</Text>
                    <Text>5</Text>
                </View>
            </View>
        </View>
      </View>
    </ScrollView>
    
  );
}