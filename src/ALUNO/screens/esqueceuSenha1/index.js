import { StatusBar, Alert } from 'react-native'; // Importe o Alert do react-native
import { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import imgesqsenha from '../../../../assets/imagens_telas/6333054.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';

import styles from './styles';

export default function EsqueceuSenha1({ navigation }) {
  const [email, setEmail] = useState('');

  // // Adicionando logs para depuração
  // console.log('Componente EsqueceuSenha1 carregado');
  // console.log('Valor inicial do email:', email);

  // Função para lidar com o pressionamento do botão 'Redefinir'
  const handleRedefinirPress = () => {
    console.log('Botão Redefinir pressionado'); // Verifique se a função está sendo chamada
    console.log('Email:', email); // Verifique o valor do email

    // Verifique se o email não está vazio
    if (email.trim() === '') {
      Alert.alert('Atenção', 'Por favor, digite seu e-mail.');
      return;
    }

    // Simular envio do email (pode ser substituído pela lógica real)
    const emailEnviado = true; // Exemplo: email já enviado

    if (emailEnviado) {
      Alert.alert(
        'E-mail já enviado',
        'Um e-mail já foi enviado para redefinição de senha.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('esqueceuSenha2'), // Navega para a próxima tela
          },
        ]
      );
    } else {
      // Lógica para enviar o e-mail real aqui
      navigation.navigate('esqueceuSenha2');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' translucent={false} />
      <ImageBackground source={imgDesign} style={styles.background}>
        <View style={styles.contentContainer}>
          <Image source={imgesqsenha} style={styles.logo} />
          <Text style={styles.paragraph}>Redefinir senha</Text>
          <Text style={styles.text}>
            Digite o seu e-mail no campo abaixo e lhe enviaremos um código de ativação.
          </Text>
          
          <TextInput
            placeholder='e-mail'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Pressable 
            onPress={() => navigation.navigate('login')}
            style={({ pressed }) =>
              pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
            }
          >
            <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </Pressable>

          <Pressable 
            onPress={handleRedefinirPress} // Chame a função handleRedefinirPress ao pressionar o botão
            style={({ pressed }) =>
              pressed ? [styles.redefinirButton, styles.btnPress] : styles.redefinirButton
            }
          >
            <Text style={styles.redefinirText}>Redefinir</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );
}
