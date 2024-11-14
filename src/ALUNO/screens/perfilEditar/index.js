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
  const [selectedSexo, setSelectedSexo] = useState("");
  const [cursoSelecionadoAluno, setCursoSelecionadoAluno] = useState(null);
  const [cursoSelecionadoEscola, setCursoSelecionadoEscola] = useState(null);
  console.log(cursoSelecionadoAluno);

  const handleClickAluno = (cur_cod) => {
    setCursoSelecionadoAluno(cur_cod);
  };
  const handleClickEscola = (cur_cod) => {
    setCursoSelecionadoEscola(cur_cod);
  };

  const handleAddCurso = async (cur_cod) => {
    try {
      const response = await api.post(`/usuarios_cursos`, {
        usu_cod: codUsu,
        cur_cod: cursoSelecionadoEscola,
      });
      if (response.data.sucesso) {
        alert("Curso adicionado com sucesso!");
        listaCursos();
        handleCarregaPerfil();
      }
    } catch (error) {
      console.error("Erro ao adicionar curso:", error);
      Alert.alert(
        error.response
          ? error.response.data.mensagem
          : "Erro ao adicionar curso. Tente novamente."
      );
    }
  };

  const handleRemoveCurso = async (cur_cod) => {
    try {
      const response = await api.delete(
        `/usuarios_cursos/${cursoSelecionadoAluno}`
      );
      if (response.data.sucesso) {
        alert("Curso removido com sucesso!");
        listaCursos();
        handleCarregaPerfil();
      }
    } catch (error) {
      console.error("Erro ao remover curso:", error);
      Alert.alert(
        error.response
          ? error.response.data.mensagem
          : "Erro ao remover curso. Tente novamente."
      );
    }
  };

  const [perfilEdt, setPerfilEdt] = useState({
    usu_cod: "",
    usu_rm: "",
    usu_social: "",
    usu_nome: "",
    usu_email: "",
    usu_senha: null,
    usu_sexo: "",
    usu_foto: "",
    usu_ativo: "",
    ucu_cod: "",
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
    if (codUsu) listaCursos();
  }, [codUsu]);

  async function listaCursos() {
    const dados = { usu_cod: codUsu };

    try {
      const response = await api.post("/dispUsucursos", dados);
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
    if (!codUsu) return;

    handleCarregaPerfil();
  }, [codUsu]);

  const handleCarregaPerfil = async () => {
    const dados = { usu_cod: codUsu };

    try {
      const response = await api.post("/usuarios", dados);
      if (response.data.sucesso) {
        const edtPerfilApi = response.data.dados[0];
        setPerfilEdt(edtPerfilApi);
        setSelectedSexo(edtPerfilApi.usu_sexo);
      } else {
        Alert.alert(response.data.mensagem);
      }
    } catch (error) {
      alert(
        error.response ? error.response.data.mensagem : "Erro no front-end"
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfilEdt((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!perfilEdt.usu_email || !perfilEdt.usu_sexo) {
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
                    : require("../../../../assets/imagens_telas/perfil.jpg")
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
                value={Number(perfilEdt.usu_rm)}
                editable={false}
              />
            </View>
            <Text style={styles.texto}>Nome social:</Text>
            <View sty={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_social}
                onChangeText={(text) =>
                  setPerfilEdt({ ...perfilEdt, usu_social: text })
                }
              />
            </View>
            <Text style={styles.texto}>Nome completo:</Text>
            <View sty={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_nome}
                editable={false}
              />
            </View>
            <Text style={styles.texto}>E-mail:</Text>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                value={perfilEdt.usu_email}
                onChangeText={(text) =>
                  setPerfilEdt({ ...perfilEdt, usu_email: text })
                }
              />
            </View>

            <View style={styles.listaCursos}>
              <View style={styles.inputCursos}>
                <Text style={styles.texto}>Cursos já selecionados:</Text>
                <ul
                  id="cur_cod"
                  name="cur_cod"
                  value={perfilEdt.cur_cod}
                  onChangeText={handleChange}
                  style={styles.opcaoCursos}
                >
                  {perfilEdt.cursos.length > 0 ? (
                    perfilEdt.cursos.map((cur) => (
                      <li
                        key={cur.cur_cod}
                        value={cur.ucu_cod}
                        onClick={() => handleClickAluno(cur.ucu_cod)}
                        style={
                          cursoSelecionadoAluno === cur.ucu_cod
                            ? styles.selected
                            : ""
                        }
                      >
                        {cur.cur_nome}
                      </li>
                    ))
                  ) : (
                    <p>Não há cursos registrados.</p>
                  )}
                </ul>
              </View>
              <View style={styles.buttons}>
                <button
                  style={styles.cursosButton}
                  onClick={() =>
                    cursoSelecionadoEscola &&
                    handleAddCurso(cursoSelecionadoAluno)
                  }
                >
                  <IoChevronBack size={20} color="#FFF" />
                </button>
                <button
                  style={styles.cursosButton}
                  onClick={() =>
                    cursoSelecionadoAluno &&
                    handleRemoveCurso(cursoSelecionadoEscola)
                  }
                >
                  <IoChevronForward size={20} color="#FFF" />
                </button>
              </View>
              <View style={styles.inputCursos}>
                <label style={styles.textInput}>Selecione o curso:</label>
                <ul
                  id="cur_cod"
                  name="cur_cod"
                  value={perfilEdt.cur_cod}
                  onChangeText={handleChange}
                  style={styles.opcaoCursos}
                >
                  {cursos.length > 0 ? (
                    cursos.map((cur) => (
                      <li
                        key={cur.cur_cod}
                        value={cur.cur_cod}
                        onClick={() => handleClickEscola(cur.cur_cod)}
                        style={
                          cursoSelecionadoEscola === cur.cur_cod
                            ? styles.selected
                            : ""
                        }
                      >
                        {cur.cur_nome}
                      </li>
                    ))
                  ) : (
                    <p>Não há cursos registrados.</p>
                  )}
                </ul>
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
                    {[
                      { label: "Feminino", value: "0" },
                      { label: "Masculino", value: "1" },
                      { label: "Neutro", value: "2" },
                      { label: "Padrão", value: "3" },
                    ].map((opcao) => (
                      <View key={opcao.value} style={styles.buttonRadio}>
                        <RadioButton
                          value={opcao.value}
                          color="#FF735C"
                          uncheckedColor="#CCC"
                          status={
                            value === opcao.value ? "checked" : "unchecked"
                          }
                          checked={
                            Number(perfilEdt.usu_sexo) === Number(opcao.value)
                          }
                          onChangeText={(e) => {
                            setSelectedSexo(e.target.value); // Atualiza selectedSexo
                            setPerfilEdt({
                              ...perfilEdt,
                              usu_sexo: e.target.value,
                            }); // Atualiza perfilEdt
                          }}
                        />
                        <Text style={styles.label}>{opcao.label}</Text>
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
