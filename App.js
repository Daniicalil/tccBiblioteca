import { StyleSheet, View } from 'react-native'; 
import 'react-native-gesture-handler';

import NavegacaoAluno from './src/ALUNO/rotas/stackNavigation';
import NavegacaoProfessor from './src/PROFESSOR/rotas/stackNavigation';
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
    backgroundColor: '#FFF',
  },
});
