import * as React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import styles from './styles';
import Principal from './principal';

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
  
  
 export default function BookList() {
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.course}>{item.course}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.titleBook}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    );
  
    return (
      <FlatList style={Flatstyles.FlatList}
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.flatListContainer}
      />
    );
  };

  const Flatstyles = StyleSheet.create({
    FlatList: {
      padding: 6,
    }
  })
