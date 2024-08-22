import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../../ALUNO/screens/login';
import SignUp from '../../ALUNO/screens/signUp';
import EsqueceuSenha1 from '../../ALUNO/screens/esqueceuSenha1';
import EsqueceuSenha2 from '../../ALUNO/screens/esqueceuSenha2';
import TelaInicial from '../../ALUNO/screens/telaInicial';
import Perfil from '../../ALUNO/screens/perfil';
import PerfilEditar from '../../ALUNO/screens/perfilEditar';
import Recomendacao from '../screens/recomendacao';
import InfoLivroRecomendacao from '../screens/infoLivroRecomendacao';
import AddRecomendacao from '../screens/addRecomendacao';
import Biblioteca from '../../ALUNO/screens/biblioteca';
import InfoLivroBiblioteca from '../../ALUNO/screens/infoLivroBiblioteca';
import ReservarLivro from '../../ALUNO/screens/reservarLivro';
import InformacoesReserva from '../../ALUNO/screens/informacoesReserva';
import Notificacoes from '../../ALUNO/descarte/notificacoes';
import InformacoesContato from '../../ALUNO/screens/infoContato';
import SobreNos from '../../ALUNO/screens/sobreNos';

import NavegacaoDrawer from './drawerNavigation';

const Stack = createNativeStackNavigator();

export default function NavegacaoProfessor() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
             screenOptions={{
                headerShown: false // Aqui é onde você desativa o cabeçalho
              }}
                initialRouteName="login">
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="signUp" component={SignUp} />
                    <Stack.Screen name="esqueceuSenha1" component={EsqueceuSenha1} />
                    <Stack.Screen name="esqueceuSenha2" component={EsqueceuSenha2} />
                    <Stack.Screen name="Home" component={NavegacaoDrawer} />


                    {/* <Stack.Screen name="telaInicial" component={TelaInicial} />
                    <Stack.Screen name="perfil" component={Perfil} />
                    <Stack.Screen name="perfilEditar" component={PerfilEditar} />
                    <Stack.Screen name="recomendacao" component={Recomendacao} />
                    <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao} />
                    <Stack.Screen name="addRecomendacao" component={AddRecomendacao} />
                    <Stack.Screen name="biblioteca" component={Biblioteca} />
                    <Stack.Screen name="infolivrobiblioteca" component={InfoLivroBiblioteca} />
                    <Stack.Screen name="reservarlivro" component={ReservarLivro} />
                    <Stack.Screen name="informacoesreserva" component={InformacoesReserva} />
                    <Stack.Screen name="notificacoes" component={Notificacoes} />
                    <Stack.Screen name="informacoescontato" component={InformacoesContato} />
                    <Stack.Screen name="sobrenos" component={SobreNos} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
