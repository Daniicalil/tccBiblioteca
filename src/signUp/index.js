import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import imgCadastro from '../../assets/6737457.jpg';

import styles from './styles'
 

export default function SignUp() {
  const [value, setValue] = React.useState('first');
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />

      <Image
        source={imgCadastro}
        style={styles.logo}
      />

      <Text style={styles.paragraph}>Cadastro</Text>

      <TextInput
        placeholder='RA'
        style={styles.input}
      />
     
      <TextInput
        placeholder='nome completo'
        style={styles.input}
      />
      
      <TextInput
        placeholder='e-mail'
        style={styles.input}
      />

        <TextInput
          placeholder='senha'
          style={styles.input}
          secureTextEntry={true}
        />

        <TextInput
          placeholder='confirmar senha'
          style={styles.input}
          secureTextEntry={true}
        />

      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
        <Text style={styles.sexo}>Sexo:</Text>
          <View style={styles.seletores}>

            <Text><RadioButton value="Feminino" />Feminino</Text>
            <Text> <RadioButton value="Masculino" />Masculino</Text>
            <Text><RadioButton value="Neutro" />Neutro</Text>
          </View>
        </RadioButton.Group>
      

      <TouchableOpacity>
        <Text style={styles.forgotText}>Já tem uma conta? Faça login</Text>
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

