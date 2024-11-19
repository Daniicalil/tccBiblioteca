import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { API_URL, API_PORT } from "@env";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api";
import styles from "./styles";

export default function Biblioteca() {
  const apiUrl = API_URL; // URL da API
  const apiPorta = API_PORT; // Porta da API
  const navigation = useNavigation();

  const [books, setBooks] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("liv_nome");
  const [livNome, setlivNome] = useState("");
  function atLivNome(nome) {
    setlivNome(nome);
  }

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = { [selectedSearchOption]: livNome };
    try {
      const response = await api.post("/livros", dados);
      console.log(response.data.dados);
      setLivros(response.data.dados);
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

  const sortBooksAlphabetically = (livros) => {
    if (!Array.isArray(livros)) return [];
    return livros.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
  };

  useEffect(() => {
    const sortedBooks = sortBooksAlphabetically(books);
    setBooks(sortedBooks);
  }, [books]);

  return (
    <ScrollView style={styles.headerContainer}>
      <RetangGreen />
      <RetangOrange />
      <View style={styles.titleContainer}>
        <FontAwesome
          name="angle-left"
          size={30}
          color="black"
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.paragraph}>Biblioteca</Text>
      </View>
      <BarraPesquisa
        livNome={livNome}
        atLivNome={atLivNome}
        listaLivros={listaLivros}
      />

      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={setSelectedSearchOption}
          value={selectedSearchOption}
        >
          <View style={styles.seletores}>
            {[
              { label: "Livro", value: "liv_nome" },
              { label: "Autor", value: "aut_nome" },
              { label: "Editora", value: "edt_nome" },
              { label: "Código", value: "liv_cod" },
            ].map((option) => (
              <View key={option.value} style={styles.radioOption}>
                <RadioButton
                  value={option.value}
                  color="#FF735C"
                  uncheckedColor="#CCC"
                  checked={selectedSearchOption === option.value}
                />
                <Text style={styles.radioLabel}>{option.label}</Text>
              </View>
            ))}
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.bookList}>
        {books.length > 0 ? (
          books.map((livro) => (
            <View style={styles.item}>
              <Pressable
                onPress={() =>
                  navigation.navigate("infoLivroBiblioteca", {
                    livroId: livro.liv_cod,
                  })
                }
              >
                <Image
                  source={{
                    uri: `${apiUrl}:${apiPorta}${livro.liv_foto_capa}`,
                  }}
                  style={styles.image}
                />
                <Text style={styles.titleBook}>{livro.liv_nome}</Text>
                <Text style={styles.author}>{livro.aut_nome}</Text>
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>
            Não há resultados para a requisição.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
  },
});
