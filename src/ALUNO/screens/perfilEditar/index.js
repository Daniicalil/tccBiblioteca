import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { RadioButton, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import api from "../../../services/api";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";
import defaultProfileImage from "../../../../assets/imagens_telas/perfil.jpg"; // Imagem padrão

export default function PerfilEditar({ codUsu }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

  const navigation = useNavigation();

  const [cursos, setCursos] = useState([]);
  const [perfilEdt, setPerfilEdt] = useState({
    usu_cod: "",
    usu_rm: "",
    usu_social: "",
    usu_nome: "",
    usu_email: "",
    usu_senha: "",
    usu_sexo: "",
    usu_foto: null,
    usu_ativo: "",
    cur_cod: "",
    cur_nome: "",
  });

  const [imageSrc, setImageSrc] = useState(defaultProfileImage);

  // const showConfirmAlert = useBotaoConfirmarAcao(
  //   "Tem certeza que deseja salvar as informações?",
  //   async () => {
  //     // Lógica a ser executada após a confirmação
  //     await handleSave();
  //     console.log("Informações salvas");
  //   },
  //   "perfil"
  // );

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Desculpe, precisamos de permissão para acessar a galeria!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageSrc(uri); // Atualize imageSrc
      setPerfilEdt((prev) => ({ ...prev, usu_foto: uri }));
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Selected image URI:", result.assets[0].uri);
      setImageSrc(result.assets[0].uri); // Use this line for the selected image URI
      setPerfilEdt((prev) => ({ ...prev, usu_foto: result.assets[0].uri }));
    }
  };

  const handleImagePick = () => {
    Alert.alert(
      "Selecionar Imagem",
      "Escolha uma opção",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Tirar Foto",
          onPress: takePhoto,
        },
        {
          text: "Escolher da Galeria",
          onPress: pickImage,
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    listaCursos();
  }, []);

  async function listaCursos() {
    try {
      const response = await api.post("/cursos");
      setCursos(response.data.dados);
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

  // Busca os dados do perfil ao montar o componente
  useEffect(() => {
    const handleCarregaPerfil = async () => {
      const dados = { usu_cod: 29 };
      // codUsu

      try {
        const response = await api.post("/usuarios", dados); // Ajuste o endpoint conforme necessário
        if (response.data.sucesso) {
          const edtPerfilApi = response.data.dados[0];
          setPerfilEdt(edtPerfilApi);
          setImageSrc(edtPerfilApi.usu_foto || defaultProfileImage);
        } else {
          Alert.alert(response.data.mensagem);
        }
      } catch (error) {
        alert(
          error.response ? error.response.data.mensagem : "Erro no front-end"
        );
      }
    };

    handleCarregaPerfil();
  }, []);

  const handleSave = async () => {
    if (!perfilEdt.nome_social || !perfilEdt.email) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const response = await api.patch(`/usuarios/${perfilEdt.usu_cod}`, {
        ...perfilEdt,
        usu_foto: imageSrc,
      });

      if (response.data.sucesso) {
        Alert.alert("Perfil atualizado com sucesso!");
        navigation.navigate("../perfil"); // Redireciona após o sucesso
      }
    } catch (error) {
      console.error("Erro ao salvar informações do usuário:", error);
      Alert.alert(
        error.response
          ? error.response.data.mensagem
          : "Erro ao salvar informações. Tente novamente."
      );
    }
  };
  // console.log(livro);

  const [value, setValue] = useState(perfilEdt.usu_sexo);
  const sexos = [
    { label: "Feminino", value: "0" },
    { label: "Masculino", value: "1" },
    { label: "Neutro", value: "2" },
    { label: "Padrão", value: "3" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.inicio}>
          {/* <StatusBar backgroundColor='#3F7263' transLucent={false} /> */}
          <RetangGreen />
          <RetangOrange />
          <View style={styles.titlePagina}>
            <FontAwesome
              name="angle-left"
              size={30}
              color="black"
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.paragraph}>Editar Perfil</Text>
          </View>
        </View>

        {perfilEdt ? (
          <View>
            <View style={styles.fotoContainer}>
              <Avatar.Image
                size={120}
                color="#3F7263"
                source={
                  perfilEdt.usu_foto
                    ? { uri: String(perfilEdt.usu_foto) }
                    : require("../../../../assets/imagens_telas/perfil.jpg") // Caminho da imagem padrão
                }
                style={styles.fotoPadraoPerfil}
              />
              <Pressable
                onPress={handleImagePick}
                style={({ pressed }) =>
                  pressed
                    ? [styles.iconeEditarContainer, styles.iconeFotoPress]
                    : styles.iconeEditarContainer
                }
              >
                <Entypo name="camera" size={22} color="black" />
              </Pressable>
            </View>
            <Text style={styles.texto}>RM:</Text>
            <View sty={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_rm}
                editable={false}
              />
            </View>
            <Text style={styles.texto}>Nome social:</Text>
            <View sty={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_social}
                onChangeText={(text) =>
                  setPerfilEdt((prev) => ({ ...prev, usu_social: text }))
                }
              />
            </View>
            <Text style={styles.texto}>Nome completo:</Text>
            <View sty={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_nome}
                // onChangeText={(text) =>
                //   setPerfilEdt((prev) => ({ ...prev, usu_nome: text }))
                // }
                editable={false}
              />
            </View>
            <Text style={styles.texto}>E-mail:</Text>
            <View sty={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_email}
                onChangeText={(text) =>
                  setPerfilEdt((prev) => ({ ...prev, usu_email: text }))
                }
              />
            </View>
            <Text style={styles.texto}>Sel. curso técnico ou médio:</Text>
            <View style={styles.pickerContainer}>
              <View>
                <Picker
                  selectedValue={perfilEdt.cur_cod}
                  style={styles.radioOption}
                  onValueChange={(itemValue) =>
                    setPerfilEdt((prev) => ({ ...prev, cur_cod: itemValue }))
                  }
                  value={perfilEdt.cur_cod}
                >
                  {cursos.length > 0 ? (
                    cursos.map((cur) => (
                      <Picker.Item
                        key={cur.cur_cod}
                        label={cur.cur_nome}
                        value={cur.cur_cod}
                        style={styles.defaultItem}
                      />
                    ))
                  ) : (
                    <Picker.Item label="Nenhum curso selecionado" value="" />
                  )}
                </Picker>
              </View>
            </View>

            <View style={styles.form}>
              <RadioButton.Group
                onValueChange={(newValue) => {
                  console.log("Novo valor selecionado:", newValue); // Verifica o valor
                  setValue(newValue);
                }}
                value={value}
              >
                <View style={styles.sexoForm}>
                  <Text style={styles.sexo}>Sexo:</Text>
                  <View style={styles.divRadio}>
                    {sexos.map((sexo) => (
                      <View key={sexo.value} style={styles.buttonRadio}>
                        <RadioButton
                          value={sexo.value}
                          color="#FF735C"
                          uncheckedColor="#CCC"
                          status={
                            value === sexo.value ? "checked" : "unchecked"
                          }
                        />
                        <Text style={styles.label}>{sexo.label}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <Pressable
              onPress={() => navigation.replace("esqueceuSenha1")}
              style={({ pressed }) =>
                pressed
                  ? [styles.touchText, styles.TouchPress]
                  : styles.touchText
              }
            >
              <Text style={styles.touchText}>Esqueceu a senha?</Text>
            </Pressable>
            <View style={styles.viewSalvar}>
              <Pressable
                onPress={handleSave}
                style={({ pressed }) =>
                  pressed
                    ? [styles.botaoSalvar, styles.btnPress]
                    : styles.botaoSalvar
                }
              >
                <Text style={styles.salvarText}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <Text>Não há resultados para a requisição</Text>
        )}
      </View>
    </ScrollView>
  );
}
