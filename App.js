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
// import Biblioteca from './src/ALUNO/biblioteca';
// import InfoLivroBiblioteca from './src/ALUNO/infoLivroBiblioteca';
// import InformacoesReserva from './src/ALUNO/informacoesReserva';
// import Notificacoes from './src/ALUNO/notificacoes';
// import InformacoesContato from './src/ALUNO/infoContato';
// import ReservarLivro from './src/ALUNO/reservarLivro';
// import MainNavigation from './src/ALUNO/sidebar';

// import LognIn from './src/PROFESSOR/lognIn';
// import SignUp from './src/PROFESSOR/signUp';
// import EsqueceuSenha1 from './src/PROFESSOR/esqueceuSenha1';
// import EsqueceuSenha2 from './src/PROFESSOR/esqueceuSenha2';
// import TelaInicial from './src/PROFESSOR/telaInicial';
// import Perfil from './src/PROFESSOR/perfil';
// import Recomendacao from './src/PROFESSOR/recomendacao';
// import InfoLivroRecomendacao from './src/PROFESSOR/infoLivroRecomendacao';
// import Biblioteca from './src/PROFESSOR/biblioteca'; 
// import InfoLivroBiblioteca from './src/PROFESSOR/infoLivroBiblioteca';
// import InformacoesReserva from './src/PROFESSOR/informacoesReserva';
// import Notificacoes from './src/PROFESSOR/notificacoes';
// import InformacoesContato from './src/PROFESSOR/infoContato';
// import ReservarLivro from './src/PROFESSOR/reservarLivro';
import MainNavigation from './src/PROFESSOR/sidebar';

// import Navegacao from './src/ALUNO/rotas';
// import Navegacao from './src/PROFESSOR/rotas';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
