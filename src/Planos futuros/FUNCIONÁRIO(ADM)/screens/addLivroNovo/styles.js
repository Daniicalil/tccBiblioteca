import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    alignSelf: "center",
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
  textInput: {
    fontSize: 16,
    left: 36,
    color: "#000",
    marginTop: 10,
  },
  input: {
    height: 50, // Altura do TextInput
    width: "85%",
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // Alinha o texto no topo
    alignSelf: "center",
    marginBottom: 3,
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
  },
  inputResumo: {
    height: 200, // Altura do TextInput
    width: "85%",
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // Alinha o texto no topo
    alignSelf: "center",
    marginBottom: 3,
  },
  inputQuant: {
    height: 50, // Altura do TextInput
    width: "20%",
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // Alinha o texto no topo
    alignSelf: "flex-start",
    marginLeft: 35,
    marginBottom: 3,
  },
  tresModais: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  button: {
    backgroundColor: "#FF735C",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 20,
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  lineSquareImg: {
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    width: width * 0.85, // 85% da largura da tela
    alignItems: "center",
    alignSelf: "center",
  },
  btnImg: {
    backgroundColor: "#3F7263",
    width: "45%",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 6,
    alignSelf: "center",
  },
  btnText: {
    color: "#fff",
  },
  buttonAdd: {
    backgroundColor: "#FF735C",
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 20,
    width: "30%",
    alignSelf: "center",
  },
  btnPress: {
    backgroundColor: "#3F7263",
  },
  buttonAddText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
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
