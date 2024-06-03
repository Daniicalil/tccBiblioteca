import { StyleSheet, Text, View } from 'react-native'; 
// import { StatusBar } from 'expo-status-bar';

// import LognIn from './src/LognIn';
// import SignUp from './src/signUp';
// import EsqueceuSenha1 from './src/esqueceuSenha1';
// import EsqueceuSenha2 from './src/esqueceuSenha2';
// import TelaInicial from './src/telaInicial';
// import Perfil from './src/perfil';
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
