import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
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
  item: {
    width: '31.2%', 
    alignItems: 'center',
    margin: '1%', 
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  titleBook: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 11.5,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  flatList: {
    flex: 1, 
  },
  image: {
    marginTop: 6,
    width: 60, 
    height: 95, 
    borderRadius: 6,
    marginBottom: 6,
    resizeMode: 'cover', 
    alignSelf: 'center',
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
  containerAny: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default styles;