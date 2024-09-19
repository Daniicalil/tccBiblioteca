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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";

export default function BookList() {
  const navigation = useNavigation();
  // Estado para armazenar o status de ativação de cada livro
  const [bookStatus, setBookStatus] = useState({});

  // Lista de livros
  const books = [
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
      liv_nome: "O diário de Anne Frank",
      aut_nome: "Anne Frank",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/dom casmurro.jpg"),
      liv_nome: "Dom Casmurro",
      aut_nome: "Machado de Assis",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/romeu e julieta.jpg"),
      liv_nome: "Romeu e Julieta",
      aut_nome: "William Shakespeare",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/1984.jpg"),
      liv_nome: "1984",
      aut_nome: "George Orwell",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
      liv_nome: "Os Miseráveis",
      aut_nome: "Victor Hugo",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/orgulho e preconceito.png"),
      liv_nome: "Orgulho e Preconceito",
      aut_nome: "Jane Austen",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/heartstopper.jpg"),
      liv_nome: "Heartstopper",
      aut_nome: "Alice Oseman",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/procure nas cinzas.jpg"),
      liv_nome: "Procure nas cinzas",
      aut_nome: "Charlie Donlea",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/os sete maridos de evelyn hugo.jpg"),
      liv_nome: "Os Sete Maridos de Evelyn Hugo",
      aut_nome: "Taylor Jenkins Reid",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/a garota do lago.jpg"),
      liv_nome: "A garota do lago",
      aut_nome: "Charlie Donlea",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/verity.jpg"),
      liv_nome: "Verity",
      aut_nome: "Colleen Hoover",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/harry potter e a pedra filosofal.jpg"),
      liv_nome: "Harry Potter e a Pedra Filosofal",
      aut_nome: "J.K. Rowling",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/a revolução dos bichos.jpg"),
      liv_nome: "A revolução dos bichos",
      aut_nome: "George Orwell",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/deixada para trás.jpg"),
      liv_nome: "Deixada para Trás",
      aut_nome: "Charlie Donlea",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("liv_nome"); // Estado para controle de seleção

  // Função para inicializar o estado dos livros como desativados
  useEffect(() => {
    const initialStatus = {};
    books.forEach((books) => {
      initialStatus[books.liv_nome] = true; // Define todos como ativados
    });
    setBookStatus(initialStatus);
  }, []);

  // Função para alternar o estado de ativação/desativação de um livro
  const toggleBookStatus = (liv_nome) => {
    setBookStatus((prevStatus) => ({
      ...prevStatus,
      [liv_nome]: !prevStatus[liv_nome], // Alterna entre ativado e desativado
    }));
  };

  const sortBooksAlphabetically = (booksList) => {
    return booksList.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
  };

  useEffect(() => {
    // Se você quiser exibir a lista ordenada sem filtragem, você pode ordenar os livros aqui
    // setFilteredBooks(sortBooksAlphabetically(books));
  }, [books]);

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.item,
        { opacity: bookStatus[item.liv_nome] ? 1 : 0.5 }, // Aplica opacidade condicionalmente
      ]}
    >
      <Image source={item.liv_foto_capa} style={styles.image} />
      <Text style={styles.titleBook}>{item.liv_nome}</Text>
      <Text style={styles.author}>{item.aut_nome}</Text>

      {/* Componente Switch para ativar/desativar cada livro */}
      <View style={styles.switchContainer}>
        <Switch
          style={styles.toggle}
          value={!!bookStatus[item.liv_nome]} // !!recebe um valor booleano para definir se ele está ativado ou desativado. Converte undefined para false
          onValueChange={() => toggleBookStatus(item.liv_nome)}
          thumbColor={bookStatus[item.liv_nome] ? "#3F7263" : "#f4f3f4"} // Cor do botão
          trackColor={{ false: "#767577", true: "#ccc" }} // Cor da trilha
        />
      </View>
    </View>
  );

  return (
    <View style={styles.headerContainer}>
      {/* <StatusBar backgroundColor="#3F7263" translucent={false} /> */}
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
        <Text style={styles.paragraph}>Gerenciar livro existente</Text>
      </View>
      <BarraPesquisa />

      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedOption(value)}
          value={selectedOption}
        >
          <View style={styles.seletores}>
            <View style={styles.radioOption}>
              <RadioButton value="liv_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Livro</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="aut_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Autor</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="edt_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Editora</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="liv_cod" color="#FF735C" />
              <Text style={styles.radioLabel}>Código</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <FlatList
        style={Flatstyles.FlatList}
        data={sortBooksAlphabetically(books)} // Usar a lista de livros ordenada
        keyExtractor={(item) => item.liv_nome}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.bookListContainer}
      />

      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.btnPress] : styles.button
        }
      >
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </Pressable>
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
  },
});
