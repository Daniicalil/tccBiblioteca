import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Pressable, Alert, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import styles from './styles';
import { RetangGreen, RetangOrange } from '../../../ALUNO/componentes/forms';

export default function AddLivroNovo({ navigation }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [editora, setEditora] = useState('');
  const [genero, setGenero] = useState('');
  const [resumo, setResumo] = useState('');
  const [quant, setQuant] = useState('');
  const [image, setImage] = useState(null);

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
      aspect: [2, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [2, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddLivroNovo = () => {
    if (name && author && editora && genero && resumo && quant && image) {
      Alert.alert(
        'Livro novo adicionado com sucesso!',
        '',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('biblioteca'),
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
          <RetangGreen />
          <RetangOrange /> 
            <View style={styles.titlePagina}>
              <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
              <Text style={styles.paragraph}>Adicionar livro novo</Text>
            </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textInput}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={name}
              multiline
              onChangeText={setName}
            />

            <Text style={styles.textInput}>Autor:</Text>
            <TextInput
              style={styles.input}
              value={author}
              multiline
              onChangeText={setAuthor}
            />

            <Text style={styles.textInput}>Editora:</Text>
            <TextInput
              style={styles.input}
              value={editora}
              multiline
              onChangeText={setEditora}
            />

            <Text style={styles.textInput}>Gênero:</Text>
            <TextInput
              style={styles.input}
              value={genero}
              multiline
              onChangeText={setGenero}
            />

            <Text style={styles.textInput}>Resumo:</Text>
            <TextInput
              style={styles.inputResumo}
              value={resumo}
              multiline
              onChangeText={setResumo}
            />

            <Text style={styles.textInput}>Quantidade:</Text>
            <TextInput
              style={styles.inputQuant}
              value={quant}
              keyboardType='numeric'
              onChangeText={setQuant}
            />
          </View>

          <View style={styles.containerImagem}>
            <Text style={styles.textInput}>Capa:</Text>
              <View style={styles.lineSquareImg}>
                {image && <Image source={{ uri: image }} style={styles.image} />}
              </View>
              <Pressable style={styles.btnImg} onPress={handleImagePick}>
                <Text style={styles.btnText}>Selecionar Imagem</Text>
              </Pressable>
          </View>

          <View style={styles.viewEditar}>
            <Pressable
              onPress={handleAddLivroNovo}
              style={({ pressed }) => pressed ? [styles.button, styles.btnPress] : styles.button}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
          </View>
      </View>
    </ScrollView>
  );
}
