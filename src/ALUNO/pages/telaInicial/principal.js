import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, FlatList, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RetangGreen, RetangOrange, Funcionamento, Importancia} from './forms';
import DrawerNavigation from '../../rotas/drawerNavigation';

import styles from './styles';
import BookList from './booklist';

    const Principal = () => {
        const [searchQuery, setSearchQuery] = useState('');
        
        return (
          <View style={styles.headerContainer}>
            <StatusBar backgroundColor='#3F7263' transLucent={false} />
            <RetangGreen/>
              <RetangOrange />
              <Searchbar
                placeholder="Pesquisar"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.barraPesq}
                inputStyle={styles.placeholderStyle}
                icon={({size, color}) => (
                  <Icon name="search" size={20} color="#000" style={styles.iconStyle}/>
                )}
              />
              <Funcionamento />
              <Text style={styles.paragraph}>Recomendações dos professores</Text>
            </View>
        );
      };

    export default Principal;

    