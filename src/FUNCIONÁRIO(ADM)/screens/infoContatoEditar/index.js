import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RetangGreen, RetangOrange } from '../../../componentes/cabecalho/forms';

import styles from './styles';
import useBotaoConfirmarAcao from "../../../componentes/alertConfirmacao";
import imgContato from '../../../../assets/imagens_telas/contato.jpg';

export default function InformacoesContatoEditar({ navigation }) {
  const [escola, setEscola] = useState('ETEC PROF. MASSUYUKI KAWANO');
  const [informacoes, setInformacoes] = useState(
    '(14) 3496 1520 - (14) 3491 5393\n' +
    'RUA: BEZERRA DE MENEZES, 215\n' +
    'CEP 17605-440\n' +
    'E136DIR@CPS.SP.GOV.BR'
  );

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
        <StatusBar backgroundColor='#3F7263' transLucent={false} />
          <RetangGreen />
          <RetangOrange /> 
            <View style={styles.titlePagina}>
              <FontAwesome name="angle-left" size={30} color="black" style={styles.icon} onPress={() => navigation.goBack()}/>
                <Text style={styles.paragraph}>Informações de Contato</Text>
            </View>
            <Image source={imgContato} style={styles.imgcontato} />
            <TextInput
              style={styles.escolaInput} // Estilo para o input da escola
              value={escola}
              onChangeText={setEscola}
              placeholder="Nome da escola"
            />

            <TextInput
              style={styles.informacoesInput} // Estilo para o input das informações
              value={informacoes}
              onChangeText={setInformacoes}
              multiline={true}
              numberOfLines={5}
              placeholder="Informações de contato"
            />
      </View>

      <View style={styles.viewSalvar}>
        <Pressable
          onPress={showConfirmAlert}
          style={({ pressed }) => pressed ? [styles.botaoSalvar, styles.btnPress] : styles.botaoSalvar}
        >
          <Text style={styles.salvarText}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}
