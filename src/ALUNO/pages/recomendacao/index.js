import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, FlatList, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import styles from './styles';
import BookList from './booklist';
import Principal from './principal';

export default function Recomendacao() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Principal />
      <BookList />
    </ScrollView>
  );
};

