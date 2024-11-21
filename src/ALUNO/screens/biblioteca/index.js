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
import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api";
import styles from "./styles";

const sortBooksAlphabetically = (books) => {
  if (!Array.isArray(books)) return [];
  return books.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
};

const ListaDeLivros = ({ books }) => {
  const navigation = useNavigation();
  const sortedBooks = sortBooksAlphabetically(books);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          navigation.navigate("infoLivroBiblioteca", {
            books: item.liv_cod,
          })
        }
      >
        <Image
          source={{
            uri: `${apiUrl}:${apiPorta}${item.liv_foto_capa}`,
          }}
          style={styles.image}
        />
        <Text style={styles.titleBook}>{item.liv_nome}</Text>
        <Text style={styles.author}>{item.aut_nome}</Text>
      </Pressable>
    </View>
  );

  return (
    <>
      {sortedBooks.length > 0 ? (
        <FlatList
          style={Flatstyles.FlatList}
          data={sortedBooks}
          renderItem={renderItem}
          keyExtractor={(item) => item.liv_cod.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <Text style={styles.noResultsText}>
          Não há resultados para a requisição
        </Text>
      )}
    </>
  );
};

export default function Biblioteca({ navigation }) {
  const [books, setBooks] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("liv_nome");
  const [livNome, setlivNome] = useState("");
  function atLivNome(nome) {
    setlivNome(nome);
  }

  useEffect(() => {
    listaLivros();
  }, []);

  const listaLivros = async () => {
    await api.post("/livros")
    .then((response) => {
      console.log(response.data.livros);
      setBooks(response.data.livros);
    }).catch((error) => {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    });
  }

  useEffect(() => {
    listaLivros();
  }, []);

  return (
    <View style={styles.headerContainer}>
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
      <ListaDeLivros books={books} />
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
    backgroundColor: "#FFF",
  },
});
