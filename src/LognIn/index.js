import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function LognIn() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />

      <Image
        source={require('../assets/6737457.jpg')}
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
        <Text style={styles.forgotText}>Não tem cadastro? Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Fazer login</Text>
      </TouchableOpacity>
      <View style={styles.circulo1}></View>
      <View style={styles.circulo2}></View>
      <View style={styles.circulo3}></View>
      <View style={styles.circulo4}></View>
      <View style={styles.circulo5}></View>
    </View>
  );
}

