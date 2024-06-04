import { StyleSheet, Text, View } from 'react-native'; 
// import { StatusBar } from 'expo-status-bar';

// import LognIn from './src/ALUNO/lognIn';
// import SignUp from './src/ALUNO/signUp';
// import EsqueceuSenha1 from './src/ALUNO/esqueceuSenha1';
// import EsqueceuSenha2 from './src/ALUNO/esqueceuSenha2';
// import TelaInicial from './src/ALUNO/telaInicial';
// import Perfil from './src/ALUNO/perfil';
// import Recomendacao from './src/ALUNO/recomendacao';
// import InfoLivroRecomendacao from './src/ALUNO/infoLivroRecomendacao';
// import InfoLivroBiblioteca from './src/ALUNO/infoLivroBiblioteca';
// import InformacoesReserva from './src/ALUNO/informacoesReserva';
// import Notificacoes from './src/ALUNO/notificacoes';
// import InformacoesContato from './src/ALUNO/infoContato';
import ReservarLivro from './src/ALUNO/reservarLivro';
import createDrawerNavigator from './src/ALUNO/signUp';

export default function App() {
  return (
    <View style={styles.container}>
      <createDrawerNavigator /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
