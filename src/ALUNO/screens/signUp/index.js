
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import imgSignup from '../../../../assets/imagens_telas/img_cadastro.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';

import styles from './styles'

export default function SignUp({ navigation }) {
  const [value, setValue] = useState('first');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConf, setPasswordVisibleConf] = useState(false);
  const [email, setEmail] = useState('');
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
            source={imgSignup}
            style={styles.logo}
          />
          <Text style={styles.paragraph}>Cadastro</Text>

          <TextInput
            placeholder='RM'
            style={styles.input}
          />

          <TextInput
            placeholder='nome completo'
            style={styles.input}
          />

          <TextInput
            placeholder='e-mail'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
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

          <View style={styles.confirmPassword}>
            <TextInput
              placeholder='confirmar senha'
              style={[styles.input, styles.passwordInput]}
              secureTextEntry={!passwordVisibleConf}
              value={passwordConf}
              onChangeText={setPasswordConf}
            />

            <Pressable onPress={togglePasswordVisibilityConf} style={styles.passwordVisibilityIcon}>
              <Ionicons name={passwordVisibleConf ? 'eye-off' : 'eye'} size={24} color="black" />
            </Pressable>
          </View>

          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
            <Text style={styles.sexo}>Sexo:</Text>
            <View style={styles.seletores}>

              <Text><RadioButton value="Feminino" color='#3F7263' />Feminino</Text>
              <Text> <RadioButton value="Masculino" color='#3F7263' />Masculino</Text>
              <Text><RadioButton value="Neutro" color='#3F7263' />Neutro</Text>
            </View>
          </RadioButton.Group>

          <Pressable 
            onPress={() => navigation.navigate('Login')}
            style={
              ({pressed}) => pressed ?
                [styles.touchText, styles.TouchPress]
              :
                styles.touchText
              }  
          >
              <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </Pressable>


          <Pressable 
            onPress={() => navigation.navigate('Login')} 
            style={
              ({pressed}) => pressed ?
                [styles.signUpButton, styles.btnPress]
              :
                styles.signUpButton
              }
          >
            <Text style={styles.signUpText}>Fazer cadastro</Text>
          </Pressable>

        </View> 
      </ImageBackground>
    </View>
  );
}

