import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { RadioButton } from "react-native-paper";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  Switch,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api";
import styles from "./styles";

export default function GerenciarLivroExistente() {
  const navigation = useNavigation();

  const [books, setBooks] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("liv_nome");
  const [livNome, setLivNome] = useState("");

  function atLivNome(nome) {
    setLivNome(nome);
  }

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = { [selectedSearchOption]: livNome };
    try {
      const response = await api.post("/liv_gerenciar", dados);
      const updatedBooks = response.data.dados.map((book) => ({
        ...book,
        liv_ativo: book.liv_ativo,
      }));
      setBooks(updatedBooks);
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

  const toggleBookStatus = async (liv_cod) => {
    try {
      const updatedBooks = books.map((book) =>
        book.liv_cod === liv_cod
          ? { ...book, liv_ativo: book.liv_ativo === 1 ? 0 : 1 }
          : book
      );
      setBooks(updatedBooks);

      const bookToUpdate = updatedBooks.find((b) => b.liv_cod === liv_cod);

      const response = await api.patch("/liv_inativar", {
        liv_cod: bookToUpdate.liv_cod,
        liv_ativo: bookToUpdate.liv_ativo,
      });

      if (!response.data.sucesso) {
        throw new Error("Erro ao atualizar status");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao atualizar o status: " + error.message);
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.liv_cod === liv_cod
            ? { ...book, liv_ativo: book.liv_ativo === 1 ? 0 : 1 }
            : book
        )
      );
    }
  };

  const sortBooksAlphabetically = (books) => {
    if (!Array.isArray(books)) return [];
    return books.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
  };

  useEffect(() => {
    const sortedBooks = sortBooksAlphabetically(books);
    setBooks(sortedBooks);
  }, [books]);

  return (
    <ScrollView style={styles.headerContainer}>
      {/* <StatusBar backgroundColor="#3F7263" translucent={false} /> */}
      <RetangGreen />
      <RetangOrange />
      <View style={styles.titleContainer}>
        <FontAwesome
          name="angle-left"
          size={30}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate("addBiblioteca")}
        />
        <Text style={styles.paragraph}>Gerenciar livro existente</Text>
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
              { label: "Gênero", value: "gen_nome" },
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
            <View
              key={livro.liv_cod}
              style={[
                styles.bookItem,
                livro.liv_ativo === 1 ? styles.ativo : styles.inativo,
              ]}
            >
              <Image
                source={{ uri: `${apiUrl}:${apiPorta}${livro.liv_foto_capa}` }}
                style={styles.image}
              />
              <View style={styles.bookInfo}>
                <Text style={styles.titleBook}>{livro.liv_nome}</Text>
                <Text style={styles.author}>{livro.aut_nome}</Text>
              </View>
              <View style={styles.toggleContainer}>
                <Switch
                  value={livro.liv_ativo === 1}
                  onValueChange={() => toggleBookStatus(livro.liv_cod)}
                />
              </View>
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
