import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import styles from "./styles";
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";
import imgContato from "../../../../assets/imagens_telas/contato.jpg";

export default function InformacoesContatoEditar({ codInfo }) {
  const navigation = useNavigation();

  const [infoContatoEdt, setInfoContatoEdt] = useState({
    "cont_cod": '',
    "esc_nome": '',
    "esc_endereco": '',
    "esc_tel": '',
    "esc_cel": '',
    "esc_email": '',
  });

  useEffect(() => {
    const handleCarregainfo = async () => {
      const dadosApi = { cont_cod: codInfo };

      try {
        const response = await api.post('/contatos', dadosApi);
        if (response.data.sucesso) {
          const infoApi = response.data.dados[0];
          setInfoContatoEdt(infoApi);
        } else {
          setError(response.data.mensagem)
        }
      } catch (error) {
        setError(error.response ? error.response.data.mensagem : 'Erro no front-end');
      }
    };

    handleCarregainfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoContatoEdt(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const { esc_nome, esc_endereco, esc_tel, esc_cel, esc_email } = infoContatoEdt;

    if (!esc_nome || !esc_endereco || !esc_tel || !esc_cel || !esc_email) {
      alert('Todos os campos devem ser preenchidos');
      return;
    }

    setIsSaving(true); // Inicia o salvamento

    try {
      const response = await api.patch(`/cont_editar/${infoContatoEdt.cont_cod}`, {
        ...infoContatoEdt,
      });

      if (response.data.sucesso) {
        alert('Informações de contato atualizado com sucesso!');
        router.push('/infoContato'); // Redireciona após o sucesso
      }
    } catch (error) {
      console.error("Erro ao salvar informações de contato:", error);
      alert(error.response ? error.response.data.mensagem : 'Erro ao salvar informações. Tente novamente.');
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
        <Image source={imgContato} style={styles.imgcontato} />
        <View className={styles.space}>
          <Text className={styles.titleSuperior}>Nome da escola:</Text>
          <TextInput
            style={styles.escolaInput} // Estilo para o input da escola
            value={infoContatoEdt.esc_nome}
            onChange={(e) => setInfoContatoEdt({ ...infoContatoEdt, esc_nome: e.target.value })}
            placeholder="Nome da escola"
          />
        </View>

        <View className={styles.space}>
          <Text className={styles.titleSuperior}>Endereço da escola:</Text>
          <TextInput
            style={styles.escolaInput} // Estilo para o input das informações
            value={infoContatoEdt.esc_endereco}
            onChange={(e) => setInfoContatoEdt({ ...infoContatoEdt, esc_endereco: e.target.value })}
            placeholder="Endereço da escola"
          />
        </View>

        <View className={styles.space}>
          <Text className={styles.titleSuperior}>Telefone da escola:</Text>
          <TextInput
            style={styles.escolaInput} // Estilo para o input das informações
            value={infoContatoEdt.esc_tel}
            onChange={(e) => setInfoContatoEdt({ ...infoContatoEdt, esc_tel: e.target.value })}
            placeholder="Telefone da escola"
          />
        </View>

        <View style={styles.viewSalvar}>
          <Pressable
            onPress={showConfirmAlert}
            style={({ pressed }) =>
              pressed ? [styles.botaoSalvar, styles.btnPress] : styles.botaoSalvar
            }
          >
            <Text style={styles.salvarText}>Salvar</Text>
          </Pressable>
        </View>
      </View>
      );
}
