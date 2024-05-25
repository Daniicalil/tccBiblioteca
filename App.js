import { StyleSheet, Text, View } from 'react-native'; 
// import { StatusBar } from 'expo-status-bar';

// import LognIn from './src/LognIn/index';
// import SignUp from './src/signUp';
// import EsqueceuSenha1 from './src/esquec1/index';
// import EsqueceuSenha2 from './src/esquec2/index';
// import TelaInicial from './src/telaInicial/index';
// import Perfil from './src/perfil/index';
// import Recomendacao from './src/recomendacao';
import InformacaoLivro from './src/infoLivroRecomendacao';

export default function App() {
  return (
    <View style={styles.container}>
      <InformacaoLivro /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
