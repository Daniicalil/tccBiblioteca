import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgLogin from '../../../../assets/imagens_telas/6737457.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';
import styles from './styles';

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [rm, setRm] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Limpar estado quando o componente for desmontado
    return () => {
      setRm('');
      setPassword('');
      setErrors({});
    };
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    const newErrors = {};
    if (!rm) newErrors.rm = '*Preeencha o campo';
    if (!password) newErrors.password = '*Preeencha o campo';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // Navega para a tela 'Home' e limpa os campos de login
      setRm('');
      setPassword('');
      navigation.navigate('Home');
    }
};

  return (
    <ImageBackground source={imgDesign} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
        <View style={styles.contentContainer}>
          <Image source={imgLogin} style={styles.logo} />
          <Text style={styles.paragraph}>Login</Text>
          <TextInput
            placeholder='RM'
            style={[styles.input, errors.rm && styles.inputError]}
            value={rm}
            onChangeText={setRm}
            keyboardType='numeric'
          />
          {errors.rm && <Text style={styles.errorText}>{errors.rm}</Text>}
          <View style={styles.password}>
            <TextInput
              placeholder='Senha'
              style={[styles.input, styles.passwordInput, errors.password && styles.inputError]}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
              <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
            </Pressable>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <Pressable 
            onPress={() => navigation.navigate('signUp')}
            style={({pressed}) => pressed ? [styles.touchText, styles.TouchPress] : styles.touchText}
          >
            <Text style={styles.touchText}>Não tem cadastro? Cadastre-se</Text>
          </Pressable>
          <Pressable 
            onPress={() => navigation.navigate('esqueceuSenha1')}
            style={({pressed}) => pressed ? [styles.touchText, styles.TouchPress] : styles.touchText}
          >
            <Text style={styles.touchText}>Esqueceu a senha?</Text>
          </Pressable>
          <Pressable 
            onPress={handleLogin}
            style={({pressed}) => pressed ? [styles.loginButton, styles.btnPress] : styles.loginButton}
          >
            <Text style={styles.loginText}>Fazer login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
