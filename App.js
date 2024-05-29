import { StyleSheet, Text, View } from 'react-native'; 
// import { StatusBar } from 'expo-status-bar';

// import LognIn from './src/LognIn/index';
// import SignUp from './src/signUp';
// import EsqueceuSenha1 from './src/ALUNO/esqueceuSenha1';
// import EsqueceuSenha2 from './src/ALUNO/esqueceuSenha2';
// import TelaInicial from './src/ALUNO/telaInicial';
// import Perfil from './src/ALUNO/perfil';
// import Recomendacao from './src/ALUNO/recomendacao';
// import InfoLivroRecomendacao from './src/ALUNO/infoLivroRecomendacao';
// import InfoLivroBiblioteca from './src/ALUNO/infoLivroBiblioteca';
import InformacoesReserva from './src/ALUNO/informacoesReserva';

export default function App() {
  return (
    <View style={styles.container}>
      <InformacoesReserva /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
