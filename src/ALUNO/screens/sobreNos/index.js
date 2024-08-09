import React, { useState } from 'react';
import { ScrollView, Text, View, ImageBackground, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import imgDesign from '../../../../assets/imagens_telas/sobrenos.jpg';
import styles from './styles';

export default function SobreNos({ navigation }) {
  return (
    <ImageBackground source={imgDesign} style={styles.background}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <View style={styles.circle}>
          <FontAwesome name="angle-left" size={30} color="white" style={styles.icon} onPress={() => navigation.goBack()}/>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.content}>
              <Text style={styles.title}>
                Sobre Nós
              </Text>
              <Text style={styles.description}>
                Somos uma equipe de três mulheres dedicadas e estudantes de programação, unidas pelo 
                interesse comum em desenvolver soluções tecnológicas práticas e de fácil acesso a informação.
              </Text>
              <View style={styles.aboutUs}>
                <View style={styles.membros}>
                  <Text style={styles.name}>Danielle: </Text><Text>é formada como técnica em farmácia, uma área na qual ela atuava anteriormente. No entanto, 
                              sua paixão pelo aprendizado e pela tecnologia a levou a se aventurar no mundo do desenvolvimento. 
                              Sua determinação, curiosidade e perspectiva diversificada têm sido essenciais para o progresso do 
                              nosso projeto.</Text>
                </View>
                <View style={styles.membros}>
                  <Text style={styles.name}>Danielle: </Text><Text>é formada como técnica em farmácia, uma área na qual ela atuava anteriormente. No entanto, 
                              sua paixão pelo aprendizado e pela tecnologia a levou a se aventurar no mundo do desenvolvimento. 
                              Sua determinação, curiosidade e perspectiva diversificada têm sido essenciais para o progresso do 
                              nosso projeto.</Text>
                </View>
                <View style={styles.membros}>
                  <Text style={styles.name}>Danielle: </Text><Text>é formada como técnica em farmácia, uma área na qual ela atuava anteriormente. No entanto, 
                              sua paixão pelo aprendizado e pela tecnologia a levou a se aventurar no mundo do desenvolvimento. 
                              Sua determinação, curiosidade e perspectiva diversificada têm sido essenciais para o progresso do 
                              nosso projeto.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
