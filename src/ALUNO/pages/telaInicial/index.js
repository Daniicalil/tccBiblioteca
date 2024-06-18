import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, FlatList, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RetangGreen, RetangOrange, Funcionamento, Importancia} from './forms';
import DrawerNavigation from '../../rotas/drawerNavigation';

import styles from './styles';
import Principal from './principal';
import BookList from './booklist';

const TelaInicial = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Principal />
      <BookList />
      <Importancia/>
    </ScrollView>
  );
};

export default TelaInicial;