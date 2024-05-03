import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

import resetSenha from '../../assets/6333054.jpg';
 

export default function EsqueceuSenha2() {
  return (
    <View style={styles.container}>


      <Image
        source={resetSenha}
        style={styles.logo}
      />

      <Text style={styles.paragraph}>Redefinir senha</Text>
      <Text style={styles.text}>Por favor, insira no campo abaixo o código de ativação que você recebeu por e-mail e redefina uma nova senha.</Text>
      
      <TextInput
        placeholder='código'
        style={styles.input}
      />

       <TextInput
        placeholder='nova senha'
        style={styles.input}
      />

       <TextInput
        placeholder='digite a nova senha'
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Redefinir senha</Text>
      </TouchableOpacity>
      
      {/* <View style={styles.circulo1}></View>
      <View style={styles.circulo2}></View>
      <View style={styles.circulo3}></View>
      <View style={styles.circulo4}></View>
      <View style={styles.circulo5}></View> */}
    </View>
  );
}



