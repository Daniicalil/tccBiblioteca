import { StyleSheet, Dimensions } from 'react-native';
// import Shape from 'react-clip-path';

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
  },
  text: {
    width: '80%',
    marginBottom: 20,
    textAlign: 'center',
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
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    marginTop: -6,
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
  confirmPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redefinirButton: {
    marginTop: '5%',
    backgroundColor: '#FF735C',
    width: '38%',
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
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default styles;