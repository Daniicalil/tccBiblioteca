import { StyleSheet, Plataform } from 'react-native';
// import Shape from 'react-clip-path';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: '13%',
  },
  input: {
    width: '80%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginBottom: 10,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#929292',
  },
  circulo1: {
    background: '#3F7263',
    borderRadius: '50%',
    width: 258,
    height: 252,
    left: 170,
    top: 30,
  },
  circulo2: {
    background: '#3F7263',
    borderRadius: '50%',
    width: 95,
    height: 93,
    right: 270,
    bottom: 235,
    position: 'absolute'
  },
  circulo3: {
    background: '#3F7263',
    borderRadius: '50%',
    width: 95,
    height: 93,
    left: 290,
    bottom: 580,
    position: 'absolute'
  },
  circulo4: {
    background: '#3F7263',
    borderRadius: '50%',
    width: 258,
    height: 252,
    right: 220,
    bottom: 720,
    position: 'absolute'
  },
  circulo5: {
    background: '#3F7263',
    borderRadius: '50%',
    width: 200,
    height: 194,
    right: 120,
    bottom: 790,
    position: 'absolute'
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
    width: '50%',
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
  seletores: {
    flexDirection: 'row',
  },
  text: {
    width: '80%',
    marginBottom: 20,
    textAlign: 'center',
  },
})

export default styles;