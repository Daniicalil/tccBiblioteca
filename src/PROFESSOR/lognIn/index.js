import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgLogin from '../../../assets/imagens_telas/6737457.png';
import imgDesign from '../../../assets/imagens_telas/designPage.png';
// import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function LognIn({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imgDesign} style={styles.background}>
      <StatusBar backgroundColor='#fff' transLucent={false} />
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


          <Pressable onPress={() => navigation.navigate('signup')}>
            <Text style={styles.touchText}>Não tem cadastro? Cadastre-se</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('esqueceusenha1')}>
            <Text style={styles.touchText}>Esqueceu a senha?</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('telainicial')} style={styles.loginButton}>
            <Text style={styles.loginText}>Fazer login</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );
}
