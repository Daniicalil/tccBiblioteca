import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  bookListContainer: {
    flex: 1,
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  seletores: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioLabel: {
    marginLeft: 0,
    fontSize: 14,
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
    borderRadius: 6,
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
    width: '32%',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btnAddPress: {
    opacity: 0.5,
  },
  buttonTextAdd: {
    color: '#fff',
    textAlign: 'center',
  },
  iconButton: {
    marginRight: 5,
  },
  containerAny: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default styles;
