import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { RadioButton, Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from '../../componentes/forms';

import styles from './styles';

import FotoPadraoPerfil from '../../../../assets/imagens_telas/perfil.jpg';
import IconeEditar from '../../../../assets/imagens_telas/editar_perfil.png';

export default function Perfil({ navigation }) {
  const [value, setValue] = useState('first');
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        {/* <StatusBar backgroundColor='#3F7263' transLucent={false} /> */}
        <RetangGreen />
        <RetangOrange />
          <View style={styles.titlePagina}>
            <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
              <Text style={styles.paragraph}>Perfil</Text>
          </View>
      </View>
        <Avatar.Image size={120} source={FotoPadraoPerfil} style={styles.fotoPadraoPerfil} />
      <Text style={styles.texto}>RM:</Text>
      <TextInput
        style={styles.input}
        editable={false}
      />
      <Text style={styles.texto}>Nome social:</Text>
      <TextInput
        style={styles.input}
        editable={false}
      />
      <Text style={styles.texto}>Nome completo:</Text>
      <TextInput
        style={styles.input}
        editable={false}
      />

      <Text style={styles.texto}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={false}
      />

      <View style={styles.contentContainer}>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
          <Text style={styles.sexo}>Sexo:</Text>
          <View style={styles.seletores}>
            <View style={styles.radioOption}>
              <RadioButton value="Feminino" color='#FF735C' disabled={true} />
              <Text style={styles.radioLabel}>Feminino</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Masculino" color='#FF735C' disabled={true} />
              <Text style={styles.radioLabel}>Masculino</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Neutro" color='#FF735C' disabled={true} />
              <Text style={styles.radioLabel}>Neutro</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Padrão" color='#FF735C' disabled={true} />
              <Text style={styles.radioLabel}>Padrão</Text>
            </View>
          </View>
        </RadioButton.Group>        
      </View>

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

      <View style={styles.viewEditar}>
      <Pressable 
        onPress={() => navigation.navigate('perfilEditar')}
        style={
          ({ pressed }) => pressed ?
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