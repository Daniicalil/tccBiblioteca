import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, TextInput, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange, Quad1, Quad2, Quad3, Quad4, Quad5, Quad6} from './forms';

import styles from './styles';

export default function Recomendacao() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.title}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}/>
          <Text style={styles.paragraph}>Biblioteca</Text>
        </View>
        <Searchbar
            placeholder="Pesquisar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.barraPesq}
            icon={({ size, color }) => (
              <Icon name="search" size={20} color="#000" />
            )}
          />
      </View>
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

      
    </ScrollView>
    
  );
}