import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '95%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginBottom: 10,
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
    width: '65%',
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
})

export default styles;