import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";

import styles from "./styles";
import api from "../../../services/api";
import imgContato from "../../../../assets/imagens_telas/contato.jpg";

export default function InformacoesContato({ navigation }) {
  const [infoContato, setInfoContato] = useState([]);

  useEffect(() => {
    informacoes();
  }, []);

  async function informacoes() {
    const dados = { cont_cod: 1 };
    try {
      const response = await api.post('/contatos', dados);
      console.log(response.data.dados);
      setInfoContato(response.data.dados);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + '\n' + error.response.data.dados);
      } else {
        alert('Erro no front-end' + '\n' + error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
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

        {infoContato.length > 0 ? (
          infoContato.map(infoCont => (
            <View key={infoCont.cont_cod} className={styles.informacoes}>
              <Text style={styles.escola}>{infoCont.esc_nome}</Text>
              <Text style={styles.informacoes}>{infoCont.esc_endereco}</Text>
              <Text style={styles.informacoes}>{infoCont.esc_tel}</Text>
              <Text style={styles.informacoes}>{infoCont.esc_cel}</Text>
              <Text style={styles.informacoes}>{infoCont.esc_email}</Text>
            </View>
          ))
        ) : (
          <h1>Não há resultados para a requisição</h1>
        )}
      </View>
    </ScrollView>
  );
}
