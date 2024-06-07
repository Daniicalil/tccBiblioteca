import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import TelaInicial from '../telaInicial';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://example.com/path-to-your-image.jpg' }} // Substitua pelo URL da sua imagem
          style={styles.profileImage}
        />
      </View>
      <View style={styles.drawerContent}>
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="home" size={20} color="black" />}
          label="Início"
          // onPress={() => props.navigation.navigate('Inicio')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="user" size={20} color="black" />}
          label="Perfil"
          // onPress={() => props.navigation.navigate('Perfil')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="star" size={20} color="black" />}
          label="Recomendações"
          // onPress={() => props.navigation.navigate('Recomendacoes')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="book-open" size={20} color="black" />}
          label="Biblioteca"
          // onPress={() => props.navigation.navigate('Biblioteca')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="calendar" size={20} color="black" />}
          label="Reservas"
          // onPress={() => props.navigation.navigate('Reservas')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="bell" size={20} color="black" />}
          label="Notificações"
          // onPress={() => props.navigation.navigate('Notificacoes')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="info" size={20} color="black" />}
          label="Informações"
          // onPress={() => props.navigation.navigate('Informacoes')}
        />
        <DrawerItem
          icon={({ color, size }) => <SimpleLineIcons name="logout" size={20} color="red" />}
          label="Sair"
          // onPress={() => props.navigation.navigate('Sair')}
        />
      </View>
      <View style={styles.contact}>
        <Text>Contato @ dos desenvolvedores</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const InicioScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Tela Inicial</Text>
  </View>
);

const PerfilScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Perfil</Text>
  </View>
);

const RecomendacoesScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Recomendações</Text>
  </View>
);

const BibliotecaScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Biblioteca</Text>
  </View>
);

const ReservasScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Reservas</Text>
  </View>
);

const NotificacoesScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Notificações</Text>
  </View>
);

const InformacoesScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Informações</Text>
  </View>
);

const SairScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Sair</Text>
  </View>
);

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            width: '50%', // Define a largura da sidebar para 50% da tela
          },
          
        }}
      >
        <Drawer.Screen name="Inicio" component={InicioScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="Recomendacoes" component={RecomendacoesScreen} />
        <Drawer.Screen name="Biblioteca" component={BibliotecaScreen} />
        <Drawer.Screen name="Reservas" component={ReservasScreen} />
        <Drawer.Screen name="Notificacoes" component={NotificacoesScreen} />
        <Drawer.Screen name="Informacoes" component={InformacoesScreen} />
        <Drawer.Screen name="Sair" component={SairScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  drawerContent: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default MainNavigation;
