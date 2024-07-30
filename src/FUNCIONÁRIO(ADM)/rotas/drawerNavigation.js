import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import TelaInicial from '../screens/telaInicial';
import Perfil from '../../ALUNO/screens/perfil';
import Selecao from '../screens/selecao';
import Recomendacao from '../screens/recomendacao';
import Biblioteca from '../screens/biblioteca';
import InformacoesReserva from '../screens/informacoesReserva';
import Notificacoes from '../../ALUNO/screens/notificacoes';
import Emprestimos from '../screens/emprestimos';
import InformacoesContato from '../screens/infoContato';
import Login from '../../ALUNO/screens/login';

const CustomDrawerLabel = () => (
  <Text style={{ color: 'red', marginLeft: -18 }}>Sair</Text>
);

// Styles
const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#fff',
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    marginTop: 50,
    marginBottom: 30,
    height: 130,
    width: 120,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-end'
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    alignItems: 'flex-end'
  },
});

// Drawer Navigator
const Drawer = createDrawerNavigator();

export default function NavegacaoDrawer() {
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
            backgroundColor: '#fff',
          },
          drawerIcon: {
            marginLeft: -50,
          },
        }}
        drawerContent={props => (
          <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
              {/* Drawer Header */}
              <View style={styles.drawerHeader}>
                <Image
                  source={require('../../../assets/imgs/logocomescrita.png')}
                  style={styles.drawerImage}
                />
              </View>

              {/* Drawer Items */}
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Contato das desenvolvedoras</Text>
             </View>
          </View>
        )}
      >

       
        {/* Definido as telas da drawer aqui */}
        <Drawer.Screen
          name="Início"
          component={TelaInicial}
          options={{
            drawerLabel:"Início",
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
            drawerLabel:"Perfil",
            title: "Perfil",
            drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="user" size={20} color="black" />
            </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Seleção"
          component={Selecao}
          options={{
            drawerLabel:"Seleção",
            title: "Seleção",
            drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="directions" size={20} color="black" />
            </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Recomendações"
          component={Recomendacao}
          options={{
            drawerLabel:"Recomendações",
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
            drawerLabel:"Biblioteca",
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
          drawerLabel:"Reservas",
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
            drawerLabel:"Notificações",
            title: "Notificações",
            drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="bell" size={20} color="black" />
            </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Empréstimos"
          component={Emprestimos}
          options={{
            drawerLabel:"Empréstimos",
            title: "Empréstimos",
            drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons name="notebook" size={20} color="black" />
            </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Informações"
          component={InformacoesContato}
          options={{
            drawerLabel:"Informações",
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
      </Drawer.Navigator>
  );
}
