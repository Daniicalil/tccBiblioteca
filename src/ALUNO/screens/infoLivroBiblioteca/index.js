import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import AnneFrank from '../../../../assets/Capa_dos_livros/procure nas cinzas.jpg';
import Autor from '../../../../assets/imagens_telas/autora.png';
import Editora from '../../../../assets/imagens_telas/editora.png';
import Genero from '../../../../assets/imagens_telas/genero.png';

import styles from './styles';

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function InfoLivroBiblioteca({ navigation }) {
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
        <Image source={AnneFrank} style={styles.capaLivros}/>
        <Line />
          <View style={styles.sectionTitle}>
            <Text style={styles.general}>Visão geral</Text>
            <Text style={styles.titleLivro}>Procure nas Cinzas</Text>
          </View>
          <View style={styles.smallineSquare}>
            <Text style={styles.available}>Disp.: </Text>
            <Text style={styles.bold}>5</Text>
          </View>
            <Text style={styles.description}>
            O ataque terrorista às Torres Gêmeas do World Trade Center chocou o mundo vinte anos atrás, mas, para uma família, esse atentado teve um gosto mais amargo. A destruição dos edifícios deu fim à vida de Victória, a principal suspeita de um crime brutal - sem que ela tivesse a chance de se defender.            </Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Autor(a)</Text>
              <Image source={Autor} style={styles.imgAutor}/>
              <Text style={styles.infoText}>Charlie Donlea</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Editora</Text>
              <Image source={Editora} style={styles.imgEditora}/>
              <Text style={styles.infoText}>Faro Editorial</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Gênero</Text>
              <Image source={Genero} style={styles.imgGenero}/>
              <Text style={styles.infoText}>Suspense, mistério</Text>
            </View>
          </View>
        </View>

        <Image source={Genero} style={styles.imgGenero}/>
        
        <Pressable 
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