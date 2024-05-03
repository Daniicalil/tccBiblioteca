import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'
 

export default function EsqueceuSenha1() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />

      <Image
        source={require('../assets/6333054.jpg')}
        style={styles.logo}
      />

      <Text style={styles.paragraph}>Redefinir senha</Text>
      <Text style={styles.text}>Digite o seu e-mail no campo abaixo e lhe enviaremos um código de ativação.</Text>
      
      <TextInput
        placeholder='e-mail'
        style={styles.input}
      />
      

      <TouchableOpacity>
        <Text style={styles.forgotText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Redefinir</Text>
      </TouchableOpacity>
      
      <View style={styles.circulo1}></View>
      <View style={styles.circulo2}></View>
      <View style={styles.circulo3}></View>
      <View style={styles.circulo4}></View>
      <View style={styles.circulo5}></View>
    </View>
  );
}



