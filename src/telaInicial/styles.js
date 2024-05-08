import { StyleSheet, Dimensions } from 'react-native';
import { ImportanciaFrase } from './forms';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: '100%',
  },
  inicio: {
    alignItems: 'center'
  },
  retangGreen: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#3F7263',
  },
  retangOrange: {
    width: '100%', 
    height: 19, 
    backgroundColor: '#FF735C',
    marginBottom: '3%',
  },
  barraPesq: {
    borderRadius: 30,
    backgroundColor: '#DAD7D7',
    height: 45,
    color: '#929292',
    width: '75%',
  },
  funcionamento: {
    width: '85%', 
    height: 180, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    marginTop: '3%',
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
  },
  quadrado: {
    width: '28%', 
    height: 105, 
    borderRadius: 10,
    backgroundColor: '#DAD7D7',
    marginTop: '3%',
    marginLeft: 6,
    marginRight: 6,
  },
  rowQuadrados1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
    marginLeft: '3%',
  },
  rowQuadrados2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
    marginLeft: '3%',
  },
  curso: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: '2%',
  },
  capaLivros: {
    width: 35,
    height: 54,
    alignSelf: 'center',
  },
  livros: {
    fontSize: 10,
    textAlign: 'center',
    marginRight: '3%',
    marginLeft: '3%',
  },
  importanciaFrase: {
    width: '85%', 
    height: 180, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    marginTop: '5%',
    alignSelf: 'center',
  },
  componentsMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;