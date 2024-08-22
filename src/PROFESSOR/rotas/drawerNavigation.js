import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import StylesButtonDrawer from './stylesDrawer';

import TelaInicial from '../../ALUNO/screens/telaInicial';
import Perfil from '../../ALUNO/screens/perfil';
import Recomendacao from '../screens/recomendacao';
import Biblioteca from '../../ALUNO/screens/biblioteca';
import InformacoesReserva from '../../ALUNO/screens/informacoesReserva';
// import Notificacoes from '../../ALUNO/descarte/notificacoes';
import InformacoesContato from '../../ALUNO/screens/infoContato';
import Login from '../../ALUNO/screens/login';

import PerfilEditar from '../../ALUNO/screens/perfilEditar';
import InfoLivroRecomendacao from '../screens/infoLivroRecomendacao';
import AddRecomendacao from '../screens/addRecomendacao';
import InfoLivroBiblioteca from '../../ALUNO/screens/infoLivroBiblioteca';
import ReservarLivro from '../../ALUNO/screens/reservarLivro';
import SobreNos from '../../ALUNO/screens/sobreNos';

const CustomDrawerLabel = () => (
  <Text style={{ color: 'red', marginLeft: -18 }}>Sair</Text>
);

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
          drawerStyle: {
            width: '55%',
            backgroundColor: '#FFF',
          },
        }}
        drawerContent={props => (
          <View style={{flex: 1}}>
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

                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => navigation.navigate('telaInicial')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="home" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Início</Text>
                  </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => navigation.navigate('perfil')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="user" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Perfil</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => navigation.navigate('recomendacao')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="star" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Recomendações</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => navigation.navigate('biblioteca')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="book-open" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Biblioteca</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => navigation.navigate('informacoesreserva')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="calendar" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Reservas</Text>
                    </View>
                </Pressable>
                {/* <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => navigation.navigate('notificacoes')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="bell" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Notificações</Text>
                    </View>
                </Pressable> */}
                <Pressable 
                  style={
                    ({ pressed }) => pressed ?
                      [StylesButtonDrawer.buttonDrawer, StylesButtonDrawer.TouchPress]
                      :
                      StylesButtonDrawer.buttonDrawer
                  }
                  onPress={() => navigation.navigate('informacoescontato')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="info" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Informações</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={
                    ({ pressed }) => pressed ?
                      [StylesButtonDrawer.buttonDrawer, StylesButtonDrawer.TouchPress]
                      :
                      StylesButtonDrawer.buttonDrawer
                  }
                  onPress={() => navigation.goBack()}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="logout" size={18} color="red" />
                      <Text style={StylesButtonDrawer.labelSair}>Sair</Text>
                    </View>
                </Pressable>

            </View>

            </DrawerContentScrollView>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Desenvolvido por </Text>
                <Pressable 
                  onPress={() => navigation.navigate('sobrenos')}
                  style={
                  ({pressed}) => pressed ?
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
          name="telaInicial"
          component={TelaInicial}
        />
        <Drawer.Screen
          name="perfil"
          component={Perfil}
        />
        <Drawer.Screen
          name="recomendacao"
          component={Recomendacao}
        />
        <Drawer.Screen
          name="biblioteca"
          component={Biblioteca}
        />
        <Drawer.Screen
          name="informacoesreserva"
          component={InformacoesReserva}
        />
        {/* <Drawer.Screen
          name="notificacoes"
          component={Notificacoes}
        /> */}
        <Drawer.Screen
          name="informacoescontato"
          component={InformacoesContato}
        />
        <Drawer.Screen 
          name="login" 
          component={Login}
        />


        <Drawer.Screen
          name="perfilEditar"
          component={PerfilEditar}
        />
        <Drawer.Screen
          name="infolivrorecomendacao"
          component={InfoLivroRecomendacao}
        />
        <Drawer.Screen
          name="addRecomendacao"
          component={AddRecomendacao}
        />
        <Drawer.Screen
          name="infolivrobiblioteca"
          component={InfoLivroBiblioteca}
        />
        <Drawer.Screen
          name="reservarlivro"
          component={ReservarLivro}
        />
        <Drawer.Screen
        name="sobrenos"
        component={SobreNos}
      />
      </Drawer.Navigator>
  );
}
