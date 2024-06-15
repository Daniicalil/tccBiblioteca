import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

// Screens
import TelaInicial from '../telaInicial';
import Perfil from '../perfil';
import Recomendacao from '../recomendacao';
import Biblioteca from '../biblioteca';
import InformacoesReserva from '../informacoesReserva';
import Notificacoes from '../notificacoes';
import InformacoesContato from '../infoContato';
import Login from '../login';

// Custom Drawer Footer
const CustomDrawerFooter = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Contato das desenvolvedoras</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#fff',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    marginTop: 40,
    marginBottom: 10,
    height: 120,
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
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
});

// Drawer Navigator
const Drawer = createDrawerNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#FF735C',
          drawerInactiveBackgroundColor: '#C6C6C6',
          drawerLabelStyle: {
            marginLeft: -20,
            width: '100%',
            color: '#000',
            flexShrink: 1,
            flex: 1,
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
          <DrawerContentScrollView {...props}>
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
              <Image
                source={require('../../../assets/imgs/drawer.png')} // Update this path
                style={styles.drawerImage}
              />
              {/* Add more header content if needed */}
            </View>

            {/* Drawer Items */}
            <DrawerItemList {...props} />

            {/* Drawer Footer */}
            <CustomDrawerFooter {...props} />
          </DrawerContentScrollView>
        )}
      >

       
        {/* Define your screens here */}
        <Drawer.Screen
          name="Início"
          component={TelaInicial}
          options={{
            
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
            headerShown: false,
            drawerIcon: ({ size, color }) => (
            <View style={{ marginLeft: 10 }}>
              <SimpleLineIcons 
                name="logout" 
                size={20} 
                color="red" 

              />
            </View>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
