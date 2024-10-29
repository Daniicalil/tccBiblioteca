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

import api from "../../../services/api";
import styles from "./styles";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import ModalAddAutor from "../../../componentes/modalAddAutor";
import ModalAddEditora from "../../../componentes/modalAddEditora";
import ModalAddGenero from "../../../componentes/modalAddGenero";

import ModaisLiv_ from "../../../componentes/modaisLiv_"

export default function AddLivroNovo({ navigation }) {
  const [autor, setAutor] = useState([]);
  const [editora, setEditora] = useState([]);
  const [genero, setGenero] = useState([]);
  const [image, setImage] = useState(null);

  const [livro, setLivro] = useState({
    liv_cod: "",
    liv_pha_cod: "",
    liv_categ_cod: "",
    liv_nome: "",
    liv_desc: "",
    edt_nome: "",
    edt_cod: "",
    liv_foto_capa: "",
    aut_nome: "",
    aut_cod: "",
    disponivel: "",
    generos: "",
    gen_cod: "",
  });

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  useEffect(() => {
    listaAutores();
    listaEditoras();
    listaGeneros();
  }, []);

  async function listaAutores() {
    try {
      const response = await api.post("/autores");
      setAutor(response.data.dados);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    }
  }

  async function listaEditoras() {
    try {
      const response = await api.post("/editoras");
      setEditora(response.data.dados);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    }
  }

  async function listaGeneros() {
    try {
      const response = await api.post("/generos");
      setGenero(response.data.dados);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    }
  }

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

  // const handleAddLivroNovo = () => {
  //   if (
  //     livro &&
  //     autor &&
  //     editora &&
  //     genero &&
  //     resumo &&
  //     quant &&
  //     image
  //   ) {
  //     Alert.alert(
  //       "Confirmação",
  //       "Você realmente deseja adicionar este livro?",
  //       [
  //         {
  //           text: "Confirmar",
  //           onPress: () => {
  //             Alert.alert(
  //               "Livro adicionado",
  //               "Livro novo adicionado com sucesso!",
  //               [
  //                 {
  //                   text: "OK",
  //                   onPress: () => navigation.navigate("biblioteca"),
  //                 },
  //               ],
  //               { cancelable: false }
  //             );
  //           },
  //         },
  //         {
  //           text: "Cancelar",
  //           style: "cancel",
  //         },
  //       ]
  //     );
  //   } else {
  //     Alert.alert("Erro", "Por favor, preencha todos os campos.");
  //   }
  // };

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

  const handleEditora = (editora) => {
    setEditora(editora);
    closeModalEditora();
  };

  const [showModalGenero, setShowModalGenero] = useState(false);
  const openModalGenero = () => setShowModalGenero(true);
  const closeModalGenero = () => setShowModalGenero(false);

  const handleGenero = (genero) => {
    setGenero(genero);
    closeModalGenero();
  };

  const [valida, setValida] = useState({
    livro: {
      validado: valDefault,
      mensagem: [],
    },
    aut_cod: {
      validado: valDefault,
      mensagem: [],
    },
    edt_cod: {
      validado: valDefault,
      mensagem: [],
    },
    gen_cod: {
      validado: valDefault,
      mensagem: [],
    },
    capa: {
      validado: valDefault,
      mensagem: [],
    },
    quant: {
      validado: valDefault,
      mensagem: [],
    },
    resumo: {
      validado: valDefault,
      mensagem: [],
    },
  });

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function validaSelectAutor() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livro.aut_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Por favor, selecione uma opção no campo.");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      aut_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaSelectEditora() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livro.edt_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Por favor, selecione uma opção no campo.");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      edt_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaSelectGenero() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livro.gen_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Por favor, selecione uma opção no campo.");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      gen_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaLivro() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (livro.liv_nome === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O nome do livro é obrigatório");
    } else if (livro.liv_nome.length < 5) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Insira o nome do livro");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      livro: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaQuant() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (livro.disponivel === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("A quantidade de livros é obrigatória");
    } else if (livro.disponivel.length <= 0) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("A quantidade de livros deve ser maior que 0");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      quant: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaResumo() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (livro.liv_desc === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O resumo do livro é obrigatório");
    } else if (livro.liv_desc.length < 5) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Insira o resumo do livro");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      resumo: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  const [showModaisLiv, setShowModaisLiv] = useState(false);
  const openModaisLiv = () => setShowModaisLiv(true);
  const closeModaisLiv = () => setShowModaisLiv(false);
  const handleLiv = () => {
    setShowModaisLiv(false);
    router.push("../biblioteca");
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let itensValidados = 0;

    // Validar campos
    // itensValidados += validaQuant();
    // itensValidados += validaLivro();
    // itensValidados += validaSelectAutor();
    // itensValidados += validaSelectEditora();
    // itensValidados += validaSelectGenero();
    // itensValidados += validaResumo();
    // itensValidados += validaFoto();

    // Verificar se todos os campos estão validados
    if (itensValidados === 0) {
      try {
        openModaisLiv();
        const response = await api.post("/usuarios", livro);
        if (response.data.sucesso) {
          Alert.alert("Cadastro do livro realizado com sucesso");
          navigate.navigation("biblioteca");
        }
      } catch (error) {
        if (error.response) {
          Alert.alert(
            error.response.data.mensagem + "\n" + error.response.data.dados
          );
        } else {
          alert("Erro no front-end" + "\n" + error);
        }
      }
    }
  }
  console.log(livro);

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

        <Text style={styles.textInput}>Código do livro:</Text>
          <View style={styles.divInput}>
            <TextInput
              keyboardType="numeric"
              name="liv_cod"
              style={styles.inputQuant}
              onChangeText={(value) => handleChange("liv_cod", value)}
              value={livro.liv_cod}
            />
          </View>

          <Text style={styles.textInput}>Nome do livro:</Text>
          <View style={styles.divInput}>
            <TextInput
              name="liv_nome"
              style={styles.input}
              onChangeText={(value) => handleChange("liv_nome", value)}
              value={livro.liv_nome}
            />
          </View>
          {valida.livro.mensagem.map((mens) => (
            <Text key={mens} id="nome" style={styles.small}>
              {mens}
            </Text>
          ))}

          <Text style={styles.textInput}>Autor:</Text>
          <View style={styles.pickerContainer}>
            <View className={styles.radioOptions}>
              <Picker
                selectedValue={livro.aut_cod}
                style={styles.picker}
                onValueChange={(value) => handleChange("aut_cod", value)}
                value={livro.aut_cod}
              >
                <Picker.Item
                  label="Selecione autor(a)"
                  value={null}
                  enabled={false}
                  style={styles.firstItem}
                />
                {autor.map((aut) => (
                  <Picker.Item
                    key={aut.aut_cod}
                    label={aut.aut_nome}
                    value={aut.aut_cod}
                    style={styles.defaultItem}
                  />
                ))}
              </Picker>
            </View>
          </View>
          {valida.aut_cod.mensagem.map((mens) => (
            <Text key={mens} style={styles.small}>
              {mens}
            </Text>
          ))}

          <Text style={styles.textInput}>Editora:</Text>
          <View style={styles.pickerContainer}>
            <View className={styles.radioOptions}>
              <Picker
                selectedValue={livro.edt_cod}
                style={styles.picker}
                onValueChange={(value) => handleChange("edt_cod", value)}
                value={livro.edt_cod}
              >
                <Picker.Item
                  label="Selecione a editora"
                  value={null}
                  enabled={false}
                  style={styles.firstItem}
                />
                {editora.map((edt) => (
                  <Picker.Item
                    key={edt.edt_cod}
                    label={edt.edt_nome}
                    value={edt.edt_cod}
                    style={styles.defaultItem}
                  />
                ))}
              </Picker>
            </View>
          </View>
          {valida.edt_cod.mensagem.map((mens) => (
            <Text key={mens} style={styles.small}>
              {mens}
            </Text>
          ))}

          <Text style={styles.textInput}>Gênero:</Text>
          <View style={styles.pickerContainer}>
            <View className={styles.radioOptions}>
              <Picker
                selectedValue={livro.gen_cod}
                style={styles.picker}
                onValueChange={(value) => handleChange("gen_cod", value)}
                value={livro.gen_cod}
              >
                <Picker.Item
                  label="Selecione o gênero"
                  value={null}
                  enabled={false}
                  style={styles.firstItem}
                />
                {genero.map((gen) => (
                  <Picker.Item
                    key={gen.value}
                    label={gen.gen_nome}
                    value={gen.value}
                    style={styles.defaultItem}
                  />
                ))}
              </Picker>
            </View>
          </View>
          {valida.gen_cod.mensagem.map((mens) => (
            <Text key={mens} style={styles.small}>
              {mens}
            </Text>
          ))}

          <Text style={styles.textInput}>Resumo:</Text>
          <View style={styles.divInput}>
            <TextInput
              name="liv_desc"
              style={styles.inputResumo}
              onChangeText={(value) => handleChange("liv_desc", value)}
              value={livro.liv_desc}
              multiline
            />
          </View>
          {valida.resumo.mensagem.map((mens) => (
            <Text key={mens} id="nome" style={styles.small}>
              {mens}
            </Text>
          ))}

          <Text style={styles.textInput}>Quantidade:</Text>
          <View style={styles.divInput}>
            <TextInput
              keyboardType="numeric"
              name="disponivel"
              style={styles.inputQuant}
              onChangeText={(value) => handleChange("disponivel", value)}
              value={livro.disponivel}
            />
          </View>
          {valida.quant.mensagem.map((mens) => (
            <Text key={mens} id="rm" style={styles.small}>
              {mens}
            </Text>
          ))}
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
            onPress={handleSubmit}
            style={({ pressed }) =>
              pressed ? [styles.button, styles.btnPress] : styles.button
            }
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
      <ModaisLiv_
        show={showModaisLiv}
        onClose={closeModaisLiv}
        onConfirm={handleLiv}
      />
    </ScrollView>
  );
}
