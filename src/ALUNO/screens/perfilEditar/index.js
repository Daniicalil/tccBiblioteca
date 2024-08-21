import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { RadioButton, Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from './forms';
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import drawerNavigation from '../../rotas/drawerNavigation';

import styles from './styles';

import defaultProfileImage from '../../../../assets/imagens_telas/perfil.jpg'; // Imagem padrão

export default function PerfilEditar({ navigation, route }) {
  const { drawerNavigation } = route.params || {}; // Recebe o parâmetro passado na navegação
  const [value, setValue] = useState('first');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(defaultProfileImage);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos de permissões para acessar a galeria!');
        }
      }
    })();
  }, []);
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  const handleImagePick = () => {
    Alert.alert(
      "Selecionar Imagem",
      "Escolha uma opção",
      [
        {
          text: "Escolher da Galeria",
          onPress: pickImage,
        },
        {
          text: "Tirar Foto",
          onPress: takePhoto,
        },
        {
          text: "Cancelar",
          style: "cancel"
        }
      ],
      { cancelable: true }
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
        {/* <StatusBar backgroundColor='#3F7263' transLucent={false} /> */}
        <RetangGreen />
        <RetangOrange />
          <View style={styles.titlePagina}>
            <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
              <Text style={styles.paragraph}>Editar Perfil</Text>
          </View>
      </View>

      <View style={styles.fotoContainer}>
        <Avatar.Image 
          size={120} 
          color="#3F7263" 
          source={typeof image === 'string' ? { uri: image } : image} 
          style={styles.fotoPadraoPerfil} 
        />
        <Pressable 
          onPress={handleImagePick}
          style={
            ({ pressed }) => pressed 
              ? [styles.iconeEditarContainer, styles.iconeFotoPress]
              : styles.iconeEditarContainer
          }  
        >
          <Entypo name="camera" size={22} color="black" />
        </Pressable>
      </View>

      <Text style={styles.texto}>RM:</Text>
      <TextInput 
        style={styles.input} 
        editable={false}
      />
      <Text style={styles.texto}>Nome social:</Text>
      <TextInput 
        style={styles.input} 
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
      />

      <View style={styles.contentContainer}>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <Text style={styles.sexo}>Sexo:</Text>
          <View style={styles.seletores}>
            <View style={styles.radioOption}>
              <RadioButton value="Feminino" color='#FF735C' />
              <Text style={styles.radioLabel}>Feminino</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Masculino" color='#FF735C' />
              <Text style={styles.radioLabel}>Masculino</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Neutro" color='#FF735C' />
              <Text style={styles.radioLabel}>Neutro</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Padrão" color='#FF735C' />
              <Text style={styles.radioLabel}>Padrão</Text>
            </View>
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
