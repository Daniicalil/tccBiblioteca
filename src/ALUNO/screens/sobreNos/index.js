import React from 'react';
import { ScrollView, Text, View, ImageBackground, StatusBar, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import imgDesign from '../../../../assets/imagens_telas/sobrenos.jpg';
import avatarDani from '../../../../assets/imagens_telas/avatarDani.jpeg';
import avatarKian from '../../../../assets/imagens_telas/avatarKian.jpeg';
import avatarKawany from '../../../../assets/imagens_telas/avatarKawany.jpeg';
import styles from './styles';

export default function SobreNos({ navigation }) {
  return (
    <ImageBackground source={imgDesign} style={styles.background}>
      <View style={styles.overlay} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <StatusBar 
            barStyle="dark-content" 
            translucent={true}
            backgroundColor="transparent" 
          />
          <View style={styles.circle}>
            <FontAwesome 
              name="angle-left" 
              size={30} 
              color="black" 
              style={styles.icon} 
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.title}>Sobre Nós</Text>
                  <Text style={styles.description}>
                    Danikawari é a junção dos nomes das três integrantes que, unidas pelo interesse comum em desenvolver e pela T.I.,
                    criaram a SmoakBook, um aplicativo que visa favorecer alunos e professores em prol da educação, atualizando o 
                    sistema de bibliotecas, visualmente mais atrativo e sendo mais prático a todos.
                  </Text>
                </View>
                <View style={styles.membrosContainer}>
                  
                  <View style={styles.membros}>
                    <Image 
                      source={avatarDani} 
                      style={styles.membroImage}
                    />
                    <View style={styles.membroTextContainer}>
                      <Text style={styles.membroText}>
                        <Text style={styles.name}>Danielle: </Text>
                          é formada como técnica em farmácia, uma área na qual ela atuava anteriormente. No entanto, sua paixão pelo 
                          aprendizado e pela tecnologia a levou a se aventurar no mundo do desenvolvimento. Ela se desafiou no front-end 
                          e foi a responsável por toda a parte visual do projeto, mas tem bastante interesse no back-end.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.membros}>
                    <Image 
                      source={avatarKawany} 
                      style={styles.membroImage}
                    />
                    <View style={styles.membroTextContainer}>
                      <Text style={styles.membroText}>
                        <Text style={styles.name}>Kawany: </Text>
                          ela sempre teve uma afinidade pelas questões jurídicas, entretanto permitiu-se verificar se era realmente isso 
                          que ela queria para a vida dela, ingressando na área de T.I. e conforme o decorrer das aulas, foi se interessando 
                          pelo banco de dados e pela segurança de dados.
                      </Text>
                    </View>
                  </View>
                  
                  <View style={styles.membros}>
                    <Image 
                      source={avatarKian} 
                      style={styles.membroImage}
                    />
                    <View style={styles.membroTextContainer}>
                      <Text style={styles.membroText}>
                        <Text style={styles.name}>Sayuri: </Text>
                          formada em design gráfico pela Univem em Marília, mas decidiu se 
                          aprofundar na área do desenvolvimento para conciliar os seus conhecimentos. Como já tinha conhecimento no 
                          front-end, ela resolveu se desafiar no banco de dados e API, mas nunca abandonou o lado criativo.
                      </Text>
                    </View>
                  </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
