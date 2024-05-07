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
    marginBottom: 20,
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
    marginTop: '4%',
  },
  paragraph: {
    textAlign: 'auto',
    marginTop: 20,
    marginBottom: 15,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
  },
  quadrado: {
    width: '26%', 
    height: 110, 
    borderRadius: 10,
    backgroundColor: '#DAD7D7',
    marginTop: '4%',
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
});

export default styles;