import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { RadioButton, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import styles from "./styles";
import api from "../../../services/api";
import FotoPadraoPerfil from "../../../../assets/imagens_telas/perfil.jpg";
import IconeEditar from "../../../../assets/imagens_telas/editar_perfil.png";

export default function Perfil() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;
  const navigation = useNavigation();
  const [selectedSexo, setSelectedSexo] = useState(null);
  const [perfil, setPerfil] = useState([]);

  // useEffect(() => {
  //   const carregarUsuario = async () => {
  //     const user = JSON.parse(await AsyncStorage.getItem("user"));
  //     if (!user) {
  //       navigation.navigate("login"); // Navega para tela de login se não houver usuário.
  //     } else {
  //       carregaPerfil(user.cod);
  //     }
  //   };
  //   carregarUsuario();
  // }, []);

  const carregaPerfil = async (user) => {
    const dados = { usu_cod: user };

    try {
      const response = await api.post("/usuarios", dados);
      console.log(response.data.dados);
      setPerfil(response.data.dados);
    } catch (error) {
      if (error.response) {
        Alert.alert(
          error.response.data.mensagem + "\n" + error.response.data.dados
        );
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    }
  };

  // const handleChange = (e) => {
  //     setPerfil(prev => ({ ...prev, [e.target.name]: e.target.value }));
  // }

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        {/* <StatusBar backgroundColor='#3F7263' transLucent={false} /> */}
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
          <Text style={styles.paragraph}>Perfil</Text>
        </View>
      </View>
      {perfil.length > 0 ? (
        perfil.map((infoUsu) => (
          <View key={infoUsu.usu_rm}>
            <Avatar.Image
              size={120}
              source={{ uri: `${apiUrl}:${apiPorta}${infoUsu.usu_foto}` }}
              style={styles.fotoPadraoPerfil}
              resizeMode="cover"
            />
            <View style={styles.inputGroup}>
              <Text style={styles.texto}>RM:</Text>
              <Text style={styles.texto}>{infoUsu.usu_rm}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.texto}>Nome social:</Text>
              <Text style={styles.texto}>{infoUsu.usu_social}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.texto}>Nome completo:</Text>
              <Text style={styles.texto}>{infoUsu.usu_nome}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.texto}>E-mail:</Text>
              <Text style={styles.texto}>{infoUsu.usu_email}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.texto}>Curso técnico ou médio:</Text>
              {infoUsu.cursos && infoUsu.cursos.length > 0 ? (
                infoUsu.cursos.map((curso) => (
                  <Text style={styles.texto} key={curso.cur_cod}>
                    {curso.cur_nome}
                  </Text>
                ))
              ) : (
                <Text>Não há cursos registrados.</Text>
              )}
            </View>

            <View style={styles.contentContainer}>
              <Text style={styles.sexo}>Sexo:</Text>
              <RadioButton.Group
                onValueChange={(value) => setSelectedSexo(value)}
                value={selectedSexo}
              >
                {[
                  { label: "Feminino", value: "0" },
                  { label: "Masculino", value: "1" },
                  { label: "Neutro", value: "2" },
                  { label: "Padrão", value: "3" },
                ].map((opcao) => (
                  <View key={opcao.value} style={styles.radioContainer}>
                    <RadioButton
                      name="usu_sexo"
                      value={opcao.value}
                      status={
                        selectedSexo === opcao.value ? "checked" : "unchecked"
                      }
                      checked={Number(infoUsu.usu_sexo) === Number(opcao.value)}
                      onPress={() => setSelectedSexo(opcao.value)}
                      disabled
                    />
                    <Text style={styles.label}>
                      {opcao.label.charAt(0).toUpperCase() +
                        opcao.label.slice(1)}
                    </Text>
                  </View>
                ))}
              </RadioButton.Group>
            </View>

            
          </View>
        ))
      ) : (
        <Text style={styles.aviso}>Não há resultados para a requisição</Text>
      )}
      <Pressable
        onPress={() => navigation.navigate("esqueceuSenha1")}
        style={({ pressed }) =>
          pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
        }
      >
        <Text style={styles.touchText}>Esqueceu a senha?</Text>
      </Pressable>
      <View style={styles.viewEditar}>
              <Pressable
                onPress={() =>
                  navigation.navigate("perfilEditar", { userId: perfil.usu_cod })
                }
                style={({ pressed }) =>
                  pressed
                    ? [styles.botaoEditar, styles.btnPress]
                    : styles.botaoEditar
                }
              >
                <Image source={IconeEditar} style={styles.iconeEditar} />
              </Pressable>
            </View>
    </View>
  );
}
