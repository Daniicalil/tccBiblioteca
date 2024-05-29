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
  lineSquare: {
    width: '90%',
    height: 580,
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
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '92%',
    alignSelf: 'center',
    opacity: 0.2,
    top: 40,
    mariginVertical: 10,
  },
  sectionTitle: {
    top: 40,
    left: 22,
  },
  infoLivro: {
    flexDirection: 'row',
  },
  autor: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
    top: 5,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
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
  dadosReservado: {
    fontSize: 14,
    marginBottom: 8,
    top: 50,
    textAlign: 'justify',
    width: '89%',
    left: 35,
  },
  reservado: {
    lineHeight: 25,
  },
  dataReserva: {
    lineHeight: 25,
  },
  periodoReserva: {
    lineHeight: 25,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
    top: 10
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 16,
   
  },
  buttonConf: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 16,
    color: '#fff',
  },
  buttonCanc: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonsReserva: {
    flexDirection: 'row',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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