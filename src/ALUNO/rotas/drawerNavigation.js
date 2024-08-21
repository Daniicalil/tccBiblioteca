import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import TelaInicial from '../screens/telaInicial';
import Perfil from '../screens/perfil';
import Recomendacao from '../screens/recomendacao';
import Biblioteca from '../screens/biblioteca';
import InformacoesReserva from '../screens/informacoesReserva';
import Notificacoes from '../screens/notificacoes';
import InformacoesContato from '../screens/infoContato';
import Login from '../screens/login';

import PerfilEditar from '../screens/perfilEditar';
import InfoLivroRecomendacao from '../screens/infoLivroRecomendacao';
import InfoLivroBiblioteca from '../screens/infoLivroBiblioteca';
import ReservarLivro from '../screens/reservarLivro';
import SobreNos from '../screens/sobreNos';

const CustomDrawerLabel = () => (
  <Text style={{ color: 'red', marginLeft: -18 }}>Sair</Text>
);

// Styles
const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#FFF',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    marginTop: 40,
    marginBottom: 20,
    height: 140,
    width: 120,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  touchText: {
    color: '#FF735C',
  },
  TouchPress: {
    color: '#3F7263',
  },
});

// Drawer Navigator
const Drawer = createDrawerNavigator();

export default function NavegacaoDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#FF735C',
        drawerInactiveBackgroundColor: '#C6C6C6',
        drawerLabelStyle: {
          marginLeft: -20,
          width: '100%',
          color: '#000',
          flexShrink: 1,
          flex: 1,
          fontSize: 12,
        },
        drawerItemStyle: {
          borderRadius: 30,
          marginVertical: 4,
          width: '90%',
          alignSelf: 'center',
        },
        drawerStyle: {
          width: '55%',
          backgroundColor: '#FFF',

        },
        drawerIcon: {
          marginLeft: -50,
        },
      }}
      drawerContent={props => (
        <View style={{ flex: 1 }}>
          <DrawerContentScrollView {...props}>
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
              <Image
                source={require('../../../assets/imgs/logocomescrita.png')} // Update this path
                style={styles.drawerImage}
              />
            </View>

            {/* Drawer Items */}
            {/* <DrawerItemList {...props} /> */}

            {/* Itens listagem drawer */}
            <View>

                <Pressable onPress={() => props.navigation.navigate('Início')}>
                  <Text>Início</Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Perfil')}>
                  <Text>Perfil</Text>
                </Pressable>

            </View>


          </DrawerContentScrollView>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Desenvolvido por </Text>
            <Pressable
              onPress={() => navigation.navigate('sobrenos')}
              style={
                ({ pressed }) => pressed ?
                  [styles.touchText, styles.TouchPress]
                  :
                  styles.touchText
              }
            >
              <Text style={styles.touchText}>Danikawari</Text>
            </Pressable>
          </View>
        </View>
      )}
    >

      {/* Definido as telas da drawer aqui */}
      <Drawer.Screen
        name="Início"
        component={TelaInicial}
        options={{
          drawerLabel: "Início",
          title: "Início",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="home" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerLabel: "Perfil",
          title: "Perfil",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="user" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Recomendações"
        component={Recomendacao}
        options={{
          drawerLabel: "Recomendações",
          title: "Recomendações",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="star" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Biblioteca"
        component={Biblioteca}
        options={{
          drawerLabel: "Biblioteca",
          title: "Biblioteca",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="book-open" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Reservas"
        component={InformacoesReserva}
        options={{
          drawerLabel: "Reservas",
          title: "Reservas",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="calendar" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Notificações"
        component={Notificacoes}
        options={{
          drawerLabel: "Notificações",
          title: "Notificações",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="bell" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Informações"
        component={InformacoesContato}
        options={{
          drawerLabel: "Informações",
          title: "Informações",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="info" size={20} color="black" />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={Login}
        options={{
          drawerLabel: () => <CustomDrawerLabel />,
          title: "Sair",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons
                name="logout" size={18} color="red" />
            </View>
          ),
        }}
      />


      {/* TESTE */}

      <Drawer.Screen
        name="perfil"
        component={Perfil}
        options={{
          drawerLabel: () => <CustomDrawerLabel />,
          title: "perfil",
          drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons
                name="logout" size={18} color="red" />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="perfilEditar"
        component={PerfilEditar}
        // options={{
        //   drawerLabel: () => <CustomDrawerLabel />,
        //   title: "perfilEditar",
        //   drawerIcon: ({ size, color }) => (
        //     <View style={{ marginLeft: 10 }}>
        //       <SimpleLineIcons
        //         name="logout" size={18} color="red" />
        //     </View>
        //   ),
        // }}
      />

      {/* <Stack.Screen name="perfil" component={Perfil} />
      <Stack.Screen name="perfilEditar" component={PerfilEditar} />
      <Stack.Screen name="recomendacao" component={Recomendacao} />
      <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao} />
      <Stack.Screen name="biblioteca" component={Biblioteca} />
      <Stack.Screen name="infolivrobiblioteca" component={InfoLivroBiblioteca} />
      <Stack.Screen name="reservarlivro" component={ReservarLivro} />
      <Stack.Screen name="informacoesreserva" component={InformacoesReserva} />
      <Stack.Screen name="notificacoes" component={Notificacoes} />
      <Stack.Screen name="informacoescontato" component={InformacoesContato} />
      <Stack.Screen name="sobrenos" component={SobreNos} /> */}
    </Drawer.Navigator>
  );
}
