import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: '100%',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '70%',
    height: '35%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#929292',
  },
  touchText: {
    color: '#FF735C',
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#FF735C',
    width: '35%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold', // alterado para 'bold'
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%', // ajustado para 65% para manter o alinhamento
    position: 'relative', // adicionado para posicionar o ícone
  },
  passwordInput: {
    paddingRight: 50, // ajusta o espaço para o ícone
  },
  passwordVisibilityIcon: {
    position: 'absolute',
    right: 10, // ajusta a posição do ícone
    bottom: 12, // ajusta a posição do ícone
  },
  iconContainer: {    
    position: 'absolute',
    right: 10,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
