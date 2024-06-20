import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { RadioButton, Avatar } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';

import styles from './styles';

import FotoPadraoPerfil from '../../../../assets/imagens_telas/perfil.png';
import IconeEditar from '../../../../assets/imagens_telas/editar_perfil.png';

export default function Perfil({ navigation }) {
  const [value, setValue] = useState('first');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
          <Text style={styles.paragraph}>Perfil</Text>
        </View>
      </View>

      <Avatar.Image size={120} color="#3F7263" source={FotoPadraoPerfil} style={styles.fotoPadraoPerfil} />
      {/* <View style={{height: 100, width: 100, borderRadius: 90, backgroundColor: '#0f0', alignSelf: 'center'}}>
        <Image source={FotoPadraoPerfil} style={{height: 100, width: 100, borderRadius: 90,}}  />
      </View> */}

      <Text style={styles.texto}>Nome social:</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.texto}>Nome completo:</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.texto}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.texto}>Senha:</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
          <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
          <Text style={styles.sexo}>Sexo:</Text>
          <View style={styles.seletores}>
            <Text><RadioButton value="Feminino" color='#3F7263' />Feminino</Text>
            <Text> <RadioButton value="Masculino" color='#3F7263' />Masculino</Text>
            <Text><RadioButton value="Neutro" color='#3F7263' />Neutro</Text>
          </View>
        </RadioButton.Group>        
      </View>
      <View style={styles.viewEditar}>
          <Pressable 
            style={
              ({pressed}) => pressed ?
                [styles.botaoEditar, styles.btnPress]
              :
                styles.botaoEditar
              }  
          >
            <Image source={IconeEditar} style={styles.iconeEditar} />
          </Pressable>
        </View>
    </View >
  );
}