import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RetangGreen, RetangOrange, Funcionamento, Quad1, Quad2, Quad3, Quad4, Quad5, Quad6} from './forms';

import styles from './styles';

export default function TelaInicial() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#fff' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <Searchbar
          placeholder="Pesquisar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.barraPesq}
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
    </View>
    
  );
}