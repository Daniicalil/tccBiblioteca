import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Pressable, ImageBackground, ScrollView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import imgSignup from '../../../../assets/imagens_telas/img_cadastro.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';

import styles from './styles';

export default function SignUp({ navigation }) {
  const [value, setValue] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConf, setPasswordVisibleConf] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [name, setName] = useState('');
  const [rm, setRm] = useState('');

  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibilityConf = () => {
    setPasswordVisibleConf(!passwordVisibleConf);
  };

  const handleSignUp = () => {
    const newErrors = {};
    if (!rm) newErrors.rm = '*Campo obrigatório';
    if (!name) newErrors.name = '*Campo obrigatório';
    if (!email) newErrors.email = '*Campo obrigatório';
    if (!password) newErrors.password = '*Campo obrigatório';
    if (!passwordConf) newErrors.passwordConf = '*Campo obrigatório';
    if (!value) newErrors.value = '*Campo obrigatório';

    // Verificar se as senhas são iguais
    if (password !== passwordConf) {
      newErrors.password = '*As senhas não correspondem';
      newErrors.passwordConf = '*As senhas não correspondem';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aqui você pode exibir o alerta
      Alert.alert(
        'Cadastro realizado',
        'Aguarde o administrador verificar qual o seu nível de acesso.',
        [{ text: 'OK', onPress: () => navigation.navigate('login') }]
      );
    }
  };

  return (
    <ImageBackground source={imgDesign} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <StatusBar backgroundColor='#fff' transLucent={false} /> */}
        <View style={styles.contentContainer}>
          <Image source={imgSignup} style={styles.logo} />
          <Text style={styles.paragraph}>Cadastro</Text>

          <TextInput
            placeholder='RM'
            style={[styles.input, errors.rm && styles.inputError]}
            value={rm}
            onChangeText={setRm}
            keyboardType='numeric'
          />
          {errors.rm && <Text style={styles.errorText}>{errors.rm}</Text>}

          <TextInput
            placeholder='Nome completo'
            style={[styles.input, errors.name && styles.inputError]}
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            placeholder='E-mail'
            style={[styles.input, errors.email && styles.inputError]}
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

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
              placeholder='Confirmar senha'
              style={[styles.input, styles.passwordInput, errors.password && styles.inputError]}
              secureTextEntry={!passwordVisibleConf}
              value={passwordConf}
              onChangeText={setPasswordConf}
            />
            <Pressable onPress={togglePasswordVisibilityConf} style={styles.passwordVisibilityIcon}>
              <Ionicons name={passwordVisibleConf ? 'eye-off' : 'eye'} size={24} color="black" />
            </Pressable>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <Text style={styles.sexo}>Sexo:</Text>
            <View style={styles.radioOptions}>
              <View style={styles.radioOption}>
                <RadioButton value="Feminino" color='#FF735C' uncheckedColor="#CCC"/>
                <Text style={styles.radioText}>Feminino</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="Masculino" color='#FF735C' uncheckedColor="#CCC"/>
                <Text style={styles.radioText}>Masculino</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="Neutro" color='#FF735C' uncheckedColor="#CCC"/>
                <Text style={styles.radioText}>Neutro</Text>
              </View>
            </View>
          </RadioButton.Group>
          {errors.value && <Text style={styles.errorText}>{errors.value}</Text>}

          <Pressable
            onPress={() => navigation.navigate('login')}
            style={({ pressed }) => pressed ? [styles.touchText, styles.TouchPress] : styles.touchText}
          >
            <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </Pressable>

          <Pressable
            onPress={handleSignUp}
            style={({ pressed }) => pressed ? [styles.signUpButton, styles.btnPress] : styles.signUpButton}
          >
            <Text style={styles.signUpText}>Fazer cadastro</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
