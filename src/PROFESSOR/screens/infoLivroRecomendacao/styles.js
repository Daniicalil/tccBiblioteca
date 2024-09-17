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
    bottom: 8,
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
    fontSize: 18,
    flex: 1,
    left: 70
  },
  buttonRem: {
    backgroundColor: '#FF735C',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    width: '26%',
    alignSelf: 'flex-end',
    marginRight: 25,
    marginBottom: 10,
    marginTop: -10,
  },
  btnRemPress: {
    opacity: 0.5,
  },
  buttonTextRem: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lineSquare: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    flex: 1,
    width: width * 0.9, // 90% da largura da tela
  },
  capaLivros: {
    width: 100,
    height: 160,
    alignSelf: 'center',
    borderRadius: 6,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    opacity: 0.2,
    marginVertical: 10,
    marginTop: 10,
  },
  sectionTitle: {
    marginTop: 0,
  },
  general: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    width: '100%'
  },
  titleLivro: {
    flexDirection: 'row',
    height: 30,
  },
  smallineSquare: {
    width: '18%',
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
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 5,
    width: '100%',
    alignSelf: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
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
    marginTop: 5,
  },
  recommendation: {
    fontSize: 14,
    marginBottom: 10,
  },
  recommendationMod: {
    fontSize: 14,
    marginBottom: 4,
  },
  RadioButtonQuad: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF735C',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
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
