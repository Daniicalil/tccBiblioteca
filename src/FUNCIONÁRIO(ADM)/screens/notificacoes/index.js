import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';

import IconWarning from '../../../../assets/imagens_telas/warning.png';
import styles from './styles';

export default function Notificacoes({ navigation }) {
return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
            
        <View style={styles.titlePagina}>
        <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
          <Text style={styles.paragraph}>Notificações</Text>
        </View>
        <View style={styles.lineSquare}>
          <Text style={styles.postedTime}>há 10 minutos</Text>
          <View style={styles.popWarning}>
            <Image source={IconWarning} style={styles.iconWarning}/>
            <Text style={styles.warningText}>Caro aluno, daqui 3 dias o livro reservado deverá ser devolvido.</Text>
          </View>
        </View>

      </View>
    </ScrollView>
    
  );
}