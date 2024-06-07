import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    alignItems: 'center',
  },
  retangGreen: {
    width: '100%', 
    height: 60, 
    backgroundColor: '#3F7263',
  },
  imgLogo: {
    width: 80,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  imgEtec: {
    width: 65,
    height: 25,
    bottom: 12,
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
  titlePagina: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  icon: {
    position: 'absolute',
    left: 28,
    top: 10
  },
  paragraph: {
    marginTop: '3%',
    marginBottom: '6%',
    // fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    left: 70
  },
  imgcontato: {
    width: '35%',
    height: '35%',
    paddingTop: 10,
  },
  escola: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 20,
  },
  informacoes: {
    top: 20,
    fontSize: 14,
    lineHeight: 25,
  },

});

export default styles;