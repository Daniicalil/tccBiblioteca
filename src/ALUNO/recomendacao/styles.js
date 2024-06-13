import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    alignItems: 'center',
  },
  retangGreen: {
    width: '100%', 
    height: 60, 
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
  scrollViewContainer: {
    backgroundColor: '#fff',
  },
  barraPesq: {
    backgroundColor: '#DAD7D7',
    width: '80%',
    marginBottom: '4%',
    alignSelf: 'center',
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
    height: 112, 
    borderRadius: 10,
    backgroundColor: '#DAD7D7',
    marginTop: '3%',
    marginLeft: 6,
    marginRight: 6,
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
  texto: {
    marginLeft: 90,
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
    width: 60, 
    height: 95, 
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
  
});

export default styles;