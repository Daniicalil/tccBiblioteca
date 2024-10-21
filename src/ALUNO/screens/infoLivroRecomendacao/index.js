import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { useNavigation } from "@react-navigation/native";

import Autor from "../../../../assets/imagens_telas/autora.png";
import Editora from "../../../../assets/imagens_telas/editora.png";
import Genero from "../../../../assets/imagens_telas/genero.png";

import api from "../../../services/api";
import styles from "./styles";

const Line = () => <View style={styles.line} />;

export default function InfoLivroRecomendacao({ route, codLivroRec }) {
  const navigation = useNavigation();

  const [modulo1, setModulo1] = useState(false);
  const [modulo2, setModulo2] = useState(false);
  const [modulo3, setModulo3] = useState(false);
  const [modulo4, setModulo4] = useState(false);

  const [livroRec, setLivroRec] = useState({
    rcm_cod: "",
    cur_nome: "",
    cur_cod: "",
    liv_cod: "",
    liv_foto_capa: "",
    liv_nome: "",
    liv_desc: "",
    aut_nome: "",
    gen_nome: "",
    generos: "",
    edt_nome: "",
    disponivel: "",
  });

  useEffect(() => {
    handleCarregaLivro();

    // Função para carregar os dados do livro
    async function handleCarregaLivro() {
      const dadosApi = {
        liv_cod: codLivroRec,
      };
      // console.log("Dados enviados para API:", dadosApi);

      try {
        const response = await api.post("/rec_listar", dadosApi);
        console.log("Resposta da API:", response);
        const confirmaAcesso = response.data.sucesso;
        if (confirmaAcesso) {
          const livroApi = response.data.dados[0];

          setModulo1(livroApi.rcm_mod1 === 1);
          setModulo2(livroApi.rcm_mod2 === 1);
          setModulo3(livroApi.rcm_mod3 === 1);
          setModulo4(livroApi.rcm_mod4 === 1);

          if (response.data.dados.length > 0) {
            setLivroRec(livroApi);
          }
        } else {
          Alert.alert("Nenhum resultado encontrado.");
        }
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
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        {/* <StatusBar backgroundColor='#3F7263' translucent={false} /> */}
        <RetangGreen />
        <RetangOrange />
        <View style={styles.title}>
          <FontAwesome
            name="angle-left"
            size={30}
            color="black"
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.paragraph}>Informações do livro</Text>
        </View>

        {livroRec.liv_cod ? (
          <>
            <View style={styles.lineSquare}>
              <Image
                source={livroRec.liv_foto_capa}
                style={styles.capaLivros}
              />
              <Line />
              <View style={styles.sectionTitle}>
                <Text style={styles.general}>Visão geral</Text>
                <Text style={styles.titleLivro}>{livroRec.liv_nome}</Text>
              </View>
              <View style={styles.smallineSquare}>
                <Text style={styles.available}>Disp.: </Text>
                <Text style={styles.bold}>{livroRec.disponivel}</Text>
              </View>
              <Text style={styles.description}>{livroRec.liv_desc}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                  <Text style={styles.infoTitle}>Autor(a)</Text>
                  <Image source={Autor} style={styles.imgAutor} />
                  <Text style={styles.infoText}>{livroRec.aut_nome}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoTitle}>Editora</Text>
                  <Image source={Editora} style={styles.imgEditora} />
                  <Text style={styles.infoText}>{livroRec.edt_nome}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoTitle}>Gênero</Text>
                  <Image source={Genero} style={styles.imgGenero} />
                  <Text style={styles.infoText}>{livroRec.generos}</Text>
                </View>
              </View>

              <Line />

              <Text style={styles.recommendationMod}>Recomendado para:</Text>
              <Text style={styles.recommendation}>{livroRec.cur_nome}</Text>

              <View style={styles.RadioButtonQuad}>
                <SquareRadioButton
                  label="1º Mod. "
                  name="modulo1"
                  value="1º modulo"
                  checked={modulo1}
                  onChange={() => setModulo1(!modulo1)}
                  disabled={true}
                />
                <SquareRadioButton
                  label="2º Mod."
                  name="modulo2"
                  value="2º modulo"
                  checked={modulo2}
                  onChange={() => setModulo2(!modulo2)}
                  disabled={true}
                />
                <SquareRadioButton
                  label="3º Mod."
                  name="modulo3"
                  value="3º modulo"
                  checked={modulo3}
                  onChange={() => setModulo3(!modulo3)}
                  disabled={true}
                />
                <SquareRadioButton
                  label="4º Mod."
                  name="modulo4"
                  value="4º modulo"
                  checked={modulo4}
                  onChange={() => setModulo4(!modulo4)}
                  disabled={true}
                />
              </View>
            </View>

            <Pressable
              onPress={() => navigation.navigate("reservarlivro")}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.btnPress,
              ]}
            >
              <Text style={styles.buttonText}>Reservar livro</Text>
            </Pressable>
          </>
        ) : (
          <Text>Não há resultados para a requisição</Text>
        )}
      </View>
    </ScrollView>
  );
}
