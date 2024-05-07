import { StyleSheet, Dimensions } from 'react-native';
// import Shape from 'react-clip-path';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: '100%',
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
    width: '80%',
  },
});

export default styles;