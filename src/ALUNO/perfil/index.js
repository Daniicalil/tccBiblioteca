import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, Pressable } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import {RetangGreen, RetangOrange} from './forms';

import styles from './styles';

export default function Perfil() {
    const [value, setValue] = useState('first');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '#FF735C', 
      },
    };

    const [text, setText] = React.useState('');
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
        <View style={styles.titlePagina}>
        <FontAwesome name="angle-left" size={30} color="black" style={styles.icon}/>
          <Text style={styles.paragraph}>Perfil</Text>
        </View>
      </View>
      <View style={styles.circle} />
      <PaperProvider theme={theme}>
      <TextInput
        mode="outlined"
        label="Nome social"
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Nome completo"
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          mode="outlined"
          label="Senha"
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Pressable onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
        <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
      </Pressable>
    </PaperProvider>

            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
            <Text style={styles.sexo}>Sexo:</Text>
            <View style={styles.seletores}>

              <Text><RadioButton value="Feminino" color='#3F7263' />Feminino</Text>
              <Text> <RadioButton value="Masculino" color='#3F7263' />Masculino</Text>
              <Text><RadioButton value="Neutro" color='#3F7263' />Neutro</Text>
            </View>
          </RadioButton.Group>
    </ScrollView>
    
  );
}