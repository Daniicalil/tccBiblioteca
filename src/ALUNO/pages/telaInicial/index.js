import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ScrollView, View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RetangGreen, RetangOrange, Funcionamento, Importancia } from './forms';
import DrawerNavigation from '../../rotas/drawerNavigation';

import globalStyles from './styles'; // Renomeando para evitar conflito
import Principal from './principal';
import BookList from './booklist';

const TelaInicial = () => {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'principal':
        return <Principal />;
      case 'booklist':
        return <BookList />;
      case 'importancia':
        return <Importancia />;
      default:
        return null;
    }
  };

  const data = [
    { id: '1', type: 'principal' },
    { id: '2', type: 'booklist' },
    { id: '3', type: 'importancia' },
  ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default TelaInicial;