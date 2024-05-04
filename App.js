import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LognIn from './src/LognIn/index';
// import SignUp from './src/signUp/index';
// import EsqueceuSenha1 from './src/esquec1/index';
// import EsqueceuSenha2 from './src/esquec2/index';
// import TelaInicial from './src/telaInicial/index';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' transLucent={false} />
      <LognIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
