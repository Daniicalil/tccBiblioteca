import { StatusBar, Alert } from 'react-native'; 
import { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import imgesqsenha from '../../../../assets/imagens_telas/6333054.png';
import imgDesign from '../../../../assets/imagens_telas/designPage.png';

import styles from './styles';

export default function EsqueceuSenha1({ navigation }) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Função para lidar com o pressionamento do botão 'Redefinir'
  const handleRedefinirPress = () => {
    if (email.trim() === '') {
      setErrorMessage('Por favor, digite seu e-mail.');
      return;
    }

    setErrorMessage('');

    // Simular envio do email (pode ser substituído pela lógica real)
    const emailEnviado = true;

    if (emailEnviado) {
      Alert.alert(
        'E-mail já enviado',
        'Um e-mail já foi enviado para redefinição de senha.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('esqueceuSenha2'),
          },
        ]
      );
    } else {
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
            style={[styles.input, errorMessage ? styles.inputError : null]}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errorMessage) {
                setErrorMessage('');
              }
            }}
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <Pressable 
            onPress={() => navigation.navigate('login')}
            style={({ pressed }) =>
              pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
            }
          >
            <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </Pressable>

          <Pressable 
            onPress={handleRedefinirPress}
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
