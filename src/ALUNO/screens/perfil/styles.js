import { StyleSheet } from 'react-native';

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
  fotoPadraoPerfil: {
    backgroundColor: '#3F7263',
    alignSelf: 'center',
    paddingBottom: '5'
  },
  texto: {
    marginLeft: 90, 
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginTop: 2,
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#929292',
    alignSelf: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  passwordVisibilityIcon: {
    padding: 10,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  seletores: {
    flexDirection: 'row',
  },
  viewEditar: {
    width: '100%', 
    alignItems: 'flex-end', 
    paddingRight: 20, 
    paddingBottom: 10,
  },
  botaoEditar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F7263',
    // overflow: 'hidden',
    // position: 'absolute',
    // right: 50,
    // bottom: 50,
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