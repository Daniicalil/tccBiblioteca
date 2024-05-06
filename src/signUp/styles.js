import { StyleSheet, Dimensions } from 'react-native';
// import Shape from 'react-clip-path';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: '100%',
  },
  logo: {
    width: '80%',
    height: '35%',
  },
  input: {
    width: '70%',
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
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#FF735C',
    width: '40%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 500,
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
  // passwordVisibilityIcon: {
  //   padding: 10,
  //   position: 'absolute',
  //   right: 8,
  //   bottom: 8,
  // },
  passwordInput: {
    paddingRight: 40,
  },
  circle1: {
    width: 258,
    height: 252,
    borderRadius: '50%',
    backgroundColor: '#3F7263',
    position: 'absolute',
    left: 250,
    top: 700,
  },
  circle2: {
    width: 95,
    height: 93,
    borderRadius: '50%',
    backgroundColor: '#3F7263',
    position: 'absolute',
    right: 330,
    top: 550,
  },
  circle3: {
    width: 95,
    height: 93,
    borderRadius: '50%',
    backgroundColor: '#3F7263',
    position: 'absolute',
    left: 350,
    top: 200,
  },
  circle4: {
    width: 258,
    height: 252,
    borderRadius: '50%',
    backgroundColor: '#3F7263',
    position: 'absolute',
    right: 280,
    bottom: 600,
  },
  circle5: {
    width: 200,
    height: 194,
    borderRadius: '50%',
    backgroundColor: '#3F7263',
    position: 'absolute',
    right: 180,
    bottom: 690,
  },
  seletores: {
    flexDirection: 'row',
  },
})

export default styles;