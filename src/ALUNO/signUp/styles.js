import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {   
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 300,
    height: 300,
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
    marginBottom: 7,
    marginTop: 15,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  loginButton: {
    marginTop: '3%',
    backgroundColor: '#FF735C',
    width: '35%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordVisibilityIcon: {
    padding: 10,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  passwordInput: {
    paddingRight: 40,
  },
  seletores: {
    flexDirection: 'row',
  },
})

export default styles;