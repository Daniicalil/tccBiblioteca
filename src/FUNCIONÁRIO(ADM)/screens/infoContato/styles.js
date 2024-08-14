import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inicio: {
    alignItems: 'center',
  },
  retangGreen: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#3F7263',
    justifyContent: 'space-between',
  },
  imgLogo: {
    width: '12%',
    height: '42%',
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
    fontSize: 18,
    flex: 1,
    left: 70
  },
  imgcontato: {
    width: 220,
    height: 140,
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
  viewEditar: {
    width: '100%', 
    alignItems: 'flex-end', 
    paddingRight: 20, 
    paddingBottom: 10,
    flex: 1,
  },
  botaoEditar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F7263',
    // overflow: 'hidden',
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  iconeEditar: {
    width: '65%',
    height: '65%',
    resizeMode: 'cover',
  },
  btnPress: {
    backgroundColor: '#FF735C',
  },
});

export default styles;