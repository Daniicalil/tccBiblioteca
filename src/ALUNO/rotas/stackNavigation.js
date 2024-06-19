import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import EsqueceuSenha1 from '../pages/esqueceuSenha1';
import EsqueceuSenha2 from '../pages/esqueceuSenha2';
import TelaInicial from '../pages/telaInicial';
import Perfil from '../pages/perfil';
import Recomendacao from '../pages/recomendacao';
import InfoLivroRecomendacao from '../pages/infoLivroRecomendacao';
import Biblioteca from '../pages/biblioteca';
import InfoLivroBiblioteca from '../pages/infoLivroBiblioteca';
import ReservarLivro from '../pages/reservarLivro';
import InformacoesReserva from '../pages/informacoesReserva';
import Notificacoes from '../pages/notificacoes';
import InformacoesContato from '../pages/infoContato';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="EsqueceuSenha1" component={EsqueceuSenha1} />
                <Stack.Screen name="EsqueceuSenha2" component={EsqueceuSenha2} />
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="perfil" component={Perfil} />
                <Stack.Screen name="recomendacao" component={Recomendacao} />
                <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao} />
                <Stack.Screen name="biblioteca" component={Biblioteca} />
                <Stack.Screen name="infolivrobiblioteca" component={InfoLivroBiblioteca} />
                <Stack.Screen name="reservarlivro" component={ReservarLivro} />
                <Stack.Screen name="informacoesreserva" component={InformacoesReserva} />
                <Stack.Screen name="notificacoes" component={Notificacoes} />
                <Stack.Screen name="informacoescontato" component={InformacoesContato} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
