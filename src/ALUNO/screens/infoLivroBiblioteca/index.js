import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from '../../componentes/forms';
import { useNavigation } from '@react-navigation/native';

import Autor from '../../../../assets/imagens_telas/autora.png';
import Editora from '../../../../assets/imagens_telas/editora.png';
import Genero from '../../../../assets/imagens_telas/genero.png';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function InfoLivroBiblioteca({ route }) {
  const navigation = useNavigation();
  const { book } = route.params;
  
return (
  <ScrollView style={styles.container}>
    <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
          <View style={styles.titlePagina}>
            <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
              <Text style={styles.paragraph}>Informações do livro</Text>
          </View>
        <View style={styles.lineSquare}>
          <Image source={book.image} style={styles.capaLivros}/>
        <Line />
          <View style={styles.sectionTitle}>
            <Text style={styles.general}>Visão geral</Text>
            <Text style={styles.titleLivro}>{book.title}</Text>
          </View>
          <View style={styles.smallineSquare}>
            <Text style={styles.available}>Disp.: </Text>
            <Text style={styles.bold}>{book.disponivel}</Text>
          </View>
            <Text style={styles.description}>
              {book.description}
            </Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Autor(a)</Text>
              <Image source={Autor} style={styles.imgAutor}/>
              <Text style={styles.infoText}>{book.author}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Editora</Text>
              <Image source={Editora} style={styles.imgEditora}/>
              <Text style={styles.infoText}>{book.editora}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Gênero</Text>
              <Image source={Genero} style={styles.imgGenero}/>
              <Text style={styles.infoText}>{book.genero}</Text>
            </View>
          </View>
        </View>
        
        <Pressable 
            onPress={() => navigation.navigate('reservarlivro')}
            style={
              ({pressed}) => pressed ?
                [styles.button, styles.btnPress]
              :
                styles.button
              }  
          >
          <Text style={styles.buttonText}>Reservar livro</Text>
        </Pressable>
    </View>
  </ScrollView>
    
  );
}