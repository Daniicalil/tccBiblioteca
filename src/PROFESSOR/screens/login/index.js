import React, { useState } from 'react';
import { StatusBar, Text, View, Image, TextInput, Pressable, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgLogin from '../../../../assets/imagens_telas/6737457.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';
import styles from './styles';

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imgDesign} style={styles.background}>
        <StatusBar backgroundColor='#fff' translucent={false} />
        <View style={styles.contentContainer}>
          <Image
            source={imgLogin}
            style={styles.logo}
          />
          <Text style={styles.paragraph}>Login</Text>
          <TextInput
            placeholder='RM'
            style={styles.input}
          />
          <View style={styles.password}>
            <TextInput
              placeholder='senha'
              style={[styles.input, styles.passwordInput]}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
              <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
            </Pressable>
          </View>

          <Pressable 
            onPress={() => navigation.navigate('signUp')}
            style={
              ({pressed}) => pressed ?
                [styles.touchText, styles.TouchPress]
              :
                styles.touchText
              }
          >
              <Text style={styles.touchText}>Não tem cadastro? Cadastre-se</Text>
          </Pressable>

          <Pressable 
            onPress={() => navigation.navigate('esqueceuSenha1')}
            style={
              ({pressed}) => pressed ?
                [styles.touchText, styles.TouchPress]
              :
                styles.touchText
              }
          >
              <Text style={styles.touchText}>Esqueceu a senha?</Text>
          </Pressable>

          <Pressable 
            onPress={() => navigation.navigate('Home')} 
            style={
              ({pressed}) => pressed ?
                [styles.loginButton, styles.btnPress]
              :
                styles.loginButton
              }
          >
              <Text style={styles.loginText}>Fazer login</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );
}
