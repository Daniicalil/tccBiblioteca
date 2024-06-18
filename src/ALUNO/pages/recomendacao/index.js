import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, FlatList, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import styles from './styles';

const books = [
  { 
      id: '1', 
      title: 'O diário de Anne Frank', 
      author: 'Anne Frank', 
      image: require('../../../../assets/Capa_dos_livros/o diário de anne frank.jpg'), 
      course: 'Téc. Recursos Humanos' 
  },
  { 
      id: '2', 
      title: 'Dom Casmurro', 
      author: 'Machado de Assis', 
      image: require('../../../../assets/Capa_dos_livros/dom casmurro.jpg'), 
      course: 'Téc. Contabilidade' 
  },
  { 
      id: '3', 
      title: 'Romeu e Julieta', 
      author: 'William Shakespeare', 
      image: require('../../../../assets/Capa_dos_livros/romeu e julieta.jpg'), 
      course: 'Téc. Design de Interiores' 
  },
  { 
      id: '4', 
      title: '1984', 
      author: 'George Orwell', 
      image: require('../../../../assets/Capa_dos_livros/1984.jpg'), 
      course: 'Téc. Informática' 
  },
  { 
      id: '5', 
      title: 'Os Miseráveis', 
      author: 'Victor Hugo', 
      image: require('../../../../assets/Capa_dos_livros/os miseráveis.jpg'), 
      course: 'Téc. Administração' 
  },
  { 
      id: '6', 
      title: 'Orgulho e Preconceito', 
      author: 'Jane Austen', 
      image: require('../../../../assets/Capa_dos_livros/orgulho e preconceito.png'), 
      course: 'Téc. Farmácia' 
  }
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
          <RetangGreen />
          <RetangOrange />
          <View style={styles.titleContainer}>
            <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}/>
            <Text style={styles.paragraph}>Recomendações dos professores</Text>
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
  );
};

const BookList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.course}>{item.course}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titleBook}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
    </View>
  );

  return (
    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const Recomendacao = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Header />
      <BookList />
    </ScrollView>
  );
};

export default Recomendacao;