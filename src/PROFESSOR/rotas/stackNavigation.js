import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LognIn from '../../PROFESSOR/lognIn';
import SignUp from '../../PROFESSOR/signUp';
import EsqueceuSenha1 from '../../PROFESSOR/esqueceuSenha1';
import EsqueceuSenha2 from '../../PROFESSOR/esqueceuSenha2';
import TelaInicial from '../../PROFESSOR/telaInicial';
import Perfil from '../../PROFESSOR/perfil';
import Recomendacao from '../../PROFESSOR/recomendacao';
import InfoLivroRecomendacao from '../../PROFESSOR/infoLivroRecomendacao';
import Biblioteca from '../../PROFESSOR/biblioteca';
import InfoLivroBiblioteca from '../../PROFESSOR/infoLivroBiblioteca';
import ReservarLivro from '../../PROFESSOR/reservarLivro';
import InformacoesReserva from '../../PROFESSOR/informacoesReserva';
import Notificacoes from '../../PROFESSOR/notificacoes';
import InformacoesContato from '../../PROFESSOR/infoContato';

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