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
    color: '#fff',
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
    width: '40%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    alignSelf: 'center',
  },
});

export default styles;