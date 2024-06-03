import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
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
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
        <RetangGreen />
        <RetangOrange />
      </View>

      <Text style={styles.texto}>Nome social:</Text>
            <TextInput
                style={styles.input}
            />
            <Text style={styles.texto}>Nome completo:</Text>
            <TextInput
                style={styles.input}
            />

            <Text style={styles.texto}>E-mail:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.texto}>Senha:</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
                    <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
                </Pressable>
            </View>

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