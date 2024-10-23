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
  // Estado para armazenar o status de ativação de cada livro
 
  // Lista de livros
  // const books = [
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
  //     liv_nome: "O diário de Anne Frank",
  //     aut_nome: "Anne Frank",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/dom casmurro.jpg"),
  //     liv_nome: "Dom Casmurro",
  //     aut_nome: "Machado de Assis",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/romeu e julieta.jpg"),
  //     liv_nome: "Romeu e Julieta",
  //     aut_nome: "William Shakespeare",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/1984.jpg"),
  //     liv_nome: "1984",
  //     aut_nome: "George Orwell",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
  //     liv_nome: "Os Miseráveis",
  //     aut_nome: "Victor Hugo",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/orgulho e preconceito.png"),
  //     liv_nome: "Orgulho e Preconceito",
  //     aut_nome: "Jane Austen",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/heartstopper.jpg"),
  //     liv_nome: "Heartstopper",
  //     aut_nome: "Alice Oseman",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/procure nas cinzas.jpg"),
  //     liv_nome: "Procure nas cinzas",
  //     aut_nome: "Charlie Donlea",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/os sete maridos de evelyn hugo.jpg"),
  //     liv_nome: "Os Sete Maridos de Evelyn Hugo",
  //     aut_nome: "Taylor Jenkins Reid",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/a garota do lago.jpg"),
  //     liv_nome: "A garota do lago",
  //     aut_nome: "Charlie Donlea",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/verity.jpg"),
  //     liv_nome: "Verity",
  //     aut_nome: "Colleen Hoover",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/harry potter e a pedra filosofal.jpg"),
  //     liv_nome: "Harry Potter e a Pedra Filosofal",
  //     aut_nome: "J.K. Rowling",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/a revolução dos bichos.jpg"),
  //     liv_nome: "A revolução dos bichos",
  //     aut_nome: "George Orwell",
  //   },
  //   {
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/deixada para trás.jpg"),
  //     liv_nome: "Deixada para Trás",
  //     aut_nome: "Charlie Donlea",
  //   },
  // ];

  const [livros, setLivros] = useState([]);
  const [bookStatus, setBookStatus] = useState({});
  const [selectedSearchOption, setSelectedSearchOption] = useState("liv_nome");

  const [livNome, setLivNome] = useState("");

  useEffect(() => {
    listaLivros();
  }, []);

  async function listaLivros() {
    const dados = { [selectedSearchOption]: livNome };
    try {
      const response = await api.post("/liv_gerenciar", dados);
      console.log(response.data.dados);
      setLivros(response.data.dados);
    } catch (error) {
      Alert.alert(
        "Erro",
        error.response ? error.response.data.mensagem : "Erro no front-end"
      );
    }
  }

  const toggleBookStatus = async (liv_cod) => {
    const newStatus = !bookStatus[liv_cod];
  setBookStatus((prevStatus) => ({ ...prevStatus, [liv_cod]: newStatus }));

    try {
      const livro = livros.find((b) => b.liv_cod === liv_cod);
      const payload = {
        liv_cod: livro.liv_cod,
        liv_ativo: newStatus ? 1 : 0,
      };
      const response = await api.patch("/liv_inativar", payload);

      if (response.data.sucesso) {
        console.log(`Status do livro ${liv_cod} atualizado com sucesso.`);
      } else {
        throw new Error("Erro ao atualizar o status do livro.");
      }
    } catch (error) {
      console.error("Erro ao atualizar o status do livro:", error);
      setBookStatus((prevStatus) => ({ ...prevStatus, [liv_cod]: !newStatus }));
      Alert.alert("Erro ao atualizar o status do livro. Tente novamente.");
    }
  };

  const sortBooksAlphabetically = (livros) => {
    if (!Array.isArray(livros)) return [];
    return livros.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
  }; 

  useEffect(() => {
    const sortedBooks = sortBooksAlphabetically(livros);
    setLivros(sortedBooks);
  }, [livros]);

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.item,
        { opacity: bookStatus[item.liv_cod] ? 1 : 0.5 }, // Aplica opacidade condicionalmente
      ]}
    >
      <Image source={item.liv_foto_capa} style={styles.image} />
      <Text style={styles.titleBook}>{item.liv_nome}</Text>
      <Text style={styles.author}>{item.aut_nome}</Text>

      {/* Componente Switch para ativar/desativar cada livro */}
      <View style={styles.switchContainer}>
        <Switch
          style={styles.toggle}
          value={!!bookStatus[item.liv_cod]} // !!recebe um valor booleano para definir se ele está ativado ou desativado. Converte undefined para false
          onValueChange={() => toggleBookStatus(item.liv_cod)}
          thumbColor={bookStatus[item.liv_cod] ? "#3F7263" : "#f4f3f4"} // Cor do botão
          trackColor={{ false: "#767577", true: "#ccc" }} // Cor da trilha
        />
      </View>
    </View> 
  );

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
            contentContainerStyle={styles.bookListContainer}
          />
        ) : (
          <Text style={styles.noResultsText}>
            Não há resultados para a requisição
          </Text>
        )}
      </>
    );
  };

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
          onPress={() => navigation.navigate("addBiblioteca")}
        />
        <Text style={styles.paragraph}>Gerenciar livro existente</Text>
      </View>
      <BarraPesquisa
        livNome={livNome}
        setLivNome={setLivNome}
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

      <ListaDeLivros livros={livros} />

      {/* <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.btnPress] : styles.button
        }
      >
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </Pressable> */}
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
  },
});
