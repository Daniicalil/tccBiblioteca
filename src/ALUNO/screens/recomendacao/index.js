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
  const navigation = useNavigation();

  // const [books] = useState([
  //   {
  //     liv_nome: "O diário de Anne Frank",
  //     aut_nome: "Anne Frank",
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
  //     course: "Téc. Recursos Humanos",
  //     disponivel: 4,
  //     liv_desc:
  //       "O Diário de Anne Frank é um livro que relata a história de uma jovem judia chamada Anne Frank, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.",
  //     edt_nome: "Grupo Editorial Record",
  //     generos: "Autobiográfico",
  //   },
  //   {
  //     liv_nome: "Dom Casmurro",
  //     aut_nome: "Machado de Assis",
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/dom casmurro.jpg"),
  //     course: "Téc. Contabilidade",
  //     disponivel: 6,
  //     liv_desc:
  //       "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.",
  //     edt_nome: "Grupo Companhia das Letras",
  //     generos: "Romance",
  //   },
  //   {
  //     liv_nome: "Romeu e Julieta",
  //     aut_nome: "William Shakespeare",
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/romeu e julieta.jpg"),
  //     course: "Téc. Design de Interiores",
  //     disponivel: 5,
  //     liv_desc:
  //       "Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, herdeira dos Capuleto, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura. Romeu e Julieta é a primeira das grandes tragédias de William Shakespeare, e esta nova tradução de José Francisco Botelho recria com maestria o ritmo ao mesmo tempo frenético e melancólico do texto shakespeariano. Contando também com um excelente ensaio introdutório do especialista Adrian Poole, esta edição traz nova vida a uma das mais emocionantes histórias de amor já contadas.",
  //     edt_nome: "Grupo Companhia das Letras",
  //     generos: "Romance",
  //   },
  //   {
  //     liv_nome: "1984",
  //     aut_nome: "George Orwell",
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/1984.jpg"),
  //     course: "Téc. Informática",
  //     disponivel: 3,
  //     liv_desc:
  //       "O trabalho de Winston, o herói de 1984, é reescrever artigos de jornais do passado, de modo que o registro histórico sempre apoie a ideologia do Partido. Grande parte do Ministério também destrói os documentos que não foram revisados, dessa forma não há como provar que o governo esteja mentindo. Winston é um trabalhador diligente e habilidoso, mas odeia secretamente o Partido e sonha com a rebelião contra o Grande Irmão.",
  //     edt_nome: "Grupo Companhia das Letras",
  //     generos: "Ficção científica",
  //   },
  //   {
  //     liv_nome: "Os Miseráveis",
  //     aut_nome: "Victor Hugo",
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
  //     course: "Téc. Administração",
  //     disponivel: 2,
  //     liv_desc:
  //       "Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.",
  //     edt_nome: "Grupo Companhia das Letras",
  //     generos: "Romance",
  //   },
  //   {
  //     liv_nome: "Orgulho e Preconceito",
  //     aut_nome: "Jane Austen",
  //     liv_foto_capa: require("../../../../assets/Capa_dos_livros/orgulho e preconceito.png"),
  //     course: "Téc. Farmácia",
  //     disponivel: 2,
  //     liv_desc:
  //       "Orgulho e Preconceito é um dos mais aclamados romances da escritora inglesa Jane Austen. Publicado em 1813, revela como era a sociedade da época, quando os relacionamentos se desenrolavam de maneira mais lenta e romântica, no ritmo das cartas levadas por mensageiros a cavalo. Nesse mundo, o sonho da Sra. Bennet era casar bem suas cinco filhas: Jane, Elizabeth, Mary, Kitty e Lydia. Entre as irmãs, destaca-se Elizabeth, a Lizzy, que se depara com um turbilhão de sentimentos diante do orgulho e preconceito que mascaram a realidade. Trata-se de um clássico que, mesmo após duzentos anos desde a sua primeira publicação, continua a encantar milhões de leitores ao redor do mundo.",
  //     edt_nome: "Paulus editora",
  //     generos: "Romance",
  //   },
  // ]);

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
