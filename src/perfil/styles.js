import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    alignItems: 'center',
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
  retangGreen: {
    width: '100%', 
    height: 100, 
    backgroundColor: '#3F7263',
  },
  retangOrange: {
    width: '100%', 
    height: 19, 
    backgroundColor: '#FF735C',
    // marginBottom: '3%',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 5,
    // fontWeight: 600,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '8%',
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginTop: 2,
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#929292',
    alignSelf: 'center',
  },
  texto: {
    marginLeft: 90,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  passwordVisibilityIcon: {
    padding: 10,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  seletores: {
    flexDirection: 'row',
  },
  
});

export default styles;