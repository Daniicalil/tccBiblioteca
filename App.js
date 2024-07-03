import { StyleSheet, View } from 'react-native'; 
import 'react-native-gesture-handler';

// import Login from './src/ALUNO/screens/login';
// import SignUp from './src/ALUNO/screens/signUp';
// import EsqueceuSenha1 from './src/ALUNO/screens/esqueceuSenha1';
// import EsqueceuSenha2 from './src/ALUNO/screens/esqueceuSenha2';
// import TelaInicial from './src/ALUNO/screens/telaInicial';**
// import Perfil from './src/ALUNO/screens/perfil';**
// import PerfilEditar from './src/ALUNO/screens/perfilEditar';**
// import Recomendacao from './src/ALUNO/screens/recomendacao';**
// import InfoLivroRecomendacao from './src/ALUNO/screens/infoLivroRecomendacao';
// import AddRecomendacao from './src/PROFESSOR/screens/addRecomendacao';
// import Biblioteca from './src/ALUNO/screens/biblioteca';**
// import InfoLivroBiblioteca from './src/ALUNO/screens/infoLivroBiblioteca';**
// import InformacoesReserva from './src/ALUNO/screens/informacoesReserva';**
// import Notificacoes from './src/ALUNO/screens/notificacoes';**
// import InformacoesContato from './src/ALUNO/screens/infoContato';**
// import ReservarLivro from './src/ALUNO/screens/reservarLivro';**


// import Navegacao from './src/ALUNO/rotas/stackNavigation';
// import Navegacao from './src/ALUNO/rotas/stackNavigation';
// import NavegacaoProfessor from './src/PROFESSOR/rotas/stackNavigation';
import NavegacaoADM from './src/FUNCIONÁRIO(ADM)/rotas/stackNavigation';


export default function App() {
  return (
    <View style={styles.container}>
      <NavegacaoADM /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
