import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    // fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    marginLeft: 70,
  },
  barraPesq: {
    backgroundColor: '#DAD7D7',
    width: '80%',
    marginBottom: '4%',
    alignSelf: 'center',
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
  containerAny: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default styles;
