import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Importando useNavigation e DrawerActions

import TelaInicial from '../../ALUNO/screens/telaInicial';
import Perfil from '../../ALUNO/screens/perfil';
import Selecao from '../screens/selecao';
import Recomendacao from '../../ALUNO/screens/recomendacao';
import Biblioteca from '../screens/biblioteca';
import InformacoesReserva from '../../ALUNO/screens/informacoesReserva';
import Notificacoes from '../../ALUNO/screens/notificacoes';
import Emprestimos from '../screens/emprestimos';
import InformacoesContato from '../screens/infoContato';
import Login from '../../ALUNO/screens/login';


import PerfilEditar from '../../ALUNO/screens/perfilEditar';
import InfoLivroRecomendacao from '../../ALUNO/screens/infoLivroRecomendacao';
import AddBiblioteca from '../screens/addBiblioteca';
import AddLivroExistente from '../screens/addLivroExistente';
import AddLivroNovo from '../screens/addLivroNovo';
import InfoLivroBiblioteca from '../screens/infoLivroBiblioteca';
import ReservarLivro from '../../ALUNO/screens/reservarLivro';
import InformacoesContatoEditar from '../screens/infoContatoEditar';
import SobreNos from '../../ALUNO/screens/sobreNos';

import StylesButtonDrawer from './stylesDrawer';

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

export default function NavegacaoDrawer() {
  const navigation = useNavigation(); // Usando o hook useNavigation

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
                source={require('../../../assets/imgs/logocomescrita.png')}
                style={styles.drawerImage}
              />
            </View>

            {/* Drawer Items */}
            {/* <DrawerItemList {...props} /> */}

            {/* Itens listagem drawer */}
            <View>

                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Início')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="home" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Início</Text>
                  </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Perfil')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="user" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Perfil</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Seleção')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="directions" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Seleção</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Recomendações')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="star" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Recomendações</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Biblioteca')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="book-open" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Biblioteca</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('informacoesreserva')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="calendar" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Reservas</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Notificações')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="bell" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Notificações</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={StylesButtonDrawer.buttonDrawer}
                  onPress={() => props.navigation.navigate('Empréstimos')}>
                    <View style={StylesButtonDrawer.icon}>
                      <SimpleLineIcons name="notebook" size={20} color="black" />
                      <Text style={StylesButtonDrawer.label}>Empréstimos</Text>
                    </View>
                </Pressable>
                <Pressable 
                  style={
                    ({ pressed }) => pressed ?
                      [StylesButtonDrawer.buttonDrawer, StylesButtonDrawer.TouchPress]
                      :
                      StylesButtonDrawer.buttonDrawer
                  }
                  onPress={() => props.navigation.navigate('Informações')}>
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
                  onPress={() => props.navigation.navigate('Login')}>
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
              style={({ pressed }) =>
                pressed
                  ? [styles.touchText, styles.TouchPress]
                  : styles.touchText
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
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
      />
      <Drawer.Screen
        name="Seleção"
        component={Selecao}
      />
      <Drawer.Screen
        name="Recomendações"
        component={Recomendacao}
      />
      <Drawer.Screen
        name="Biblioteca"
        component={Biblioteca}
      />
      <Drawer.Screen
        name="Reservas"
        component={InformacoesReserva}
      />
      <Drawer.Screen
        name="Notificações"
        component={Notificacoes}
      />
      <Drawer.Screen
        name="Empréstimos"
        component={Emprestimos}
      />
      <Drawer.Screen
        name="Informações"
        component={InformacoesContato}
      />
      <Drawer.Screen
        name="Sair"
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
        name="addBiblioteca"
        component={AddBiblioteca}
      />
      <Drawer.Screen
        name="addLivroExistente"
        component={AddLivroExistente}
      />
      <Drawer.Screen
        name="addLivroNovo"
        component={AddLivroNovo}
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
        name="informacoescontatoEditar"
        component={InformacoesContatoEditar}
      />
    </Drawer.Navigator>
  );
}
                    // <Stack.Screen name="perfilEditar" component={PerfilEditar} />
                    // <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao} />
                    // <Stack.Screen name="addBiblioteca" component={AddBiblioteca} />
                    // <Stack.Screen name="addLivroExistente" component={AddLivroExistente} />
                    // <Stack.Screen name="addLivroNovo" component={AddLivroNovo} />
                    // <Stack.Screen name="infolivrobiblioteca" component={InfoLivroBiblioteca} />
                    // <Stack.Screen name="reservarlivro" component={ReservarLivro} />
                    // <Stack.Screen name="informacoescontatoEditar" component={InformacoesContatoEditar} />