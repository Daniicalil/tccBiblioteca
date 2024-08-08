import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#FFF'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    backgroundColor: '#FFF'
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
    width: 320,
    height: 290,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CCC',
    color: '#929292',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    paddingRight: 40,
  },
  passwordVisibilityIcon: {
    padding: 10,
    position: 'absolute',
    right: 8,
    bottom: 8,
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
  loginButton: {
    marginTop: 10,
    backgroundColor: '#FF735C',
    width: '32%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    marginTop: -6,
  },
  btnPress: {
    opacity: 0.5,
  },
})

export default styles;