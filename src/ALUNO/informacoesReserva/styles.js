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
  lineSquare: {
    width: '90%',
    height: 410,
    backgroundColor: 'transparent', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
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
    top: 40,
    mariginVertical: 10,
  },
 
  infoLivro: {
    flexDirection: 'row',
  },
  dadosReservado: {
    fontSize: 14,
    marginBottom: 8,
    top: 50,
    textAlign: 'justify',
    width: '89%',
    left: 35,
  },
  reservado: {
    paddingTop: 5,
    paddingBottom: 2,
  },
  dataReserva: {
    paddingTop: 5,
    paddingBottom: 2,
  },
  periodoReserva: {
    paddingTop: 5,
    paddingBottom: 18,
  },
  conf: {
    paddingTop: 55,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonConf: {
    backgroundColor: '#FF6F61',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 16,
    width: '30%',
  },
  buttonTextConfReserv: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonTextCancReserv: {
    textAlign: 'center',
  },
  buttonCanc: {
    backgroundColor: '#FFF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#000',
    width: '30%',
  },
  buttonsReserva: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
  observacao: {
    opacity: 0.5,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    fontSize: 12,
  },
  squareQuant: {
    width: 70,
    height: 45,
    backgroundColor: 'transparent', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
  },
});

export default styles;