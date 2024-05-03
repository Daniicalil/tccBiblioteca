import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RetangGreen from './barraVerde';
import RetangOrange from './barraLaranja';

import styles from './styles';

export default function telaInicial() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />
      <RetangGreen />
      <RetangOrange />
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.barraPesq}
      />
    </View>
  );
}