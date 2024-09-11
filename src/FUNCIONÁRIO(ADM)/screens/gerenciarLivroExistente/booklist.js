import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, FlatList, Image, Switch } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from '../../../ALUNO/componentes/forms';
import styles from './styles';

export default function BookList() {
  const navigation = useNavigation();
  // Estado para armazenar o status de ativação de cada livro
  const [bookStatus, setBookStatus] = useState({});

  // Lista de livros
  const livros = [
    {
      image: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
      title: "O diário de Anne Frank",
      author: "Anne Frank",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/dom casmurro.jpg"),
      title: "Dom Casmurro",
      author: "Machado de Assis",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/romeu e julieta.jpg"),
      title: "Romeu e Julieta",
      author: "William Shakespeare",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/1984.jpg"),
      title: "1984",
      author: "George Orwell",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
      title: "Os Miseráveis",
      author: "Victor Hugo",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/orgulho e preconceito.png"),
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/heartstopper.jpg"),
      title: "Heartstopper",
      author: "Alice Oseman",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/procure nas cinzas.jpg"),
      title: "Procure nas cinzas",
      author: "Charlie Donlea",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/os sete maridos de evelyn hugo.jpg"),
      title: "Os Sete Maridos de Evelyn Hugo",
      author: "Taylor Jenkins Reid",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/a garota do lago.jpg"),
      title: "A garota do lago",
      author: "Charlie Donlea",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/verity.jpg"),
      title: "Verity",
      author: "Colleen Hoover",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/harry potter e a pedra filosofal.jpg"),
      title: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/a revolução dos bichos.jpg"),
      title: "A revolução dos bichos",
      author: "George Orwell",
    },
    {
      image: require("../../../../assets/Capa_dos_livros/deixada para trás.jpg"),
      title: "Deixada para Trás",
      author: "Charlie Donlea",
    },
  ];

  // Função para inicializar o estado dos livros como desativados
  useEffect(() => {
    const initialStatus = {};
    livros.forEach((livro) => {
      initialStatus[livro.title] = true; // Define todos como inativos
    });
    setBookStatus(initialStatus);
  }, []);

  // Função para alternar o estado de ativação/desativação de um livro
  const toggleBookStatus = (title) => {
    setBookStatus((prevStatus) => ({
      ...prevStatus,
      [title]: !prevStatus[title], // Alterna entre ativado e desativado
    }));
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.item,
        { opacity: bookStatus[item.title] ? 1 : 0.5 }, // Aplica opacidade condicionalmente
      ]}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titleBook}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>

      {/* Componente Switch para ativar/desativar cada livro */}
      <Switch
        value={!!bookStatus[item.title]} // Converte undefined para false
        onValueChange={() => toggleBookStatus(item.title)}
        thumbColor={bookStatus[item.title] ? "#ff4081"/*rosa*/ : "#f4f3f4"/*branco*/} // Cor do botão
        trackColor={{ false: "#767577" /*cinza*/, true: "#3F7263"/*verde*/ }} // Cor da trilha
      />
    </View>
  );

  return (
    <View style={styles.containerAny}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' translucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
          <Text style={styles.paragraph}>Gerenciar livro existente</Text>
        </View>

        <View style={styles.bookListContainer}>
          <FlatList
            data={livros}
            keyExtractor={(item) => item.title}
            renderItem={renderItem}
            numColumns={3}
          />
        </View>

        <View style={styles.viewEditar}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => pressed ? [styles.button, styles.btnPress] : styles.button}
          >
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}