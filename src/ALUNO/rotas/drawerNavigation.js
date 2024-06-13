import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import TelaInicial from '../telaInicial';
import Perfil from '../perfil';
import Recomendacao from '../recomendacao';
import Biblioteca from '../biblioteca';
import InformacoesReserva from '../informacoesReserva';
import Notificacoes from '../notificacoes';
import InformacoesContato from '../infoContato';
import Login from '../login';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator
          rawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerActiveBackgroundColor: '#FF735C', // Cor de fundo ativa
            drawerInactiveBackgroundColor: '#C6C6C6', // Cor de fundo inativa
            drawerLabelStyle: {
              marginLeft: -20,
              marginRight: 2,
              color: '#000', // Cor da letra do título (azul)
            },
            drawerItemStyle: {
              borderRadius: 30, // Define border radius para os itens
              marginVertical: 2,
              width: '90%', // Define a largura dos itens
              alignSelf: 'center', // Alinha os itens ao centro
            },
            drawerStyle: {
              width: '55%', // Define a largura do Drawer
              backgroundColor: '#fff',
            },
          }}
        >
            <Drawer.Screen 
              name="Início" 
              component={TelaInicial} 
              options={{
                drawerIcon: ({ size, color }) => (
                  <View style={{ marginLeft: 10 }}> {/* Ajuste para mover o ícone para a direita */}
                    <SimpleLineIcons name="home" size={20} color="black" />
                  </View>
                ),
                drawerLabel: 'Início',
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
                drawerLabel: 'Perfil',
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
                drawerLabel: 'Recomendações',
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
                drawerLabel: 'Biblioteca',
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
                drawerLabel: 'Reservas',
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
                drawerLabel: 'Notificações',
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
                drawerLabel: 'Informações',
              }}
            />
            <Drawer.Screen 
              name="Sair" 
              component={Login} 
              options={{
                drawerIcon: ({ size, color }) => (
                  <View style={{ marginLeft: 10 }}>
                    <SimpleLineIcons name="logout" size={20} color="red" />
                  </View>
                ),
                drawerLabel: 'Sair',
              }}
            />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
