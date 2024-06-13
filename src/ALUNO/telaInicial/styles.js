import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    alignItems: 'center'
  },
  retangGreen: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#3F7263',
    justifyContent: 'space-between',
  },
  imgLogo: {
    width: '20%',
    height: '30%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8
  },
  imgEtec: {
    width: '15%',
    height: '25%',
    bottom: 8,
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
  scrollViewContainer: {
    backgroundColor: '#fff',
  },
  barraPesq: {
    backgroundColor: '#DAD7D7',
    width: '80%',
    marginBottom: '2%',
    alignSelf: 'center',
  },
  funcionamento: {
    width: '90%', 
    height: 180, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    marginTop: '3%',
    alignSelf: 'center',
  },
  imgFunc: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 7,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
  },
  quadrado: {
    width: '28%', 
    height: 112, 
    borderRadius: 10,
    backgroundColor: '#DAD7D7',
    marginTop: '3%',
    marginLeft: 6,
    marginRight: 6,
  },
  flatListContainer: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  flatList: {
    flex: 1, 
  },
  item: {
    width: '31.2%', 
    alignItems: 'center',
    margin: '1%', 
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    marginTop: 6,
    width: 55, 
    height: 85, 
    borderRadius: 4,
    marginBottom: 6,
    resizeMode: 'cover', 
  },
  
  titleBook: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 11.5,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  course: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texto: {
    marginLeft: 90,
  },
  curso: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: '2%',
  },
  capaLivros: {
    width: 35,
    height: 54,
    alignSelf: 'center',
  },
  livros: {
    fontSize: 10,
    textAlign: 'center',
    marginRight: '3%',
    marginLeft: '3%',
  },
  importancia: {
    width: '90%', 
    height: 180, 
    borderRadius: 10,
    backgroundColor: '#3F7263',
    marginTop: '5%',
    alignSelf: 'center',
    marginBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imgImportancia: {
    width: '90%',
    height: '100%',
  },
});

export default styles;
