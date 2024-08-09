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
    backgroundColor:  'rgba(0, 0, 0, 0.863)',
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
    backgroundColor:  'rgba(0, 0, 0, 0.863)',
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
    color: '#FFF',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
  },
  aboutUs: {
    fontSize: 14,
    color: '#FFF',
  },
  membros: {
    fontSize: 14,
    color: '#FFF',
  },
  name: {
    fontWeight: '500',
  },
})

export default styles;