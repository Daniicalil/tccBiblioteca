import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';
import styles from './styles';

import BookList from './booklist';

export default function Principal() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titleContainer}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}/>
          <Text style={styles.paragraph}>Biblioteca</Text>
        </View>
        <Searchbar
          placeholder="Pesquisar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.barraPesq}
          inputStyle={styles.placeholderStyle}
          icon={({ size, color }) => (
            <Icon name="search" size={20} color="#000" style={styles.iconStyle}/>
          )}
        />
      </View>
    );
  };