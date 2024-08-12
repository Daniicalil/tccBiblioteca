import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor:  '#ffffffd8',
    alignItems: 'center',
    justifyContent: 'center',
    left: 15,
    top: 10,
  },
  icon: {
    
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    backgroundColor:  '#ffffffd8',
    height: '80%',
    width: '90%',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  aboutUs: {
    fontSize: 14,
    color: '#000',
  },
  membros: {
    fontSize: 14,
    color: '#000',
  },
  name: {
    fontWeight: '500',
    color: '#000',
  },
})

export default styles;