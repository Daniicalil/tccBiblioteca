import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  pickerContainer: {
    width: '85%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    alignSelf: 'center'
  },
  textPicker: {
    fontSize: 16,
    left: 36,
  },
  image: {
    marginTop: 6,
    width: 60, 
    height: 95, 
    borderRadius: 6,
    marginBottom: 6,
    resizeMode: 'cover', 
  },
  button: {
    backgroundColor: '#FF735C',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 16,
    width: '35%',
    alignSelf: 'center',
  },
  btnPress: {
    backgroundColor: '#3F7263',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  bookListContainer: {
    marginBottom: 16,
  },
  bookItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
  bookText: {
    fontSize: 16,
  },
  toggleButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  toggleOn: {
    backgroundColor: '#3F7263',
  },
  toggleOff: {
    backgroundColor: '#e0e0e0',
  },
  toggleButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  viewEditar: {
    alignItems: 'center',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#3F7263',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  btnPress: {
    opacity: 0.7,
  },
});

export default styles;