import { StyleSheet, Text, View } from 'react-native'; 
// import { StatusBar } from 'expo-status-bar';

// import LognIn from './src/LognIn';
// import SignUp from './src/signUp';
<<<<<<< HEAD
// import EsqueceuSenha1 from './src/esqueceuSenha1';
// import EsqueceuSenha2 from './src/esqueceuSenha2';
// import TelaInicial from './src/telaInicial';
// import Perfil from './src/perfil';
// import Recomendacao from './src/recomendacao';
import InformacaoLivro from './src/infoLivroRecomendacao';
=======
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
import CalendarScreen from './src/ALUNO/reservarLivro';
>>>>>>> 51464513304e6316d35092203fb28ee4ec791c3c

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarScreen /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
