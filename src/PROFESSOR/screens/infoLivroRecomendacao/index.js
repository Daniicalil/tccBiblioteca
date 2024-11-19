import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, Pressable, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { API_URL, API_PORT } from "@env";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import api from "../../../services/api";
import styles from "./styles";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";

import Autor from "../../../../assets/imagens_telas/autora.png";
import Editora from "../../../../assets/imagens_telas/editora.png";
import Genero from "../../../../assets/imagens_telas/genero.png";

const Line = () => {
  return <View style={styles.line} />;
};

export default function InfoLivroRecomendacao({ codLivroRec }) {
  const apiUrl = API_URL;   // URL da API
  const apiPorta = API_PORT; // Porta da API
  
  const navigation = useNavigation();

  const [modulo1, setModulo1] = useState(false);
  const [modulo2, setModulo2] = useState(false);
  const [modulo3, setModulo3] = useState(false);
  const [modulo4, setModulo4] = useState(false);

  const [livroRec, setLivroRec] = useState(null);

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
    handleCarregaLivro();
  }, [codLivroRec]);

  const removeRecommendation = async () => {
    const dadosApi = {
      rcm_cod: codLivroRec,
    };
    try {
      const response = await api.delete("/recomendacao", dadosApi);
      if (response.data.sucesso) {
        Alert.alert("Sucesso", "Recomendação removida com sucesso!");
        navigation.navigate("recomendacao");
      } else {
        Alert.alert("Erro", response.data.mensagem);
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao remover a recomendação.");
    }
  };

  // Função para exibir o alerta de confirmação
  const showConfirmAlert = () => {
    Alert.alert(
      "Remover Recomendação",
      "Você tem certeza que deseja remover esta recomendação?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: removeRecommendation,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
        {/* <StatusBar backgroundColor="#3F7263" transLucent={false} /> */}
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

        <Pressable
          onPress={showConfirmAlert}
          style={({ pressed }) =>
            pressed ? [styles.buttonRem, styles.btnRemPress] : styles.buttonRem
          }
        >
          <Text style={styles.buttonTextRem}>- Remover</Text>
        </Pressable>

        {livroRec ? (
          <>
            <View style={styles.lineSquare}>
              <Image
                source={{
                  uri: `${apiUrl}:${apiPorta}${livro.liv_foto_capa}`,
                }}
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
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={modulo1}
                    onValueChange={() => setModulo1(!modulo1)}
                    disabled
                  />
                  <Text style={styles.checkboxLabel}>1º Módulo</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={modulo2}
                    onValueChange={() => setModulo2(!modulo2)}
                    disabled
                  />
                  <Text style={styles.checkboxLabel}>2º Módulo</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={modulo3}
                    onValueChange={() => setModulo3(!modulo3)}
                    disabled
                  />
                  <Text style={styles.checkboxLabel}>3º Módulo</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={modulo4}
                    onValueChange={() => setModulo4(!modulo4)}
                    disabled
                  />
                  <Text style={styles.checkboxLabel}>4º Módulo</Text>
                </View>
              </View>
            </View>

            <Pressable
              onPress={() => navigation.navigate("reservarlivro", { codLivro: livroRec.liv_cod })}
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
