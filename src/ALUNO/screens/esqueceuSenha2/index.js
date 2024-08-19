import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, Pressable, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imgesqsenha from '../../../../assets/imagens_telas/6333054.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';

import styles from './styles'

export default function EsqueceuSenha2({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConf, setPasswordVisibleConf] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [code, setCode] = useState('');
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibilityConf = () => {
    setPasswordVisibleConf(!passwordVisibleConf);
  };

  const handleResetPassword = () => {
    // Verifica se o campo esta vazio
    const newErrors = {};
    if (!code) newErrors.code = '*Preeencha o campo';
    if (!password) newErrors.password = '*Preeencha o campo';
    if (!passwordConf) newErrors.passwordConf = '*Preeencha o campo';

    // Verificar se as senhas são iguais
    if (password !== passwordConf) {
      newErrors.password = '*As senhas não correspondem';
      newErrors.passwordConf = '*As senhas não correspondem';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aqui você pode adicionar a lógica para enviar os dados de redefinição de senha
      Alert.alert(
        'Senha Redefinida',
        'Sua senha foi redefinida com sucesso.',
        [{ text: 'OK', onPress: () => navigation.navigate('login') }]
      );
    }
  };
  
  return (
  <ImageBackground source={imgDesign} style={styles.background}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar barStyle="dark-content"  // ou "light-content" para texto claro
                translucent={true}
                backgroundColor="transparent"  />
        <View style={styles.contentContainer}>
          <Image
            source={imgesqsenha}
            style={styles.logo}
          />
          <Text style={styles.paragraph}>Redefinir senha</Text>
          <Text style={styles.text}>Por favor, insira no campo abaixo o código de ativação que você recebeu por e-mail e redefina uma nova senha.</Text>
          
          <TextInput
            placeholder='Código'
            style={[styles.input, errors.code && styles.inputError]}
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
          />
          {errors.code && <Text style={styles.errorText}>{errors.code}</Text>}

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

          <View style={styles.confirmPassword}>
            <TextInput
              placeholder='confirme a nova senha'
              style={[styles.input, styles.passwordInput, errors.passwordConf && styles.inputError]}
              secureTextEntry={!passwordVisibleConf}
              value={passwordConf}
              onChangeText={setPasswordConf}
            />

            <Pressable onPress={togglePasswordVisibilityConf} style={styles.passwordVisibilityIcon}>
              <Ionicons name={passwordVisibleConf ? 'eye-off' : 'eye'} size={24} color="black" />
            </Pressable>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}


          <Pressable 
            onPress={handleResetPassword}
            style={
              ({pressed}) => pressed ?
                [styles.redefinirButton, styles.btnPress]
              :
                styles.redefinirButton
              }
          >
            <Text style={styles.redefinirText}>Redefinir senha</Text>
          </Pressable>
      </View>
    </ScrollView>
  </ImageBackground>
  );
}



