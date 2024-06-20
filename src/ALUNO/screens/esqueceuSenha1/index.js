import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import imgesqsenha from '../../../../assets/imagens_telas/6333054.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';

import styles from './styles'
 
export default function EsqueceuSenha1({ navigation }) {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' translucent ={false} />
      <ImageBackground source={imgDesign} style={styles.background}>
      <View style={styles.contentContainer}>
      <Image
        source={imgesqsenha}
        style={styles.logo}
      />
      <Text style={styles.paragraph}>Redefinir senha</Text>
      <Text style={styles.text}>Digite o seu e-mail no campo abaixo e lhe enviaremos um código de ativação.</Text>
      
      <TextInput
        placeholder='e-mail'
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Pressable 
        onPress={() => navigation.navigate('Login')}
            style={
              ({pressed}) => pressed ?
                [styles.touchText, styles.TouchPress]
              :
                styles.touchText
              }
      >
        <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
      </Pressable>

      <Pressable 
        onPress={() => navigation.navigate('EsqueceuSenha2')} 
        style={
          ({pressed}) => pressed ?
            [styles.redefinirButton, styles.btnPress]
          :
            styles.redefinirButton
          }
      >
        <Text style={styles.redefinirText}>Redefinir</Text>
      </Pressable>

      </View>
      </ImageBackground>
    </View>
  );
}



