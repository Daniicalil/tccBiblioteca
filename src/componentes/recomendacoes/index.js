import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import api from "../../services/api";

export default function Recomendacoes() {
  // Configuração do URL da API
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

  const [books, setBooks] = useState([]);
  const [livNome, setlivNome] = useState("");
  const navigation = useNavigation();

  // Ordena os livros pelo título em ordem alfabética
  const sortedBooks = books.sort((a, b) =>
    a.liv_nome.localeCompare(b.liv_nome)
  );

  function atLivNome(nome) {
    setlivNome(nome);
  }

//   useEffect(() => {
//     const checkUser = async () => {
//       const user = JSON.parse(await AsyncStorage.getItem("user"));
//       if (!user) {
//         // navigation.navigate("login");
//       } else {
//         listaLivros(user.cur_cod);
//       }
//     };
//     checkUser();
//   }, []);

  // Função para buscar a lista de livros a partir do curso
  async function listaLivros(curso) {
    const dados = { cur_cod: curso };

    try {
      const response = await api.post("/rec_listar", dados);
      setBooks(response.data.dados);
    } catch (error) {
      if (error.response) {
        Alert.alert(
          "Erro",
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        Alert.alert("Erro", "Erro no front-end\n" + error.message);
      }
    }
  }

  // Função para renderizar cada item do livro
  const renderBookItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate("infoLivroRecomendacao", { liv_cod: item.liv_cod })
      }
    >
      <Text style={styles.bookCourse}>{item.cur_nome}</Text>
      <Image
        source={{ uri: `${apiUrl}:${apiPorta}${item.liv_foto_capa}` }}
        style={styles.image}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.titleBook}>{item.liv_nome}</Text>
        <Text style={styles.author}>{item.aut_nome}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.main}>
      <View style={styles.bookSection}>
      </View>
      <View style={styles.container}>
        {sortedBooks.length > 0 ? (
          <FlatList
            data={sortedBooks}
            renderItem={renderBookItem}
            keyExtractor={(item) => item.liv_nome}
          />
        ) : (
          <Text style={styles.aviso}>Não há resultados para a requisição</Text>
        )}
      </View>
    </View>
  );
}
