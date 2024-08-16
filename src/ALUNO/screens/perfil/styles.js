import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  fotoPadraoPerfil: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    paddingBottom: '5',
    borderColor: '#CCC',
    borderWidth: 1,
    objectFit: 'cover',
    width: 'auto',
    height: 'auto',
  },
  texto: {
    marginLeft: 70, 
  },
  input: {
    width: '75%',
    height: 42,
    backgroundColor: '#FFF',
    marginTop: 2,
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CCC',
    color: '#000',
    alignSelf: 'center',
  },
  radioButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // passwordContainer: {
  //   flexDirection: 'row',
  //   alignSelf: 'center',
  // },
  // passwordVisibilityIcon: {
  //   padding: 10,
  //   position: 'absolute',
  //   right: 8,
  //   bottom: 8,
  // },
  contentContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  seletores: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioLabel: {
    marginLeft: 0,
    fontSize: 14,
  },
  RadioButton: {
    display: 'flex',
    alignItems: 'center',
  },
  touchText: {
    color: '#FF735C',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 4,
    marginTop: 5,
  },
  TouchPress: {
    opacity: 0.5,
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