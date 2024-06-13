import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';
import styles from './styles';

const books = [
  { 
      id: '1', 
      title: 'O diário de Anne Frank', 
      author: 'Anne Frank', 
      image: require('../../../assets/Capa_dos_livros/o diário de anne frank.jpg') 
  },
  { 
      id: '2', 
      title: 'Dom Casmurro', 
      author: 'Machado de Assis', 
      image: require('../../../assets/Capa_dos_livros/dom casmurro.jpg') 
  },
  { 
      id: '3', 
      title: 'Romeu e Julieta', 
      author: 'William Shakespeare', 
      image: require('../../../assets/Capa_dos_livros/romeu e julieta.jpg') 
  },
  { 
      id: '4', 
      title: '1984', 
      author: 'George Orwell', 
      image: require('../../../assets/Capa_dos_livros/1984.jpg') 
  },
  { 
      id: '5', 
      title: 'Os Miseráveis', 
      author: 'Victor Hugo', 
      image: require('../../../assets/Capa_dos_livros/os miseráveis.jpg') 
  },
  { 
      id: '6', 
      title: 'Orgulho e Preconceito', 
      author: 'Jane Austen', 
      image: require('../../../assets/Capa_dos_livros/orgulho e preconceito.png') 
  },
  { 
      id: '7', 
      title: 'Heartstopper', 
      author: 'Alice Oseman', 
      image: require('../../../assets/Capa_dos_livros/heartstopper.jpg') 
  },
  { 
      id: '8', 
      title: 'Procure nas cinzas', 
      author: 'Charlie Donlea', 
      image: require('../../../assets/Capa_dos_livros/procure nas cinzas.jpg') 
  },
  { 
      id: '9', 
      title: 'Os Sete Maridos de Evelyn Hugo', 
      author: 'Taylor Jenkins Reid', 
      image: require('../../../assets/Capa_dos_livros/os sete maridos de evelyn hugo.jpg') 
  },
  { 
      id: '10', 
      title: 'A garota do lago', 
      author: 'Charlie Donlea', 
      image: require('../../../assets/Capa_dos_livros/a garota do lago.jpg') 
  },
  { 
      id: '11', 
      title: 'Verity', 
      author: 'Colleen Hoover', 
      image: require('../../../assets/Capa_dos_livros/verity.jpg') 
  },
  { 
      id: '12', 
      title: 'Harry Potter e a Pedra Filosofal', 
      author: 'J.K. Rowling', 
      image: require('../../../assets/Capa_dos_livros/harry potter e a pedra filosofal.jpg') 
  },
  { 
      id: '13', 
      title: 'A revolução dos bichos', 
      author: 'George Orwell', 
      image: require('../../../assets/Capa_dos_livros/a revolução dos bichos.jpg') 
  },
  { 
      id: '14', 
      title: 'Deixada para Trás', 
      author: 'Charlie Donlea', 
      image: require('../../../assets/Capa_dos_livros/deixada para trás.jpg') 
  },
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
  );
};

const BookList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
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

const Biblioteca = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Header />
      <BookList />
    </ScrollView>
  );
};

export default Biblioteca;
