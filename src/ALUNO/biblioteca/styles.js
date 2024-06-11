import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    alignItems: 'center',
  },
  retangGreen: {
    width: '100%', 
    height: 90, 
    backgroundColor: '#3F7263',
  },
  imgLogo: {
    width: 80,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  imgEtec: {
    width: 65,
    height: 25,
    bottom: 12,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 27,
  },
  retangOrange: {
    width: '100%', 
    height: 19, 
    backgroundColor: '#FF735C',
    marginBottom: '3%',
  },
  barraPesq: {
    backgroundColor: '#DAD7D7',
    width: '75%',
    marginBottom: '4%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  icon: {
    position: 'absolute',
    left: 28,
    top: 10
  },
  paragraph: {
    marginTop: '3%',
    marginBottom: '6%',
    // fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  },
  quadrado: {
    width: '28%', 
    height: 110, 
    borderRadius: 10,
    backgroundColor: '#DAD7D7',
    marginTop: '3%',
    marginLeft: 6,
    marginRight: 6,
  },
  capaLivros: {
    width: 35,
    height: 54,
    alignSelf: 'center',
    top: 12,
  },
  livros: {
    fontSize: 10,
    textAlign: 'center',
    marginRight: '3%',
    marginLeft: '3%',
    top: 15,
  },
  flatListContainer: {
    justifyContent: 'center',
    padding: 10, // Adicione
  },
  item: {
    width: '30%', // Definindo a largura para ocupar 30% do contêiner pai
    alignItems: 'center',
    margin: '1.5%', // Adicionando um pequeno espaçamento entre os itens
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    marginTop: 10,
    width: '50%', // Definindo a largura da imagem para 80% do contêiner pai
    height: 95, // Definindo uma altura fixa para a imagem
    borderRadius: 4,
    marginBottom: 10,
    resizeMode: 'cover', // Ajustando o modo de redimensionamento da imagem
  },
  
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  texto: {
    marginLeft: 90,
  },
});

export default styles;
