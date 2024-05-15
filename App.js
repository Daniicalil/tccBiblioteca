import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import LognIn from './src/LognIn/index';
// import SignUp from './src/signUp/index';
// import EsqueceuSenha1 from './src/esquec1/index';
// import EsqueceuSenha2 from './src/esquec2/index';
import TelaInicial from './src/telaInicial/index';
// import Perfil from './src/perfil/index';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Perfil />
    // </View>
    <SafeAreaProvider>
      <TelaInicial />
    </SafeAreaProvider>
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
