import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgLogin from '../../assets/6737457.png';
import imgDesign from '../../assets/designPage.png';

import styles from './styles';

export default function LognIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' transLucent={false} />
      <ImageBackground source={imgDesign} style={styles.background}>

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

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color='gray'
                />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder='Senha'
              style={styles.input}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
          </View>



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
      </ImageBackground>
    </View>
  );
}
