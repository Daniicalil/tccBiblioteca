import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  retangGreen: {
    width: "100%",
    height: 100,
    backgroundColor: "#3F7263",
    justifyContent: "space-between",
  },
  imgLogo: {
    width: "12%",
    height: "42%",
    alignSelf: "center",
    position: "absolute",
    bottom: 8,
  },
  imgEtec: {
    width: "15%",
    height: "25%",
    bottom: 8,
    alignSelf: "flex-end",
    position: "absolute",
    right: 27,
  },
  retangOrange: {
    width: "100%",
    height: 19,
    backgroundColor: "#FF735C",
    marginBottom: "3%",
  },
  titlePagina: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  icon: {
    position: "absolute",
    left: 28,
    top: 10,
  },
  paragraph: {
    marginTop: "3%",
    marginBottom: "6%",
    fontSize: 18,
    flex: 1,
    left: 70,
  },
  pickerContainer: {
    width: "85%",
    marginBottom: 3,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "#FFF",
  },
  textPicker: {
    fontSize: 16,
    left: 36,
    marginTop: 10,
  },
  input: {
    height: 200, // Altura do TextInput
    width: "85%",
    borderRadius: 8,
    borderColor: "#CCC",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // Alinha o texto no topo
    alignSelf: "center",
  },
  divRadio: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center"
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  validated: {
    borderColor: 'green', // Muda a cor da borda para verde
  },
  // Estilo para quando o campo é inválido
  invalid: {
    borderColor: 'red', // Muda a cor da borda para vermelho
  },
  // Ícone de sucesso
  sucesso: {
    color: 'green',
    fontSize: 20,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  // Ícone de erro
  erro: {
    color: 'red',
    fontSize: 20,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  error:  {
    borderColor: '#e74c3c',
    color: '#e74c3c',
  },
  success: {
    borderColor: "#2ecc71"
  },
  recommendationMod: {
    fontSize: 14,
    marginBottom: 4,
    left: 20,
    top: 20,
    fontSize: 16,
  },
  RadioButtonQuad: {
    // flexDirection: "row",
    top: 24,
    left: 0,
    // justifyContent: "space-evenly",
  },
  radioOptions: {
    marginTop: 4,
    // flexDirection: "row",
    alignSelf: "center"
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  buttonRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,     // Adiciona um espaço entre as opções de sexo
  },
  textRadio: {
    marginLeft: 0
  },
  button: {
    backgroundColor: "#FF735C",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 16,
    marginTop: 50,
    width: "35%",
    alignSelf: "center",
  },
  btnPress: {
    backgroundColor: "#3F7263",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  sucesso: {
    /* position: absolute;
        right: 20%;  */
    display: "none",
    marginLeft: 0.5,
    fontSize: 10,
    color: "#2ecc71",
  },
  erro: {
    /* visibility: hidden; */
    display: "none",
    marginLeft: 0.5,
    fontSize: 10,
    color: "#e74c3c",
  },
  divInput: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  sexoForm: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
  },
   divRadio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  small: {
    /* visibility: hidden;  */
    /* display: none; */
    color: "#e74c3c",
    fontSize: 14,
    marginTop: 0.5,
    alignSelf: "center",
  },
  
  
  
  successMessage: {
    display: 'flex', // Exibe o campo de sucesso
  },
  errorMessage: {
    display: 'flex', // Exibe o campo de erro
  },
  successSelect: {
    borderColor: '#2ecc71',
  },
  errorSelect: {
    borderColor: '#e74c3c',
  }
});

export default styles;
