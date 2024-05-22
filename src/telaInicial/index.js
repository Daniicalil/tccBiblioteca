// TelaInicial.js
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RetangGreen, RetangOrange, Funcionamento, Quad1, Quad2, Quad3, Quad4, Quad5, Quad6, Importancia } from './forms';

import styles from './styles';

export default function TelaInicial() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const contentTranslateX = React.useRef(new Animated.Value(-150)).current;

  const toggleSidebarAnimated = () => {
    const toValue = sidebarOpen ? -150 : 100;
    Animated.timing(contentTranslateX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSidebarOpen(!sidebarOpen);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#3F7263' transLucent={false} />
      <ScrollView>
        <RetangGreen />
        <View style={styles.inicio}>
          <RetangOrange />
          <Searchbar
            placeholder="Pesquisar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.barraPesq}
            icon={({ size, color }) => (
              <Icon name="search" size={20} color="#000" />
            )}
          />
          <Funcionamento />
        </View>
        <Text style={styles.paragraph}>Recomendações dos professores</Text>
        <View style={styles.rowQuadrados1}>
          <Quad1 />
          <Quad2 />
          <Quad3 />
        </View>
        <View style={styles.rowQuadrados2}>
          <Quad4 />
          <Quad5 />
          <Quad6 />
        </View>
        <Importancia />
      </ScrollView>
      {/* Botão para exibir/ocultar a barra lateral */}
      <TouchableOpacity style={styles.sidebarToggle} onPress={toggleSidebarAnimated}>
        <Icon name={sidebarOpen ? 'close' : 'menu'} size={30} color="#000" />
      </TouchableOpacity>
      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: contentTranslateX }] }]}>
        <ScrollView>
          <View style={sidebarStyles.sidebarContent}>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="home" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="person" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="star" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Recomendações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="library-books" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Biblioteca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="bookmarks" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Reservas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="notifications" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="info" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Informações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sidebarStyles.button}>
              <Icon name="exit-to-app" size={20} color="#000" />
              <Text style={sidebarStyles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const sidebarStyles = StyleSheet.create({
  sidebarContent: {
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: 50,
    height:200,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
});
