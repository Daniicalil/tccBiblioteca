
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import imgSignup from '../../assets/img_cadastro.png';
import imgDesign from '../../assets/designPage.png';

import styles from './styles'

export default function SignUp() {
  const [value, setValue] = useState('first');
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  return (
    <View style={styles.container}>

      <ImageBackground source={imgDesign} style={styles.background}>

         <View style={styles.contentContainer}>
{/*
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
              placeholder='confirmar senha'
              style={[styles.input, styles.passwordInput]}
              secureTextEntry={!passwordVisible2}
              value={passwordConf}
              onChangeText={setPasswordConf}
            />

            <TouchableOpacity onPress={togglePasswordVisibility2} style={styles.passwordVisibilityIcon}>
              <Ionicons name={passwordVisible2 ? 'eye-off' : 'eye'} size={24} color="black" right={<TextInput.Affix text="/100" />} />
            </TouchableOpacity>
          </View>

          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
            <Text style={styles.sexo}>Sexo:</Text>
            <View style={styles.seletores}>

              <Text><RadioButton value="Feminino" color='#3F7263' />Feminino</Text>
              <Text> <RadioButton value="Masculino" color='#3F7263' />Masculino</Text>
              <Text><RadioButton value="Neutro" color='#3F7263' />Neutro</Text>
            </View>
          </RadioButton.Group>
*/}
          <TouchableOpacity>
            <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Fazer cadastro</Text>
          </TouchableOpacity>

        </View> 
      </ImageBackground>
    </View>
  );
}

