import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  retangGreen: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#3F7263',
    justifyContent: 'space-between',
  },
  imgLogo: {
    width: '12%',
    height: '42%',
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
  titleContainer: {
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
    fontSize: 18,
    flex: 1,
    left: 70
  },
  barraPesq: {
    backgroundColor: '#FFF',
    width: '85%',
    marginBottom: '2%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  placeholderStyle: {
    opacity: 0.5, 
  },
  iconStyle: {
    opacity: 0.5, 
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
  course: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    marginTop: 6,
    width: 60, 
    height: 95, 
    borderRadius: 4,
    marginBottom: 6,
    resizeMode: 'cover', 
    alignSelf: 'center',
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
  flatList: {
    flex: 1, 
  },
  flatListContainer: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  scrollViewContainer: {
    backgroundColor: '#fff',
  },
  buttonAdd: {
    backgroundColor: '#3F7263',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    width: '26%',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btnAddPress: {
    opacity: 0.5,
  },
  buttonTextAdd: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerAny: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default styles;