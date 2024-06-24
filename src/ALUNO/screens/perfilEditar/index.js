import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { RadioButton, Avatar } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

import FotoPadraoPerfil from '../../../../assets/imagens_telas/perfil.png';
import IconeEditar from '../../../../assets/imagens_telas/editar_perfil.png';

import { launchImageLibrary } from 'react-native-image-picker';

export default function PerfilEditar({ navigation }) {
  const [value, setValue] = useState('first');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(FotoPadraoPerfil);

  const handleImagePicker = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          const source = { uri: response.assets[0].uri };
          setProfilePhoto(source);
        }
      }
    );
  };

  const handleSave = () => {
    Alert.alert(
      'Perfil Atualizado',
      'Suas informações foram salvas com sucesso.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('perfil') // Substitua 'NovaTela' pelo nome da tela que você deseja navegar
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
          <Text style={styles.paragraph}>Editar Perfil</Text>
        </View>
      </View>

      <View style={styles.fotoContainer}>
        <Avatar.Image size={120} color="#3F7263" source={profilePhoto} style={styles.fotoPadraoPerfil} />
        <Pressable 
            onPress={handleImagePicker}
            style={
              ({pressed}) => pressed ?
                [styles.iconeEditarContainer, styles.iconeFotoPress]
              :
                styles.iconeEditarContainer
              }  
          >
            <Entypo name="camera" size={22} color="black" />
          </Pressable>
      </View>

      <Text style={styles.texto}>RM:</Text>
      <TextInput 
        style={styles.input} 
        disabled={true}
      />
      <Text style={styles.texto}>Nome social:</Text>
      <TextInput 
        style={styles.input} 
      />
      <Text style={styles.texto}>Nome completo:</Text>
      <TextInput 
        style={styles.input} 
        disabled={true}
      />

      <Text style={styles.texto}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.contentContainer}>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <Text style={styles.sexo}>Sexo:</Text>
          <View style={styles.seletores}>
            <Text><RadioButton value="Feminino" color='#3F7263' />Feminino</Text>
            <Text><RadioButton value="Masculino" color='#3F7263' />Masculino</Text>
            <Text><RadioButton value="Neutro" color='#3F7263' />Neutro</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Pressable
        onPress={() => navigation.navigate('esqueceuSenha1')}
        style={({ pressed }) => pressed ? [styles.touchText, styles.TouchPress] : styles.touchText}
      >
        <Text style={styles.touchText}>Esqueceu a senha?</Text>
      </Pressable>

      <View style={styles.viewSalvar}>
        <Pressable
          onPress={handleSave}
          style={({ pressed }) => pressed ? [styles.botaoSalvar, styles.btnPress] : styles.botaoSalvar}
        >
          <Text style={styles.salvarText}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}