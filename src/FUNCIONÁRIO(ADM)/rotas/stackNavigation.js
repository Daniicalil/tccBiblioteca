import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../../ALUNO/screens/login';
import SignUp from '../../ALUNO/screens/signUp';
import EsqueceuSenha1 from '../../ALUNO/screens/esqueceuSenha1';
import EsqueceuSenha2 from '../../ALUNO/screens/esqueceuSenha2';
import TelaInicial from '../screens/telaInicial';
import Perfil from '../../ALUNO/screens/perfil';
import PerfilEditar from '../../ALUNO/screens/perfilEditar';
import Recomendacao from '../screens/recomendacao';
import InfoLivroRecomendacao from '../screens/infoLivroRecomendacao';
import Biblioteca from '../screens/biblioteca';
import AddBiblioteca from '../screens/addBiblioteca';
import AddLivroExistente from '../screens/addLivroExistente';
import AddLivroNovo from '../screens/addLivroNovo';
import InfoLivroBiblioteca from '../screens/infoLivroBiblioteca';
import ReservarLivro from '../screens/reservarLivro';
import InformacoesReserva from '../screens/informacoesReserva';
import Notificacoes from '../../ALUNO/screens/notificacoes';
import InformacoesContato from '../screens/infoContato';
import InformacoesContatoEditar from '../screens/infoContatoEditar';


import NavegacaoDrawer from './drawerNavigation';

const Stack = createNativeStackNavigator();

export default function NavegacaoADM() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
             screenOptions={{
                headerShown: false // Aqui é onde você desativa o cabeçalho
              }}
                initialRouteName="Login">
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signUp" component={SignUp} />
                <Stack.Screen name="esqueceuSenha1" component={EsqueceuSenha1} />
                <Stack.Screen name="esqueceuSenha2" component={EsqueceuSenha2} />
                <Stack.Screen name="Home" component={NavegacaoDrawer} />
                <Stack.Screen name="telaInicial" component={TelaInicial} />
                <Stack.Screen name="perfil" component={Perfil} />
                <Stack.Screen name="perfilEditar" component={PerfilEditar} />
                <Stack.Screen name="recomendacao" component={Recomendacao} />
                <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao} />
                <Stack.Screen name="biblioteca" component={Biblioteca} />
                <Stack.Screen name="addBiblioteca" component={AddBiblioteca} />
                <Stack.Screen name="addLivroExistente" component={AddLivroExistente} />
                <Stack.Screen name="addLivroNovo" component={AddLivroNovo} />
                <Stack.Screen name="infolivrobiblioteca" component={InfoLivroBiblioteca} />
                <Stack.Screen name="reservarlivro" component={ReservarLivro} />
                <Stack.Screen name="informacoesreserva" component={InformacoesReserva} />
                <Stack.Screen name="notificacoes" component={Notificacoes} />
                <Stack.Screen name="informacoescontato" component={InformacoesContato} />
                <Stack.Screen name="informacoescontatoEditar" component={InformacoesContatoEditar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
