import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RetangGreen, RetangOrange } from './forms';
import AnneFrank from '../../../../assets/Capa_dos_livros/o diário de anne frank.jpg';
import Autor from '../../../../assets/imagens_telas/autora.png';
import Editora from '../../../../assets/imagens_telas/editora.png';
import Genero from '../../../../assets/imagens_telas/genero.png';
import styles from './styles';

const SquareRadioButton = ({ label, checked, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          {checked ? (
            <Icon name="square" size={22} color="#3F7263" />
          ) : (
            <Icon name="square-o" size={22} color="#B9B9B9" />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
};

const Line = () => {
  return (
    <View style={styles.line} />
  );
};

export default function InfoLivroRecomendacao({ navigation }) {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />

        <View style={styles.title}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}  />
          <Text style={styles.paragraph}>Informações do livro</Text>
        </View>
        <View style={styles.lineSquare}>
          <Image source={AnneFrank} style={styles.capaLivros} />
          <Line />
          <View style={styles.sectionTitle}>
            <Text style={styles.general}>Visão geral</Text>
            <Text style={styles.titleLivro}>O diário de Anne Frank</Text>
          </View>
          <View style={styles.smallineSquare}>
            <Text style={styles.available}>Disp.: </Text>
            <Text style={styles.bold}>5</Text>
          </View>
          <Text style={styles.description}>
            O Diário de Anne Frank é um livro que relata a história de uma jovem judia chamada Anne Frank, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.
          </Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Autor(a)</Text>
              <Image source={Autor} style={styles.imgAutor} />
              <Text style={styles.infoText}>Anne Frank</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Editora</Text>
              <Image source={Editora} style={styles.imgEditora} />
              <Text style={styles.infoText}>Grupo Editorial Record</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Gênero</Text>
              <Image source={Genero} style={styles.imgGenero} />
              <Text style={styles.infoText}>Autobiográfico</Text>
            </View>
          </View>

          <Line />

          <Text style={styles.recommendationTitle}>Descrição do professor:</Text>
          <Text style={styles.recommendation}>Recursos Humanos</Text>
            <Text style={styles.recommendationMod}>Recomendado para:</Text>
            <View style={styles.RadioButtonQuad}>
              <SquareRadioButton
                label="1º Mod. "
                checked={selectedMode === "1stMod"}
                onPress={() => handleModeChange("1stMod")}
              />
              <SquareRadioButton
                label="2º Mod."
                checked={selectedMode === "2ndMod"}
                onPress={() => handleModeChange("2ndMod")}
              />
              <SquareRadioButton
                label="3º Mod."
                checked={selectedMode === "3rdMod"}
                onPress={() => handleModeChange("3rdMod")}
              />
              <SquareRadioButton
                label="4º Mod."
                checked={selectedMode === "4thMod"}
                onPress={() => handleModeChange("4thMod")}
              />
            </View>
        </View>

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
