import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import imgesqsenha from '../../assets/6333054.png';
import imgDesign from '../../assets/designPage.png';

import styles from './styles'
 

export default function EsqueceuSenha1() {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />
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
      

      <TouchableOpacity>
        <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Redefinir</Text>
      </TouchableOpacity>

      </View>
      </ImageBackground>
    </View>
  );
}



