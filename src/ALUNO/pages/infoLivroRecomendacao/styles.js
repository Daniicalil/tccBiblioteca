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
  title: {
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
    height: 610,
    backgroundColor: 'transparent', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
  },
  capaLivros: {
    top: 15,
    width: 100,
    height: 160,
    alignSelf: 'center',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '92%',
    alignSelf: 'center',
    opacity: 0.2,
    top: 30,
    mariginVertical: 10,
  },
  sectionTitle: {
    top: 4,
    left: 22,
  },
  general: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 40,
    // marginLeft: 15,
  },
  titleLivro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  smallineSquare: {
    width: '16%',
    height: 45,
    backgroundColor: 'transparent', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    top: 205,
  },
  available: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: -6,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    // top: 8,
    textAlign: 'justify',
    width: '89%',
    alignSelf: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    top: 10,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 12,
  },
  infoText: {
    fontSize: 12,
  },
  imgAutor: {
    width: 35,
    height: 35,
  },
  imgEditora: {
    width: 35,
    height: 35,
  },
  imgGenero: {
    width: 40,
    height: 35,
  },
  recommendationTitle: {
    fontSize: 14,
    marginBottom: 4,
    left: 20,
    top: 40,
  },
  recommendation: {
    fontSize: 14,
    marginBottom: 10,
    left: 20,
    top: 40,
  },
  recommendationMod: {
    fontSize: 14,
    marginBottom: 4,
    left: 20,
    top: 35,
  },
  RadioButtonQuad: {
    flexDirection: 'row',
    top: 40,
    left: 2,
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#FF735C',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 10,
  },
  btnPress: {
    backgroundColor: '#3F7263',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;