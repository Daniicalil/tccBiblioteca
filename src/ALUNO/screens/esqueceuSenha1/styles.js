import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    marginTop: 50,
    width: 230,
    height: 240,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  text: {
    width: '80%',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    color: '#929292',
  },
  touchText: {
    color: '#FF735C',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 4,
    marginTop: 5,
  },
  TouchPress: {
    opacity: 0.5,
  },
  redefinirButton: {
    marginTop: '5%',
    backgroundColor: '#FF735C',
    width: '30%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  btnPress: {
    opacity: 0.5,
  },
  redefinirText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: -6, 
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red', // Define a borda vermelha quando houver erro
  },
})

export default styles;