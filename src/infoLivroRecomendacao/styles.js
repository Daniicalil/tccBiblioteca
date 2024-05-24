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
    top: 15,
    width: 100,
    height: 160,
    alignSelf: 'center',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    opacity: 0.2,
    top: 30,
    mariginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  available: {
    fontSize: 14,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 12,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  recommendation: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
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
    left: 75,
  },
  
});

export default styles;