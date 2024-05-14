import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RetangGreen, RetangOrange, Funcionamento, Quad1, Quad2, Quad3, Quad4, Quad5, Quad6, Importancia} from './forms';

import styles from './styles';

export default function TelaInicial() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <Searchbar
          placeholder="Pesquisar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.barraPesq}
          icon={({size, color}) => (
            <Icon name="add" size={20} color="#000" />
          )}
        />
        <Funcionamento />
      </View>
        <Text style={styles.paragraph}>Recomendações dos professores</Text>
          <View style={styles.rowQuadrados1}>
            <Quad1 />
            <Quad2 />
            <Quad3 />
          </View>
          <View style={styles.rowQuadrados2}>
            <Quad4 />
            <Quad5 />
            <Quad6 />
          </View>
        <Importancia/>
    </ScrollView>
    
  );
}