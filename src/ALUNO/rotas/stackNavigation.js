import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/login';
import SignUp from '../screens/signUp';
import EsqueceuSenha1 from '../screens/esqueceuSenha1';
import EsqueceuSenha2 from '../screens/esqueceuSenha2';
import TelaInicial from '../screens/telaInicial';
import Perfil from '../screens/perfil';
import PerfilEditar from '../screens/perfilEditar';
import Recomendacao from '../screens/recomendacao';
import InfoLivroRecomendacao from '../screens/infoLivroRecomendacao';
import Biblioteca from '../screens/biblioteca';
import InfoLivroBiblioteca from '../screens/infoLivroBiblioteca';
import ReservarLivro from '../screens/reservarLivro';
import InformacoesReserva from '../screens/informacoesReserva';
import Notificacoes from '../screens/notificacoes';
import InformacoesContato from '../screens/infoContato';
import SobreNos from '../screens/sobreNos';

import NavegacaoDrawer from './drawerNavigation';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
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
{/* 
                    <Stack.Screen name="telaInicial" component={TelaInicial} /> 
                    <Stack.Screen name="perfil" component={Perfil} />
                    <Stack.Screen name="perfilEditar" component={PerfilEditar} />
                    <Stack.Screen name="recomendacao" component={Recomendacao} />
                    <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao} />
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
