import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API_URL, API_PORT } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import api from "../../services/api";

export default function Recomendacoes() {
  const apiUrl = API_URL; // URL da API
  const apiPorta = API_PORT; // Porta da API

  const [books, setBooks] = useState([
    {
      liv_cod: 1,
      liv_nome: "O Senhor dos Anéis",
      aut_nome: "J.R.R. Tolkien",
      liv_foto_capa: "https://via.placeholder.com/150",
      cur_nome: "Literatura",
    },
    {
      liv_cod: 2,
      liv_nome: "1984",
      aut_nome: "George Orwell",
      liv_foto_capa: "https://via.placeholder.com/150",
      cur_nome: "Filosofia",
    },
    {
      liv_cod: 3,
      liv_nome: "Dom Quixote",
      aut_nome: "Miguel de Cervantes",
      liv_foto_capa: "https://via.placeholder.com/150",
      cur_nome: "História",
    },
  ]);
  const [livNome, setlivNome] = useState("");
  const navigation = useNavigation();

  const sortedBooks = books.sort((a, b) =>
    a.liv_nome.localeCompare(b.liv_nome)
  );

  function atLivNome(nome) {
    setlivNome(nome);
  }

  //   useEffect(() => {
  //   const checkUser = async () => {
  //     const user = JSON.parse(await AsyncStorage.getItem("user"));
  //     if (!user) {
  //       navigation.navigate("login")
  //     } else {
  //       listaLivros(user.usu_cod);
  //     }
  //   };
  //   checkUser();
  // }, []);

  async function listaLivros(usuario, books) {
    const sortedBooks = sortBooksAlphabetically(books);
    // const dados = { usu_cod: usuario };

    try {
      const response = await api.post("/rec_listar", dados);
      setBooks(response.data.dados);
    } catch (error) {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        Alert.alert("Erro no front-end\n" + error);
      }
    }
  }

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
    <>
      {sortedBooks.length > 0 ? (
        <FlatList
          style={Flatstyles.FlatList}
          data={sortedBooks}
          renderItem={renderBookItem}
          keyExtractor={(item) => item.liv_cod.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <Text style={styles.aviso}>Não há resultados para a requisição</Text>
      )}
    </>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
    backgroundColor: "#FFF",
  },
});
