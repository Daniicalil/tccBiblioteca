import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { useNavigation } from "@react-navigation/native";

import Autor from "../../../../assets/imagens_telas/autora.png";
import Editora from "../../../../assets/imagens_telas/editora.png";
import Genero from "../../../../assets/imagens_telas/genero.png";

import styles from "./styles";
import api from "../../../services/api";

const Line = () => {
  return <View style={styles.line} />;
};

export default function InfoLivroBiblioteca({ route, codLivro }) {
  const navigation = useNavigation();
  const { book } = route.params; //muda a tela da biblioteca
  const [livro, setLivro] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCarregaLivro = async () => {
      const dadosApi = { liv_cod: codLivro };

      try {
        const response = await api.post('/livros', dadosApi);
        if (response.data.sucesso) {
          const livroApi = response.data.dados[0];
          setLivro(livroApi);
        } else {
          setError(response.data.mensagem);
        }
      } catch (error) {
        setError(error.response ? error.response.data.mensagem : 'Erro no front-end');
      }
    };

    handleCarregaLivro();
  }, []);

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
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.paragraph}>Informações do livro</Text>
        </View>

        {livro ? (
          <>
            <View style={styles.lineSquare}>
              <Image source={livro.liv_foto_capa} style={styles.capaLivros} />
              <Line />
              <View style={styles.sectionTitle}>
                <Text style={styles.general}>Visão geral</Text>
                <Text style={styles.titleLivro}>{livro.liv_nome}</Text>
              </View>
              <View style={styles.smallineSquare}>
                <Text style={styles.available}>Disp.: </Text>
                <Text style={styles.bold}>{livro.disponivel}</Text>
              </View>
              <Text style={styles.description}>{livro.liv_desc}</Text>

              <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                  <Text style={styles.infoTitle}>Autor(a)</Text>
                  <Image source={Autor} style={styles.imgAutor} />
                  <Text style={styles.infoText}>{livro.aut_nome}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoTitle}>Editora</Text>
                  <Image source={Editora} style={styles.imgEditora} />
                  <Text style={styles.infoText}>{livro.edt_nome}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoTitle}>Gênero</Text>
                  <Image source={Genero} style={styles.imgGenero} />
                  <Text style={styles.infoText}>{livro.gen_nome}</Text>
                </View>
              </View>
            </View>

            <Pressable
              onPress={() => navigation.navigate("reservarlivro")}
              style={({ pressed }) =>
                pressed ? [styles.button, styles.btnPress] : styles.button
              }
            >
              <Text style={styles.buttonText}>Reservar livro</Text>
            </Pressable>
          </>
        ) : (
          <Text>Não há resultados para a requisição</Text>
        )}
      </View>
    </ScrollView>
  );
}
