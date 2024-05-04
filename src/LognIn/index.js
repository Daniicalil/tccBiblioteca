import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import imgLogin from '../../assets/6737457.jpg'

import styles from './styles'

export default function LognIn() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />

      <Image
        source={imgLogin}
        style={styles.logo}
      />

      <Text style={styles.paragraph}>Login</Text>
     
      <TextInput
        placeholder='e-mail institucional'
        style={styles.input}
      />
      
      <TextInput
        placeholder='senha'
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.touchText}>Não tem cadastro? Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.touchText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}

