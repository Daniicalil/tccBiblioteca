// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { ScrollView ,View, Text, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RetangGreen, RetangOrange} from './forms';

import styles from './styles';

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.inicio}>
        {/* <StatusBar backgroundColor='#fff' transLucent={false} /> */}
            <RetangGreen />
            <RetangOrange />
        </View>
        <Appbar.Header>
            <Appbar.Action icon={() => <Icon name='menu'/>} onPress={() => console.log('Menu pressionado')} />
            <Appbar.Content title="Perfil" />
        </Appbar.Header>
            <TextInput
            placeholder='e-mail'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
        />
    </ScrollView>
    
  );
}