// index.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de Perfil</Text>
    </View>
  );
}

function RecommendationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de Recomendações</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={require('./path/to/your/image.png')} style={styles.logo} />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => props.navigation.navigate('Início')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Recomendações" component={RecommendationsScreen} />
        {/* Adicione outras telas aqui */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  logo: {
    width: 100,
    height: 100,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 20,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
});
