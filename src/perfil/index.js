import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RetangGreen, RetangOrange } from './forms';

import styles from './styles';

export default function Perfil() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inicio}>
                <StatusBar backgroundColor='#fff' transLucent={false} />
                <RetangGreen />
                <RetangOrange />
            </View>
            <Appbar.Header>
                <Appbar.Action icon={() => <Ionicons name='menu' />} onPress={() => console.log('Menu pressionado')} /> {/* Substitua Icon por Ionicons aqui */}
                <Appbar.Content title="Perfil" />
            </Appbar.Header>
            <View style={styles.circle1} />
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
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
                    <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={styles.texto}>Sexo:</Text>
            <TextInput
                style={styles.input}
            />
        </ScrollView>

    );
}
