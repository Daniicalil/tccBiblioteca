import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
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

export default function BookList() {
  const navigation = useNavigation();

  const [books] = useState([
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
      disponivel: 4,
      liv_nome: "O diário de Anne Frank",
      liv_desc:
        "O Diário de Anne Frank é um livro que relata a história de uma jovem judia chamada Anne Frank, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.",
      aut_nome: "Anne Frank",
      edt_nome: "Grupo Editorial Record",
      generos: "Autobiográfico",
      course: "Téc. Recursos Humanos",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/dom casmurro.jpg"),
      disponivel: 6,
      liv_nome: "Dom Casmurro",
      liv_desc:
        "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.",
      aut_nome: "Machado de Assis",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
      course: "Téc. Contabilidade",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/romeu e julieta.jpg"),
      disponivel: 5,
      liv_nome: "Romeu e Julieta",
      liv_desc:
        "Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, herdeira dos Capuleto, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura. Romeu e Julieta é a primeira das grandes tragédias de William Shakespeare, e esta nova tradução de José Francisco Botelho recria com maestria o ritmo ao mesmo tempo frenético e melancólico do texto shakespeariano. Contando também com um excelente ensaio introdutório do especialista Adrian Poole, esta edição traz nova vida a uma das mais emocionantes histórias de amor já contadas.",
      aut_nome: "William Shakespeare",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
      course: "Téc. Design de Interiores",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/1984.jpg"),
      disponivel: 3,
      liv_nome: "1984",
      liv_desc:
        "O trabalho de Winston, o herói de 1984, é reescrever artigos de jornais do passado, de modo que o registro histórico sempre apoie a ideologia do Partido. Grande parte do Ministério também destrói os documentos que não foram revisados, dessa forma não há como provar que o governo esteja mentindo. Winston é um trabalhador diligente e habilidoso, mas odeia secretamente o Partido e sonha com a rebelião contra o Grande Irmão.",
      aut_nome: "George Orwell",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Ficção científica",
      course: "Téc. Informática",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
      disponivel: 2,
      liv_nome: "Os Miseráveis",
      liv_desc:
        "Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.",
      aut_nome: "Victor Hugo",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
      course: "Téc. Administração",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/orgulho e preconceito.png"),
      disponivel: 2,
      liv_nome: "Orgulho e Preconceito",
      liv_desc:
        "Orgulho e Preconceito é um dos mais aclamados romances da escritora inglesa Jane Austen. Publicado em 1813, revela como era a sociedade da época, quando os relacionamentos se desenrolavam de maneira mais lenta e romântica, no ritmo das cartas levadas por mensageiros a cavalo. Nesse mundo, o sonho da Sra. Bennet era casar bem suas cinco filhas: Jane, Elizabeth, Mary, Kitty e Lydia. Entre as irmãs, destaca-se Elizabeth, a Lizzy, que se depara com um turbilhão de sentimentos diante do orgulho e preconceito que mascaram a realidade. Trata-se de um clássico que, mesmo após duzentos anos desde a sua primeira publicação, continua a encantar milhões de leitores ao redor do mundo.",
      aut_nome: "Jane Austen",
      edt_nome: "Paulus editora",
      generos: "Romance",
      course: "Téc. Farmácia",
    },
  ]);

  const [selectedOption, setSelectedOption] = useState("liv_nome"); // Estado para controle de seleção

  const sortBooksAlphabetically = (booksList) => {
    return booksList.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
  };

  // Ordena a lista de livros
  const sortedBooks = sortBooksAlphabetically(books);

  // Mantém a lista de livros filtrados como a lista completa
  const [filteredBooks] = useState(sortedBooks);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          navigation.navigate("infolivrorecomendacao", { book: item })
        }
      >
        <Text style={styles.course}>{item.course}</Text>
        <Image source={item.liv_foto_capa} style={styles.image} />
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
      <BarraPesquisa />

      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedOption(value)}
          value={selectedOption}
        >
          <View style={styles.seletores}>
            <View style={styles.radioOption}>
              <RadioButton value="liv_nome" color="#FF735C" uncheckedColor="#CCC"/>
              <Text style={styles.radioLabel}>Livro</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="aut_nome" color="#FF735C" uncheckedColor="#CCC"/>
              <Text style={styles.radioLabel}>Autor</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="edt_nome" color="#FF735C" uncheckedColor="#CCC"/>
              <Text style={styles.radioLabel}>Editora</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="liv_cod" color="#FF735C" uncheckedColor="#CCC"/>
              <Text style={styles.radioLabel}>Código</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="course" color="#FF735C" uncheckedColor="#CCC"/>
              <Text style={styles.radioLabel}>Curso</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <Funcionamento />
      <Text style={styles.paragraph}>Recomendações dos professores</Text>
      <FlatList
        style={Flatstyles.FlatList}
        data={filteredBooks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use index as keyExtractor
        numColumns={3}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
    backgroundColor: "#FFF",
  },
});
