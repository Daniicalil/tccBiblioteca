import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

import {
  RetangGreen,
  RetangOrange,
  Funcionamento,
} from "../../../componentes/cabecalho/forms";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";
import Recomendacoes from "../../../componentes/recomendacoes";
import api from "../../../services/api";

const sortBooksAlphabetically = (livros) => {
  if (!Array.isArray(livros)) return [];
  return livros.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
};

const ListaDeLivros = ({ livros }) => {
  const sortedBooks = sortBooksAlphabetically(livros);
  return (
    <>
      {sortedBooks.length > 0 ? (
        <FlatList
          style={Flatstyles.FlatList}
          data={sortedBooks} // Usar a lista de livros ordenada
          renderItem={renderItem}
          keyExtractor={(item) => item.liv_cod.toString()} // Use index as keyExtractor
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

export default function BookList() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

  const navigation = useNavigation();

  const [books, setBooks] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState('liv_nome');
  const [livNome, setLivNome] = useState('');

  function atLivNome(nome) {
    setLivNome(nome); //Atualiza o estado livNome com o nome do livro que está sendo pesquisado.
  }

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = { [selectedSearchOption]: livNome };
    try {
      const response = await api.post("/rec_listar", dados);
      console.log(response.data.dados);
      setBooks(response.data.dados);
    } catch (error) {
      if (error.response) {
        Alert.alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          navigation.navigate("infolivrorecomendacao", { livros: item.liv_cod })
        }
      >
        <Text style={styles.course}>{item.cur_nome}</Text>
        <Image source={{ uri: item.liv_foto_capa }} style={styles.image} />
        <Text style={styles.titleBook}>{item.liv_nome}</Text>
        <Text style={styles.author}>{item.aut_nome}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="#3F7263" transLucent={false} />
      <RetangGreen />
      <RetangOrange />
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
              { value: "liv_nome", label: "Livro" },
              { value: "aut_nome", label: "Autor" },
              { value: "edt_nome", label: "Editora" },
              { value: "gen_nome", label: "Gênero" },
              { value: "curso", label: "Curso" },
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

      <Funcionamento />
      <Text style={styles.paragraph}>Recomendações dos professores</Text>
      <Recomendacoes />
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
    backgroundColor: "#FFF",
  },
});
