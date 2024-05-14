import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: '100%'
  },
  // background: {
  //   width: '100%',
  //   height: '100%',
  // },
  logo: {
    width: '70%',
    height: '35%',
  },
  input: {
    width: '65%',
    height: 42,
    backgroundColor: '#DAD7D7',
    marginBottom: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#929292',
  },
  touchText: {
    color: '#FF735C',
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#FF735C',
    width: '35%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordVisibilityIcon: {
    padding: 10,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  // circle1: {
  //   width: 258,
  //   height: 252,
  //   borderRadius: '50%',
  //   backgroundColor: '#3F7263',
  //   position: 'absolute',
  //   left: 300,
  //   top: 750,
  // },
  // circle2: {
  //   width: 95,
  //   height: 93,
  //   borderRadius: '50%',
  //   backgroundColor: '#3F7263',
  //   position: 'absolute',
  //   right: 420,
  //   top: 600,
  // },
  // circle3: {
  //   width: 95,
  //   height: 93,
  //   borderRadius: '50%',
  //   backgroundColor: '#3F7263',
  //   position: 'absolute',
  //   left: 450,
  //   top: 250,
  // },
  // circle4: {
  //   width: 258,
  //   height: 252,
  //   borderRadius: '50%',
  //   backgroundColor: '#3F7263',
  //   position: 'absolute',
  //   right: 320,
  //   bottom: 690,
  // },
  // circle5: {
  //   width: 200,
  //   height: 194,
  //   borderRadius: '50%',
  //   backgroundColor: '#3F7263',
  //   position: 'absolute',
  //   right: 190,
  //   bottom: 770,
  // },
})

export default styles;