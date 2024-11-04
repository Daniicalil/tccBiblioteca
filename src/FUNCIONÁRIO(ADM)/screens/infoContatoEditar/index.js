import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import styles from "./styles";
import api from "../../../services/api";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";
import imgContato from "../../../../assets/imagens_telas/contato.jpg";

export default function InformacoesContatoEditar({ codInfo }) {
  const navigation = useNavigation();

  const [infoContatoEdt, setInfoContatoEdt] = useState({
    cont_cod: "",
    esc_nome: "",
    esc_endereco: "",
    esc_tel: "",
    esc_cel: "",
    esc_email: "",
  });

  useEffect(() => {
    if (!codInfo) return;

    const handleCarregainfo = async () => {
      const dadosApi = { cont_cod: 1 };

      try {
        const response = await api.post("/contatos", dadosApi);
        if (response.data.sucesso) {
          const infoApi = response.data.dados[0];
          setInfoContatoEdt(infoApi);
        } else {
          Alert.alert(response.data.mensagem);
        }
      } catch (error) {
        alert(
          error.response ? error.response.data.mensagem : "Erro no front-end"
        );
      }
    };

    handleCarregainfo();
  }, [codInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoContatoEdt((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const { esc_nome, esc_endereco, esc_tel, esc_cel, esc_email } =
      infoContatoEdt;

    if (!esc_nome || !esc_endereco || !esc_tel || !esc_cel || !esc_email) {
      alert("Todos os campos devem ser preenchidos");
      return;
    }

    setIsSaving(true); // Inicia o salvamento

    try {
      const response = await api.patch(
        `/cont_editar/${infoContatoEdt.cont_cod}`,
          ...infoContatoEdt,
      );

      if (response.data.sucesso) {
        alert("Informações de contato atualizado com sucesso!");
        router.push("/infoContato"); // Redireciona após o sucesso
      }
    } catch (error) {
      console.error("Erro ao salvar informações de contato:", error);
      alert(
        error.response
          ? error.response.data.mensagem
          : "Erro ao salvar informações. Tente novamente."
      );
    } finally {
      setIsSaving(false); // Finaliza o salvamento
    }
  };
  console.log(infoContatoEdt);

  const showConfirmAlert = useBotaoConfirmarAcao(
    "Tem certeza que deseja salvar essas informações?",
    () => {
      // Lógica a ser executada após a confirmação
      console.log("Informações atualizada");
    },
    "informacoescontato"
  );

  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <StatusBar backgroundColor="#3F7263" transLucent={false} />
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
          <Text style={styles.paragraph}>Informações de Contato</Text>
        </View>
        {infoContatoEdt ? (
          <View style={styles.inputs}>
            <Image source={imgContato} style={styles.imgcontato} />

            <View style={styles.space}>
              <Text style={styles.titleSuperior}>Nome da escola:</Text>
              <TextInput
                style={styles.escolaInput} // Estilo para o input da escola
                value={infoContatoEdt.esc_nome}
                onChange={(e) =>
                  setInfoContatoEdt({
                    ...infoContatoEdt,
                    esc_nome: e.target.value,
                  })
                }
              />
            </View>

            <View style={styles.space}>
              <Text style={styles.titleSuperior}>Endereço da escola:</Text>
              <TextInput
                style={styles.escolaInput} // Estilo para o input das informações
                value={infoContatoEdt.esc_endereco}
                onChange={(e) =>
                  setInfoContatoEdt({
                    ...infoContatoEdt,
                    esc_endereco: e.target.value,
                  })
                }
              />
            </View>

            <View style={styles.space}>
              <Text style={styles.titleSuperior}>Telefone da escola:</Text>
              <TextInput
                style={styles.escolaInput} // Estilo para o input das informações
                value={infoContatoEdt.esc_tel}
                onChange={(e) =>
                  setInfoContatoEdt({
                    ...infoContatoEdt,
                    esc_tel: e.target.value,
                  })
                }
              />
            </View>

            <View style={styles.space}>
              <Text style={styles.titleSuperior}>Celular da escola:</Text>
              <TextInput
                style={styles.escolaInput} // Estilo para o input das informações
                value={infoContatoEdt.esc_cel}
                onChange={(e) =>
                  setInfoContatoEdt({
                    ...infoContatoEdt,
                    esc_cel: e.target.value,
                  })
                }
              />
            </View>

            <View style={styles.space}>
              <Text style={styles.titleSuperior}>E-mail da escola:</Text>
              <TextInput
                style={styles.escolaInput} // Estilo para o input das informações
                value={infoContatoEdt.esc_email}
                onChange={(e) =>
                  setInfoContatoEdt({
                    ...infoContatoEdt,
                    esc_email: e.target.value,
                  })
                }
              />
            </View>

            <View style={styles.viewSalvar}>
              <Pressable
                onPress={showConfirmAlert}
                style={({ pressed }) =>
                  pressed
                    ? [styles.botaoSalvar, styles.btnPress]
                    : styles.botaoSalvar
                }
              >
                <Text style={styles.salvarText}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <h1>Não há resultados para a requisição</h1>
        )}
      </View>
    </View>
  );
}
