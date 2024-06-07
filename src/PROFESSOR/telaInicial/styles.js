import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    alignItems: 'center'
  },
  retangGreen: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#3F7263',
    justifyContent: 'space-between',
  },
  imgLogo: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8
  },
  imgEtec: {
    width: '15%',
    height: '25%',
    bottom: 8,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 27,
  },
  retangOrange: {
    width: '100%', 
    height: 19, 
    backgroundColor: '#FF735C',
    marginBottom: '3%',
  },
  barraPesq: {
    backgroundColor: '#DAD7D7',
    width: '75%',
  },
  funcionamento: {
    width: '85%', 
    height: 180, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    marginTop: '3%',
  },
  imgFunc: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
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
  importancia: {
    width: '85%', 
    height: 180, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    marginTop: '5%',
    alignSelf: 'center',
    marginBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imgImportancia: {
    width: '90%',
    height: '100%',
  },
});

export default styles;
