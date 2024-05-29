import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgesqsenha from '../../../assets/6333054.png';
import imgDesign from '../../../assets/designPage.png';


import styles from './styles'
 

export default function EsqueceuSenha2() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConf, setPasswordVisibleConf] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibilityConf = () => {
    setPasswordVisibleConf(!passwordVisibleConf);
  };
  
  return (
    <View style={styles.container}>
      
      <ImageBackground source={imgDesign} style={styles.background}>
      <StatusBar backgroundColor='#fff' transLucent={false} />

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
        keyboardType="numeric"
      />

       <View style={styles.password}>
        <TextInput
          placeholder='senha'
          style={[styles.input, styles.passwordInput]}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />

         <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
          <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.confirmPassword}>
        <TextInput
          placeholder='confirme a nova senha'
          style={[styles.input, styles.passwordInput]}
          secureTextEntry={!passwordVisibleConf}
          value={passwordConf}
          onChangeText={setPasswordConf}
        />

        <TouchableOpacity onPress={togglePasswordVisibilityConf} style={styles.passwordVisibilityIcon}>
          <Ionicons name={passwordVisibleConf ? 'eye-off' : 'eye'} size={24} color="black" />
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



