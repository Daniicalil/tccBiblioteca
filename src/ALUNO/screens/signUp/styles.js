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
    width: 300,
    height: 300,
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
    borderRadius: 15,
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
  confirmPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOptions: {
    marginTop: 4,
    flexDirection: 'row',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  radioText: {
    marginRight: 0,
    fontSize: 14,
  },
  touchText: {
    color: '#FF735C',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 10,
  },
  TouchPress: {
    opacity: 0.5,
  },
  signUpButton: {
    marginTop: 10,
    backgroundColor: '#FF735C',
    width: '38%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    marginTop: -6,
  },
  btnPress: {
    opacity: 0.5,
  },
  signUpText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 16,
  },
})

export default styles;