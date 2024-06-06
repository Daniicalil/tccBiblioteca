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
    height: 100, 
    backgroundColor: '#3F7263',
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
    // marginBottom: '3%',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 100, 
    backgroundColor: '#3F7263', 
    alignSelf: 'center',
    paddingBottom: 20,
  },
  titlePagina: {
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
    left: 70
  },
  texto: {
    marginLeft: 90,
  },
  input: {
    width: '65%',
    height: 42,
    marginTop: 2,
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    color: '#929292',
    alignSelf: 'center',
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