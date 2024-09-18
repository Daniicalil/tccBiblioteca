import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
  barraPesq: {
    backgroundColor: '#FFF',
    width: '85%',
    marginBottom: '4%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  placeholderStyle: {
    opacity: 0.5, 
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
  lineSquare: {
    width: '90%',
    height: 300,
    backgroundColor: 'transparent', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
  },
  infoLivro: {
    flexDirection: 'row',
  },
  capaLivros: {
    top: 25,
    width: 45,
    height: 70,
    left: 35,
  },
  sectionTitle: {
    top: 40,
    left: 22,
  },
  titleLivro: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
  },
  autor: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
    top: 5,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '92%',
    alignSelf: 'center',
    opacity: 0.2,
    top: 20,
    mariginVertical: 10,
  },
  dados: {
    fontSize: 14,
    marginBottom: 8,
    top: 20,
    textAlign: 'justify',
    width: '89%',
    left: 35,
  },
  nome: {
    paddingTop: 5,
    paddingBottom: 2,
  },
  dataCadastro: {
    paddingTop: 5,
    paddingBottom: 2,
  },
  email: {
    paddingTop: 5,
    paddingBottom: 18,
  },
  conf: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonsSelecao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
  buttonConf: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 16,
    width: '30%',
  },
  btnConfPress: {
    opacity: 0.5,
  },
  buttonTextConfSel: {
    color: '#FFF',
    textAlign: 'center',
  },
  confirmation: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  confirmationText: {
    color: 'black',
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    width: '50%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    borderRadius: 8,
    alignSelf: 'center',
  },
  pickerFocused: {
    borderWidth: 1,
    borderColor: '#FF735C'
  },
  pickerUnfocused: {
    borderWidth: 1,
    borderColor: '#CCC',
  },
  // pickerContainer:hover,
  // pickerContainer:focus {
  //   borderColor: '#FF735C',
  //   outline: none,
  // },
  errorMessage: {
    color: 'red',
    marginBottom: 8,
    marginTop: -6,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default styles;