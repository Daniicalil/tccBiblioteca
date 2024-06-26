import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
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