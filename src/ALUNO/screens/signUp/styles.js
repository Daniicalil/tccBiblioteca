import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    marginTop: 50,
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  paragraph: {
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  input: {
    width: "100%",
    maxWidth: "75%",
    alignSelf: 'center',
    height: 44,
    backgroundColor: "#FFF",
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 15,
    padding: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#CCC",
    color: "#000",
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
  pickerContainer: {
    width: "75%",
    height: 44,
    marginBottom: 0,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  textPicker: {
    fontSize: 10,
    left: 36,
  },
  firstItem: {
    color: "#999", // Cor para o primeiro item
    fontSize: 14,
  },
  defaultItem: {
    color: "black", // Cor padrão para os demais
  },
  password: {
    flexDirection: "row",
    alignSelf: "center",
  },
  passwordInput: {
    paddingRight: 40,
    width: 800,
    maxWidth: "86%"
  },
  passwordVisibilityIcon: {
    padding: 10,
    position: "absolute",
    right: 30,
    bottom: 0,
  },
  confirmPassword: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  sexo: {
    marginTop: 10,
  },
  radioOptions: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "center"
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  radioText: {
    marginRight: 0,
    fontSize: 14,
  },
  touchText: {
    color: "#FF735C",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 5,
    marginTop: 10,
  },
  TouchPress: {
    opacity: 0.5,
  },
  signUpButton: {
    marginTop: 10,
    backgroundColor: "#FF735C",
    width: "40%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    marginTop: -6,
  },
  buttonRadio: {
    marginTop: 4,
    flexDirection: 'row',  // Alinha o RadioButton e o label em linha
    alignItems: 'center',  // Centraliza o conteúdo verticalmente
    marginVertical: 5,     // Adiciona um espaço entre as opções de sexo
  },
  btnPress: {
    opacity: 0.5,
  },
  signUpText: {
    color: "#fff",
    // fontWeight: 'bold',
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
