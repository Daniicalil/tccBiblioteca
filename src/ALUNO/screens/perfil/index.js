import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { RadioButton, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import styles from "./styles";
import api from "../../../services/api";
import FotoPadraoPerfil from "../../../../assets/imagens_telas/perfil.jpg";
import IconeEditar from "../../../../assets/imagens_telas/editar_perfil.png";

export default function Perfil({ navigation }) {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    carregaPerfil();
  }, []);

  async function carregaPerfil() {
    const dados = {
      usu_rm: "11223344556",
    };

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
  }

  const sexo = [
    { label: "Feminino", value: "0" },
    { label: "Masculino", value: "1" },
    { label: "Neutro", value: "2" },
    { label: "Padrão", value: "3" },
  ];

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
              source={infoUsu.usu_foto}
              style={styles.fotoPadraoPerfil}
            />
            <View className={styles.inputGroup}>
              <Text style={styles.texto}>RM:</Text>
              <Text style={styles.texto}>{infoUsu.usu_rm}</Text>
            </View>
            <View className={styles.inputGroup}>
              <Text style={styles.texto}>Nome social:</Text>
              <Text style={styles.texto}>{infoUsu.usu_social}</Text>
            </View>
            <View className={styles.inputGroup}>
              <Text style={styles.texto}>Nome completo:</Text>
              <Text style={styles.texto}>{infoUsu.usu_nome}</Text>
            </View>
            <View className={styles.inputGroup}>
              <Text style={styles.texto}>E-mail:</Text>
              <Text style={styles.texto}>{infoUsu.usu_email}</Text>
            </View>
            <View className={styles.inputGroup}>
              <Text style={styles.texto}>Curso técnico ou médio:</Text>
              {infoUsu.cursos.length > 0 ? (
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
                      value={opcao.value}
                      status={
                        selectedSexo === opcao.value ? "checked" : "unchecked"
                      }
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

            <Pressable
              onPress={() => navigation.navigate("esqueceuSenha1")}
              style={({ pressed }) =>
                pressed
                  ? [styles.touchText, styles.TouchPress]
                  : styles.touchText
              }
            >
              <Text style={styles.touchText}>Esqueceu a senha?</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text style={styles.aviso}>Não há resultados para a requisição</Text>
      )}
      <View style={styles.viewEditar}>
        <Pressable
          onPress={() =>
            navigation.navigate("perfilEditar", { codUsu: perfil.usu_rm })
          }
          style={({ pressed }) =>
            pressed ? [styles.botaoEditar, styles.btnPress] : styles.botaoEditar
          }
        >
          <Image source={IconeEditar} style={styles.iconeEditar} />
        </Pressable>
      </View>
    </View>
  );
}
