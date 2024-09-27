import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Autor from "../../../../assets/imagens_telas/autora.png";
import Editora from "../../../../assets/imagens_telas/editora.png";
import Genero from "../../../../assets/imagens_telas/genero.png";
import styles from "./styles";

const Line = () => {
  return <View style={styles.line} />;
};

export default function EditarInfoLivro({ route }) {
  const navigation = useNavigation();
  const { book } = route.params || {};
  const [livro, setLivro] = React.useState({
    nome: book.liv_nome || "",
    descricao: book.liv_desc || "",
    autor: book.aut_nome || "",
    editora: book.edt_nome || "",
    genero: book.generos || "",
    disponivel: book.disponivel || "",
  });

  const handleSave = () => {
    // Lógica para salvar as alterações do livro
    console.log("Informações atualizadas:", livro);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor="#3F7263" />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
          <FontAwesome
            name="angle-left"
            size={30}
            color="black"
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.paragraph}>Editar informações do livro</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.imageContainer}>
            <Image source={book.liv_foto_capa} style={styles.capaLivros} />
            <Button
              title="Escolher Imagem"
              onPress={() => {
                /* lógica de upload */
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Visão geral</Text>
            <TextInput
              style={styles.textInput}
              value={livro.nome}
              onChangeText={(text) => setLivro({ ...livro, nome: text })}
              placeholder="Livro"
            />
          </View>

          <View style={styles.infoSmall}>
            <Text style={styles.available}>Disponível: </Text>
            <TextInput
              style={styles.textInputSmall}
              value={livro.disponivel}
              onChangeText={(text) =>
                setLivro({ ...livro, disponivel: number })
              }
            />
          </View>

          <TextInput
            style={styles.descriptionInput}
            value={livro.descricao}
            onChangeText={(text) => setLivro({ ...livro, descricao: text })}
            placeholder="Resumo"
            multiline
          />

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Autor(a)</Text>
              <Image source={Autor} style={styles.imgAutor} />
              <TextInput
                style={styles.textInputSmall}
                value={livro.autor}
                onChangeText={(text) => setLivro({ ...livro, autor: text })}
                placeholder="Autor"
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Editora</Text>
              <Image source={Editora} style={styles.imgEditora} />
              <TextInput
                style={styles.textInputSmall}
                value={livro.editora}
                onChangeText={(text) => setLivro({ ...livro, editora: text })}
                placeholder="Editora"
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Gênero</Text>
              <Image source={Genero} style={styles.imgGenero} />
              <TextInput
                style={styles.textInputSmall}
                value={livro.genero}
                onChangeText={(text) => setLivro({ ...livro, genero: text })}
                placeholder="Gênero"
              />
            </View>
          </View>
        </View>

        <Pressable
          onPress={handleSave}
          style={({ pressed }) =>
            pressed ? [styles.button, styles.btnPress] : styles.button
          }
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
