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
  header: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
    marginTop: 16,
  },
  card: {
    borderRadius: 64,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 100, // Para Android, para que a sombra seja visível
    margin: 10,
    backgroundColor:  '#ffffffe3',
    width: '90%',
  },
  content: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.096)',
    display: 'flex',
    width: '100%',
    
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
    width: '100%',
    maxWidth: '98%',
    margin: 0,
    textAlign: 'center',
  },
  membrosContainer: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
    marginRight: 8,
    marginBottom: 20,
    marginLeft: 8,
    fontSize: 18,
  },
  membros: {
    fontSize: 14,
    color: '#000',
    textAlign: 'justify',
    flexDirection: 'row', // Alinha a imagem e o texto horizontalmente
    alignItems: 'flex-start', // Alinha a imagem e o texto no topo
  },
  membroImage: {
    width: 60, // Ajuste o tamanho conforme necessário
    height: 60, // Ajuste o tamanho conforme necessário
    borderRadius: 8,
    marginRight: 10, // Espaço entre a imagem e o texto
    marginTop: 4,
  },
  membroText: {
    flex: 1, // Permite que o texto ocupe o espaço restante
  },
  name: {
    fontWeight: '500',
    color: '#000',
  },
})

export default styles;