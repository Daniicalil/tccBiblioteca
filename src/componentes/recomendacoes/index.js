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
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import api from "../../services/api";

export default function Recomendacoes() {

  const [books, setBooks] = useState([]);
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

  const listaLivros = async () => {
    const sortedBooks = sortBooksAlphabetically(books);
    await api.post("/rec_listar")
    .then((response) => {
      setBooks(response.data.books);
    }).catch((error) => {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        Alert.alert("Erro no front-end\n" + error);
      }
    });
  };

useEffect(() => {
  listaLivros();
}, []);

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
      {books.length > 0 ? (
        <FlatList
          style={Flatstyles.FlatList}
          data={books}
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
