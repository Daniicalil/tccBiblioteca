import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';
import styles from './styles';
import BookList from './booklist';
import { useNavigation } from '@react-navigation/native';

export default function Principal({voltar}) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => {
      setSearchQuery(query);
    };

    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titleContainer}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}  onPress={() => voltar.goBack()}/>
          <Text style={styles.paragraph}>Biblioteca</Text>
        </View>
        <Searchbar
          placeholder="Pesquisar"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.barraPesq}
          inputStyle={styles.placeholderStyle}
          icon={({ size, color }) => (
            <Icon name="search" size={20} color="#000" style={styles.iconStyle}/>
          )}
        />
        <Pressable 
                onPress={() => navigation.navigate('addBiblioteca')}
                style={({ pressed }) => pressed ?
                    [styles.buttonAdd, styles.btnAddPress]
                    : styles.buttonAdd}
                >
                <Text style={styles.buttonTextAdd}>+ Adicionar</Text>
            </Pressable>
        <BookList searchQuery={searchQuery} />
      </View>
    );
  };