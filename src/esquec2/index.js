import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgesqsenha from '../../assets/6333054.png';
import imgDesign from '../../assets/designPage.png';


import styles from './styles'
 

export default function EsqueceuSenha2() {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  
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
      <Text style={styles.text}>Por favor, insira no campo abaixo o código de ativação que você recebeu por e-mail e redefina uma nova senha.</Text>
      
      <TextInput
        placeholder='código'
        style={styles.input}
      />

       <View style={styles.password}>
        <TextInput
          placeholder='senha'
          style={[styles.input, styles.passwordInput]}
          secureTextEntry={!passwordVisible1}
          value={password}
          onChangeText={setPassword}
        />

         <TouchableOpacity onPress={togglePasswordVisibility1} style={styles.passwordVisibilityIcon}>
          <Ionicons name={passwordVisible1 ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.confirmPassword}>
        <TextInput
          placeholder='confirme a nova senha'
          style={[styles.input, styles.passwordInput]}
          secureTextEntry={!passwordVisible2}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={togglePasswordVisibility2} style={styles.passwordVisibilityIcon}>
          <Ionicons name={passwordVisible2 ? 'eye-off' : 'eye'} size={24} color="black" right={<TextInput.Affix text="/100" />}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Redefinir senha</Text>
      </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}



