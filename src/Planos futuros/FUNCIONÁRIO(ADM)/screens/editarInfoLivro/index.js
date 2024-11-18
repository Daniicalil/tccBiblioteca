import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Autor from "../../../../assets/imagens_telas/autora.png";
import Editora from "../../../../assets/imagens_telas/editora.png";
import Genero from "../../../../assets/imagens_telas/genero.png";

import api from "../../../services/api";
import styles from "./styles";

const Line = () => {
  return <View style={styles.line} />;
};

export default function EditarInfoLivro({ route, codLivro }) {
  const navigation = useNavigation();

  const [livro, setLivro] = useState({
    liv_cod: "",
    liv_nome: "",
    disponivel: "",
    liv_desc: "",
    aut_nome: "",
    edt_nome: "",
    gen_nome: "",
    liv_foto_capa: "",
    generos: "",
    liv_pha_cod: "",
    liv_categ_cod: "",
    edt_cod: "",

    // "liv_pha_cod": "D738p",
    // "liv_categ_cod": "0.810",
    // "liv_nome": "A Garota do Lago 3",
    // "liv_desc": "A Garota do Lago é um thriller que se passa em uma pequena cidade montanhosa chamada Summit Lake, onde a repórter Kelsey Castle investiga o brutal assassinato da estudante de direito Becca Eckersley. Becca, filha de um advogado influente, foi morta em sua casa, deixando a comunidade em choque. Enquanto Kelsey segue as pistas do caso, ela se conecta intimamente com a vítima e descobre segredos sombrios sobre sua vida. A selvageria do crime e os esforços para abafar o caso indicam que pode não ter sido um ataque aleatório. Conforme Kelsey desvenda os segredos de Becca, ela também confronta seu próprio passado obscuro.",
    // "edt_cod": "27",
    // "liv_foto_capa": "a garota do lago.jpg"
  });

  const [autor, setAutor] = useState([]);
  const [editora, setEditora] = useState([]);
  const [genero, setGenero] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    listaAutor();
    listaEditora();
    listaGenero();
  }, []);

  async function listaAutor() {
    try {
      const response = await api.get("/autores");
      setAutor(response.data.dados);
      console.log(response.data);
    } catch (error) {
      Alert.alert("Erro ao carregar autores", error.message);
    }
  }

  async function listaEditora() {
    try {
      const response = await api.get("/editoras");
      setEditora(response.data.dados);
      console.log(response.data);
    } catch (error) {
      Alert.alert("Erro ao carregar editoras", error.message);
    }
  }

  async function listaGenero() {
    try {
      const response = await api.get("/generos");
      setGenero(response.data.dados);
      console.log(response.data);
    } catch (error) {
      Alert.alert("Erro ao carregar gêneros", error.message);
    }
  }

  useEffect(() => {
    const handleCarregaLivro = async () => {
      const dadosApi = { liv_cod: codLivro };

      try {
        const response = await api.post("/livros", dadosApi);
        if (response.data.sucesso) {
          const livroApi = response.data.dados[0];
          setLivro(livroApi);
          setImageSrc(livroApi.liv_foto_capa);
        } else {
          Alert.alert(response.data.mensagem);
        }
      } catch (error) {
        alert(
          error.response ? error.response.data.mensagem : "Erro no front-end"
        );
      }
    };

    handleCarregaLivro();
  }, []);

  const handleImagePick = async () => {
    // Solicita permissão para acessar a galeria
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permissão para acessar a galeria é necessária!");
      return;
    }

    // Abre o seletor de imagens
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Se o usuário selecionou uma imagem, atualiza o estado
      setImageSrc(result.assets[0].uri); // Obtém o URI da imagem
      setLivro((prev) => ({ ...prev, liv_foto_capa: result.assets[0].uri }));
    }
  };

  const handleChange = (name, value) => {
    setLivro((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (imageURL) => {
    setImageSrc(imageURL);
    setLivro((prev) => ({ ...prev, liv_foto_capa: imageURL }));
  };

  const handleSave = async () => {
    const { liv_nome, disponivel, liv_desc, aut_nome, edt_nome, gen_nome } =
      livro;

    if (
      !liv_nome ||
      !disponivel ||
      !liv_desc ||
      !aut_nome ||
      !edt_nome ||
      !gen_nome
    ) {
      Alert.alert("Todos os campos devem ser preenchidos");
      return;
    }

    try {
      const response = await api.patch(`/livros/${livro.liv_cod}`, {
        ...livro,
        liv_foto_capa: imageSrc,
      });

      if (response.data.sucesso) {
        Alert.alert("Sucesso", "Livro atualizado com sucesso!");
        navigation.navigate("/infoLivroBiblioteca"); // Redireciona após o sucesso
      }
    } catch (error) {
      console.error("Erro ao salvar informações do livro:", error);
      Alert.alert(
        error.response
          ? error.response.data.mensagem
          : "Erro ao salvar informações. Tente novamente."
      );
    }
  };
  // console.log(livro);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor="#3F7263" />
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
          <Text style={styles.paragraph}>Editar informações do livro</Text>
        </View>

        {livro.liv_cod ? (
          <View style={styles.formContainer}>
            <View style={styles.imageContainer}>
              <Image source={livro.liv_foto_capa} style={styles.capaLivros} />
              <Button title="Escolher Imagem" onPress={handleImagePick} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Visão geral</Text>
              <TextInput
                style={styles.textInput}
                value={livro.nome}
                onChangeText={(text) => setLivro({ ...livro, nome: text })}
                placeholder="Livro"
              />
            </View>

            <View style={styles.infoSmall}>
              <Text style={styles.available}>Disponível: </Text>
              <TextInput
                style={styles.textInputSmall}
                value={String(livro.disponivel)}
                onChangeText={(text) =>
                  setLivro({ ...livro, disponivel: number(text) })
                }
              />
            </View>

            <TextInput
              style={styles.descriptionInput}
              value={livro.descricao}
              onChangeText={(text) => setLivro({ ...livro, descricao: text })}
              placeholder="Resumo"
              multiline
            />

            <View style={styles.infoContainer}>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Autor(a)</Text>
                <Image source={Autor} style={styles.imgAutor} />
                <TextInput
                  style={styles.textInputSmall}
                  value={livro.autor}
                  onChangeText={(text) => setLivro({ ...livro, autor: text })}
                  placeholder="Autor"
                />
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Editora</Text>
                <Image source={Editora} style={styles.imgEditora} />
                <TextInput
                  style={styles.textInputSmall}
                  value={livro.editora}
                  onChangeText={(text) => setLivro({ ...livro, editora: text })}
                  placeholder="Editora"
                />
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Gênero</Text>
                <Image source={Genero} style={styles.imgGenero} />
                <TextInput
                  style={styles.textInputSmall}
                  value={livro.genero}
                  onChangeText={(text) => setLivro({ ...livro, genero: text })}
                  placeholder="Gênero"
                />
              </View>
            </View>
          </View>
        ) : (
          <Text>Não há resultados para a requisição</Text>
        )}
        <Pressable
          onPress={handleSave}
          style={({ pressed }) =>
            pressed ? [styles.button, styles.btnPress] : styles.button
          }
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
