import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LognIn from '../lognIn';
import SignUp from '../signUp';
import EsqueceuSenha1 from '../esqueceuSenha1';
import EsqueceuSenha2 from '../esqueceuSenha2';
import TelaInicial from '../telaInicial';
import Perfil from '../perfil';
import Recomendacao from '../recomendacao';
import InfoLivroRecomendacao from '../infoLivroRecomendacao';
import Biblioteca from '../biblioteca';
import InfoLivroBiblioteca from '../infoLivroBiblioteca';
import ReservarLivro from '../reservarLivro';
import InformacoesReserva from '../informacoesReserva';
import Notificacoes from '../notificacoes';
import InformacoesContato from '../infoContato';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="lognin" component={LognIn}/>
                <Stack.Screen name="signup" component={SignUp}/>
                <Stack.Screen name="esqueceusenha1" component={EsqueceuSenha1}/>
                <Stack.Screen name="esqueceusenha2" component={EsqueceuSenha2}/>
                <Stack.Screen name="telainicial" component={TelaInicial}/>
                <Stack.Screen name="perfil" component={Perfil}/>
                <Stack.Screen name="recomendacao" component={Recomendacao}/>
                <Stack.Screen name="infolivrorecomendacao" component={InfoLivroRecomendacao}/>
                <Stack.Screen name="biblioteca" component={Biblioteca}/>
                <Stack.Screen name="infolivrobiblioteca" component={InfoLivroBiblioteca}/>
                <Stack.Screen name="reservarlivro" component={ReservarLivro}/>
                <Stack.Screen name="informacoesreserva" component={InformacoesReserva}/>
                <Stack.Screen name="notificacoes" component={Notificacoes}/>
                <Stack.Screen name="informacoescontato" component={InformacoesContato}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}