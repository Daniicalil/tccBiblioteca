import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { API_URL, API_PORT } from "@env";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";

import api from "../../../services/api";
import styles from "./styles";

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

export default function Recomendacao() {
  const apiUrl = API_URL; // URL da API
  const apiPorta = API_PORT; // Porta da API
  const navigation = useNavigation();

  const [livros, setLivros] = useState([]);
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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          navigation.navigate("infolivrorecomendacao", { livros: item.liv_cod })
        }
      >
        <Text style={styles.course}>{item.course}</Text>
        <Image source={{ uri: item.liv_foto_capa }} style={styles.image} />
        <Text style={styles.titleBook}>{item.liv_nome}</Text>
        <Text style={styles.author}>{item.aut_nome}</Text>
      </Pressable>
    </View>
  );

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
        <Text style={styles.paragraph}>Recomendações dos professores</Text>
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
              { label: "Curso", value: "cur_nome" },
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
      <ListaDeLivros livros={listaLivros} />
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
    backgroundColor: "#FFF",
  },
});
