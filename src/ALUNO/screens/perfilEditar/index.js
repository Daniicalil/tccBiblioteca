import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, TextInput, Pressable, Alert, ScrollView } from "react-native";
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
import { CgOptions } from "react-icons/cg";

import styles from "./styles";
import api from "../../../services/api";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";
import defaultProfileImage from "../../../../assets/imagens_telas/perfil.jpg"; // Imagem padrão

export default function PerfilEditar({ codUsu }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

  const imageLoader = ({ src, width, quality }) => {
    return `${apiUrl}:${apiPorta}${src}?w=${width}&q=${quality || 75}`;
  };

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
    usu_foto: "",
    usu_ativo: "",
    cur_cod: "",
    cur_nome: "",
  });

  const [imageSrc, setImageSrc] = useState(defaultProfileImage);

  const showConfirmAlert = useBotaoConfirmarAcao(
    "Tem certeza que deseja salvar as informações?",
    async () => {
      // Lógica a ser executada após a confirmação
      await handleSave();
      console.log("Informações salvas");
    },
    "perfil"
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Editar Perfil",
      headerLeft: () => (
        <FontAwesome
          name="angle-left"
          size={30}
          color="black"
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      // Solicitar permissões para acessar a galeria de imagens
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Desculpe, precisamos de permissões para acessar a galeria!");
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

  const handleImageChange = (imageURL) => {
    setImageSrc(imageURL);
    setPerfilEdt((prev) => ({ ...prev, usu_foto: imageURL }));
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
        Alert.alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        Alert.alert("Erro no front-end" + "\n" + error);
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
        } else {
          error(response.data.mensagem);
        }
      } catch (error) {
        error(
          error.response ? error.response.data.mensagem : "Erro no front-end"
        );
      }
    };

    handleCarregaPerfil();
  }, []);
  

  const handleSave = async () => {
    const {
      usu_rm,
      usu_nome,
      usu_nome_completo,
      usu_email,
      cur_nome,
      usu_sexo,
    } = perfilEdt;

    if (
      !usu_rm ||
      !usu_nome ||
      !usu_nome_completo ||
      !usu_email ||
      !cur_nome ||
      !usu_sexo
    ) {
      Alert.alert("Todos os campos devem ser preenchidos");
      return;
    }

    setIsSaving(true); // Inicia o salvamento

    try {
      const response = await api.patch(`/usuarios/${perfilEdt.usu_cod}`, {
        ...perfilEdt,
        usu_foto: imageSrc,
      });

      if (response.data.sucesso) {
        Alert.alert("Usuário atualizado com sucesso!");
        navigation.navigate("../perfil"); // Redireciona após o sucesso
      }
    } catch (error) {
      console.error("Erro ao salvar informações do usuário:", error);
      Alert.alert(
        error.response
          ? error.response.data.mensagem
          : "Erro ao salvar informações. Tente novamente."
      );
    } finally {
      setIsSaving(false); // Finaliza o salvamento
    }
  };
  // console.log(livro);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfilEdt((prev) => ({ ...prev, [name]: value }));
  };

  const sexo = [
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
                source={imageSrc ? { uri: imageSrc } : { uri: defaultProfileImage }}
                style={styles.fotoPadraoPerfil}
                loader={imageLoader}
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
            <View className={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_rm}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPerfilEdt({
                    ...perfilEdt,
                    usu_rm: isNaN(value) ? 0 : value,
                  });
                }}
                editable={false}
              />
            </View>

            <Text style={styles.texto}>Nome social:</Text>
            <View className={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_social}
                onChange={(e) =>
                  setPerfilEdt({ ...perfilEdt, usu_social: e.target.value })
                }
              />
            </View>

            <Text style={styles.texto}>Nome completo:</Text>
            <View className={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_nome}
                onChange={(e) =>
                  setPerfilEdt({ ...perfilEdt, usu_nome: e.target.value })
                }
                editable={false}
              />
            </View>

            <Text style={styles.texto}>E-mail:</Text>
            <View className={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_email}
                onChange={(e) =>
                  setPerfilEdt({ ...perfilEdt, usu_email: e.target.value })
                }
              />
            </View>

            <Text style={styles.texto}>Sel. curso técnico ou médio</Text>
            <View style={styles.pickerContainer}>
              {/* <View
              className={[
                valida.cur_cod.validado ? styles.success : styles.error,
                styles.valSelectCursos
              ]}
              id="valSelectCursos"
            > */}
              <View className={styles.radioOptions}>
                <Picker
                  selectedValue={perfilEdt.cur_cod}
                  style={styles.radioOption}
                  onValueChange={(value) =>
                    setPerfilEdt((prev) => ({ ...prev, cur_cod: value }))
                  }
                  value={perfilEdt.cur_cod}
                >
                  <Picker.Item
                    label="Sel. curso técnico ou médio"
                    value={null}
                    enabled={false}
                    style={styles.firstItem}
                  />
                  {cursos.map((cur) => (
                    <Picker.Item
                      key={cur.cur_cod}
                      label={cur.cur_nome}
                      value={cur.cur_cod}
                      style={styles.defaultItem}
                    />
                  ))}
                </Picker>
              </View>
              {/* </View> */}
            </View>

            <View style={styles.form}>
              <Text style={styles.sexo}>Sexo:</Text>
              <RadioButton.Group
                onValueChange={(value) =>
                  setPerfilEdt((prev) => ({ ...prev, usu_sexo: value }))
                }
                value={perfilEdt.usu_sexo}
              >
                <View style={styles.sexoForm}>
                  {sexo.map((sex) => (
                    <View key={sex.value} style={styles.radioContainer}>
                      <RadioButton value={sex.value} />
                      <Text style={styles.label}>
                        {sex.label.charAt(0).toUpperCase() + sex.label.slice(1)}
                      </Text>
                    </View>
                  ))}
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
                onPress={showConfirmAlert}
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
