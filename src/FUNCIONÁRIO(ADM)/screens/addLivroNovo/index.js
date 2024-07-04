import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView ,View, Text, Pressable, Alert, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import {RetangGreen, RetangOrange} from './forms';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import styles from './styles';
import imgContato from '../../../../assets/imagens_telas/contato.jpg';

export default function AddLivroExistente({ navigation }) {
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
          aspect: [4, 3],
          quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
          setImage(result.uri);
      }
  };


  const livros = [
    { label: '(Selecione)', value: '' },
    { label: 'O diário de Anne Frank - Anne Frank', value: 'OdiáriodeAnneFrank(AnneFrank)' },
    { label: 'Dom Casmurro - Machado de Assis', value: 'DomCasmurro(MachadodeAssis)' },
    { label: 'Romeu e Julieta - William Shakespeare', value: 'RomeueJulieta(WilliamShakespeare)' },
    { label: '1984 - George Orwell', value: '1984(GeorgeOrwell)' },
    { label: 'Os Miseráveis - Victor Hugo', value: 'OsMiseráveis(VictorHugo)' },
    { label: 'Orgulho e Preconceito - Jane Austen', value: 'OrgulhoePreconceito(JaneAusten)' },
    { label: 'A garota do lago - Charlie Donlea', value: 'Agarotadolago(CharlieDonlea)' },
    { label: 'Verity - Collen Hoover', value: 'Verity(CollenHoover)' },
    { label: 'Heartstopper - Alice Oseman', value: 'Heartstopper(AliceOseman)' },
    { label: 'Deixada para trás - Charlie Donlea', value: 'Deixadaparatrás(CharlieDonlea)' },
    { label: 'A revolução dos bichos - George Orwell', value: 'Arevoluçãodosbichos(GeorgeOrwell)' },
    { label: 'Procure nas cinzas - Charlie Donlea', value: 'Procurenascinzas(CharlieDonlea)' },
    { label: 'Harry Potter e a Pedra Filosofal - J.K. Rowling', value: 'HarryPottereaPedraFilosofal(J.K.Rowling)' },
  ]; 

  const handleAddLivroExist = () => {
    if (selectedlivros) {
      Alert.alert(
        'Livro existente adicionado com sucesso!',
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

return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
            
        <View style={styles.titlePagina}>
        <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
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
      </View>

      <Text style={styles.textInput}>Quantidade:</Text>
        <TextInput
          style={styles.inputQuant}
          value={quant}
          multiline
          onChangeText={setQuant}
        />
      </View>

      <View style={styles.containerImagem}>
            <Button title="Escolher Imagem" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      
      <View style={styles.viewEditar}>
        <Pressable
          onPress={handleAddLivroExist}
          style={
            ({ pressed }) => pressed ? 
              [styles.button, styles.btnPress] 
            : 
              styles.button}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>

      </View>

    </ScrollView>
  );
}