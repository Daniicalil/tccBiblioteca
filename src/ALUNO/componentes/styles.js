import { StyleSheet } from 'react-native';

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
