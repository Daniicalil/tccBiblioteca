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
    textAlign: 'auto',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
  },
  quadrado: {
    width: '29%', 
    height: 120, 
    borderRadius: 10,
    backgroundColor: '#DAD7D7',
    marginTop: '3%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  rowQuadrados1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: '3%',
    marginLeft: '3%',
  },
  rowQuadrados2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: '3%',
    marginLeft: '3%',
  },
  curso: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 6,
  },
  capaLivros: {
    width: '30%',
    height: '53%',
    alignSelf: 'center',
  },
  livros: {
    fontSize: 11,
    textAlign: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  importanciaFrase: {
    width: '85%', 
    height: 100, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    // marginTop: '4%',
  },
});

export default styles;