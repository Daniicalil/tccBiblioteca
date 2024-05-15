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
    width: '55%',
    height: '26%',
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
    marginTop: '5%',
    backgroundColor: '#FF735C',
    width: '30%',
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
  text: {
    width: '80%',
    marginBottom: 20,
    textAlign: 'center',
  },
})

export default styles;