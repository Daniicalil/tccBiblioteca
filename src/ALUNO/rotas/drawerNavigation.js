import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useRoute } from '@react-navigation/native';

import TelaInicial from '../telaInicial';
import Perfil from '../perfil';
import Recomendacao from '../recomendacao';
import Biblioteca from '../biblioteca';
import InformacoesReserva from '../informacoesReserva';
import Notificacoes from '../notificacoes';
import InformacoesContato from '../infoContato';
import LognIn from '../lognIn';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen 
              name="Início" 
              component={TelaInicial} 
              options={({ navigation, route, focused }) => ({
                drawerLabel: 'Home',
                drawerIcon: () => (
                  <Icon name="home" size={24} color={focused? 'blue' : 'gray'} />
                ),
              })}
              />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Recomendações" component={Recomendacao} />
            <Drawer.Screen name="Biblioteca" component={Biblioteca} />
            <Drawer.Screen name="Reservas" component={InformacoesReserva} />
            <Drawer.Screen name="Notificações" component={Notificacoes} />
            <Drawer.Screen name="Informações" component={InformacoesContato} />
            <Drawer.Screen name="Sair" component={LognIn} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}