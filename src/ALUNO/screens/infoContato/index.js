import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {RetangGreen, RetangOrange} from './forms';

import styles from './styles';
import imgContato from '../../../../assets/imagens_telas/contato.jpg';

export default function InformacoesContato({ navigation }) {
return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
            
        <View style={styles.titlePagina}>
        <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={navigation.goBack}/>
          <Text style={styles.paragraph}>Informações de Contato</Text>
        </View>
          <Image source={imgContato} style={styles.imgcontato} />
          <Text style={styles.escola}>ETEC PROF. MASSUYUKI KAWANO</Text>
          <Text style={styles.informacoes}>
            (14) 3496 1520 - (14) 3491 5393{'\n'}
            RUA: BEZERRA DE MENEZES, 215{'\n'}
            CEP 17605-440{'\n'}
            E136DIR@CPS.SP.GOV.BR{'\n'}
          </Text>
      </View>
    </ScrollView>
    
  );
}