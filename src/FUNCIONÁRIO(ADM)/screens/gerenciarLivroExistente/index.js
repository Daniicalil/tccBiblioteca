import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { RetangGreen, RetangOrange } from '../../../ALUNO/componentes/forms';

import styles from './styles';

export default function GerenciarLivroExistente({ navigation }) {
  const [isToggleOn, setIsToggleOn] = useState(true); // Estado para controlar o botão toggle

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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.titleBook}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
          <Text style={styles.paragraph}>Gerenciar livro existente</Text>
        </View>

        <View style={styles.bookListContainer}>
          <FlatList
            data={livros}
            keyExtractor={(item) => item.value}
            renderItem={( renderItem )) => (
              <View style={[styles.bookItem, { opacity: isToggleOn ? 1 : 0.5 }]}>
                <Text style={styles.bookText}>{item.label}</Text>
              </View>
            )}
          />
        </View>

        <Pressable
          onPress={() => setIsToggleOn(!isToggleOn)}
          style={[styles.toggleButton, isToggleOn ? styles.toggleOn : styles.toggleOff]}
        >
          <Text style={styles.toggleButtonText}>{isToggleOn ? 'Ativado' : 'Desativado'}</Text>
        </Pressable>

        <View style={styles.viewEditar}>
          <Pressable
            onPress={handleAddLivroExist}
            style={({ pressed }) => pressed ? [styles.button, styles.btnPress] : styles.button}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}