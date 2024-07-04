import { CgEnter } from 'react-icons/cg';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // inicio: {
  //   alignItems: 'center',
  // },
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
    fontSize: 18,
    flex: 1,
    left: 70
  },
  pickerContainer: {
    width: '85%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    alignSelf: 'center'
  },
  textInput: {
    fontSize: 16,
    left: 36
  },
  input: {
    height: 50, // Altura do TextInput
    width: '85%',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top', // Alinha o texto no topo
    alignSelf: 'center',
    marginBottom: 15
  },
  inputResumo: {
    height: 200, // Altura do TextInput
    width: '85%',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top', // Alinha o texto no topo
    alignSelf: 'center',
    marginBottom: 15
  },
  inputQuant: {
    height: 50, // Altura do TextInput
    width: '20%',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top', // Alinha o texto no topo
    alignSelf: 'flex-start',
    marginLeft: 35
  },
  button: {
    backgroundColor: '#FF735C',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 16,
    marginTop: 50,
    width: '35%',
    alignSelf: 'center',
  },
  btnPress: {
    backgroundColor: '#3F7263',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
},
});

export default styles;