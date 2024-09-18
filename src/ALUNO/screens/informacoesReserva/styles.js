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
  barraPesq: {
    backgroundColor: '#FFF',
    width: '85%',
    marginBottom: '2%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 20,
  },
  placeholderStyle: {
    opacity: 0.5, 
  },
  iconStyle: {
    opacity: 0.5, 
  },
  lineSquare: {
    width: '90%',
    backgroundColor: 'transparent', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
    marginBottom: 20,
  },
  infoLivro: {
    display: 'flex',
    flexDirection: 'row',
  },
  livro: {
    flexDirection: 'column',
    marginTop: 18,
    marginLeft: 14,
  },
  capaLivros: {
    top: 20,
    width: 55,
    height: 80,
    left: 35,
    borderRadius: 4,
  },
  sectionTitle: {
    top: 20,
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
  dadosReservado: {
    fontSize: 14,
    marginBottom: 8,
    top: 50,
    textAlign: 'justify',
    width: '89%',
    left: 25,
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
  avisoDevolucao: {
    color: '#FF735C',
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    margin: 0,
  },
  conf: {
    paddingTop: 55,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonsReserva: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
  buttonConf: {
    backgroundColor: '#FF6F61',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 16,
    width: '30%',
  },
  btnConfPress: {
    opacity: 0.5,
  },
  buttonTextConfReserv: {
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
  cancellation: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },

  cancellationText: {
    color: 'black',
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnCancPress: {
    opacity: 0.5,
  },
  buttonTextCancReserv: {
    textAlign: 'center',
  },
  observacao: {
    opacity: 0.5,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default styles;