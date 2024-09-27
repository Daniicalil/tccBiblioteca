import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import Constants from "expo-constants";

import styles from "./styles";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import ModalAddAutor from "../../../componentes/modalAddAutor";
import ModalAddEditora from "../../../componentes/modalAddEditora";
import ModalAddGenero from "../../../componentes/modalAddGenero";

export default function AddLivroNovo({ navigation }) {
  const [name, setName] = useState("");
  const [selectedAutor, setSelectedAutor] = useState("");
  const [selectedEditora, setSelectedEditora] = useState("");
  const [selectedGenero, setSelectedGenero] = useState("");
  const [resumo, setResumo] = useState("");
  const [quant, setQuant] = useState("");
  const [image, setImage] = useState(null);

  const autores = [
    { label: "(Selecione)", value: "" },
    { label: "opção 1", value: "opcao1" },
    { label: "opção 2", value: "opcao2" },
    { label: "opção 3", value: "opcao3" },
  ];

  const editoras = [
    { label: "(Selecione)", value: "" },
    { label: "opção 1", value: "opcao1" },
    { label: "opção 2", value: "opcao2" },
    { label: "opção 3", value: "opcao3" },
  ];

  const generos = [
    { label: "(Selecione)", value: "" },
    { label: "opção 1", value: "opcao1" },
    { label: "opção 2", value: "opcao2" },
    { label: "opção 3", value: "opcao3" },
  ];

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpe, precisamos de permissões para acessar a galeria!");
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
    if (
      name &&
      setSelectedAutor &&
      setSelectedEditora &&
      setSelectedGenero &&
      resumo &&
      quant &&
      image
    ) {
      Alert.alert(
        "Confirmação",
        "Você realmente deseja adicionar este livro?",
        [
          {
            text: "Confirmar",
            onPress: () => {
              Alert.alert(
                "Livro adicionado",
                "Livro novo adicionado com sucesso!",
                [
                  {
                    text: "OK",
                    onPress: () => navigation.navigate("biblioteca"),
                  },
                ],
                { cancelable: false }
              );
            },
          },
          {
            text: "Cancelar",
            style: "cancel",
          },
        ]
      );
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
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
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const [showModalAutor, setShowModalAutor] = useState(false);
  const openModalAutor = () => setShowModalAutor(true);
  const closeModalAutor = () => setShowModalAutor(false);

  const handleAutor = (autor) => {
    setAutor(autor);
    closeModalAutor();
  };

  const [showModalEditora, setShowModalEditora] = useState(false);
  const openModalEditora = () => setShowModalEditora(true);
  const closeModalEditora = () => setShowModalEditora(false);

  const handleEditora = (autor) => {
    setEditora(editora);
    closeModalEditora();
  };

  const [showModalGenero, setShowModalGenero] = useState(false);
  const openModalGenero = () => setShowModalGenero(true);
  const closeModalGenero = () => setShowModalGenero(false);

  const handleGenero = (autor) => {
    setGenero(genero);
    closeModalGenero();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor="#3F7263" transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome
            name="angle-left"
            size={30}
            color="black"
            style={styles.icon}
            onPress={() => navigation.navigate("addBiblioteca")}
          />
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
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedAutor}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedAutor(itemValue)}
            >
              {autores.map((autor) => (
                <Picker.Item
                  key={autor.value}
                  label={autor.label}
                  value={autor.value}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.textInput}>Editora:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedEditora}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedEditora(itemValue)}
            >
              {editoras.map((editora) => (
                <Picker.Item
                  key={editora.value}
                  label={editora.label}
                  value={editora.value}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.textInput}>Gênero:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedGenero}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedGenero(itemValue)}
            >
              {generos.map((genero) => (
                <Picker.Item
                  key={genero.value}
                  label={genero.label}
                  value={genero.value}
                />
              ))}
            </Picker>
          </View>

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
            keyboardType="numeric"
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

        <View style={styles.tresModais}>
          {/* Modal para adicionar autor */}
          <Pressable onPress={openModalAutor} style={styles.buttonAdd}>
            <Text style={styles.buttonAddText}>Adicionar Autor(a)</Text>
          </Pressable>
          <ModalAddAutor
            show={showModalAutor}
            onClose={closeModalAutor}
            onConfirm={handleAutor}
          />

          {/* Modal para adicionar editora */}
          <Pressable onPress={openModalEditora} style={styles.buttonAdd}>
            <Text style={styles.buttonAddText}>Adicionar Editora</Text>
          </Pressable>
          <ModalAddEditora
            show={showModalEditora}
            onClose={closeModalEditora}
            onConfirm={handleEditora}
          />

          {/* Modal para adicionar gênero */}
          <Pressable onPress={openModalGenero} style={styles.buttonAdd}>
            <Text style={styles.buttonAddText}>Adicionar Gênero</Text>
          </Pressable>
          <ModalAddGenero
            show={showModalGenero}
            onClose={closeModalGenero}
            onConfirm={handleGenero}
          />
        </View>

        <View style={styles.viewEditar}>
          <Pressable
            onPress={handleAddLivroNovo}
            style={({ pressed }) =>
              pressed ? [styles.button, styles.btnPress] : styles.button
            }
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
