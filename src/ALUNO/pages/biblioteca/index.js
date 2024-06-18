import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';
import styles from './styles';

import Header from './header';
import BookList from './booklist';


const Biblioteca = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Header />
      <BookList />
    </ScrollView>
  );
};

export default Biblioteca;
