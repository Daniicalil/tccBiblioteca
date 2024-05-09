import { StyleSheet, Dimensions } from 'react-native';

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
  paragraph: {
    marginTop: 10,
    marginBottom: 5,
    // fontWeight: 600,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#929292',
  },
  quadrado: {
    width: '28%', 
    height: 112, 
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
    marginBottom: '10%',
  },
  componentsMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;