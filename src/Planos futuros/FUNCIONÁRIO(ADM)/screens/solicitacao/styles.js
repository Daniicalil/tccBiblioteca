import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  inicio: {
    alignItems: "center",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  seletores: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  radioLabel: {
    marginLeft: 0,
    fontSize: 14,
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
  lineSquare: {
    width: "90%",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoLivro: {
    flexDirection: "row",
  },
  capaLivros: {
    top: 25,
    width: 45,
    height: 70,
    left: 35,
  },
  sectionTitle: {
    top: 40,
    left: 22,
  },
  titleLivro: {
    justifyContent: "center",
    alignItems: "center",
    left: 30,
  },
  autor: {
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    top: 5,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "92%",
    alignSelf: "center",
    opacity: 0.2,
    top: 20,
    mariginVertical: 10,
  },
  dados: {
    fontSize: 14,
    marginBottom: 8,
    top: 20,
    textAlign: "justify",
    width: "95%",
    left: 20,
  },
  nome: {
    paddingTop: 5,
    paddingBottom: 2,
  },
  dataCadastro: {
    paddingTop: 5,
    paddingBottom: 2,
  },
  email: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  conf: {
    paddingTop: 40,
    textAlign: "center",
    fontSize: 16,
  },
  buttonsSelecao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingTop: 0,
    paddingBottom: 20,
  },
  buttonConf: {
    backgroundColor: "#FF6F61",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 16,
    width: "26%",
  },
  btnConfPress: {
    opacity: 0.5,
  },
  buttonTextConfSel: {
    color: "#FFF",
    textAlign: "center",
  },
  infoLivro: {
    display: "flex",
    flexDirection: "row",
  },
  livro: {
    flexDirection: "column",
    marginTop: 18,
    marginLeft: 14,
  },
  capaLivros: {
    top: 20,
    width: 55,
    height: 80,
    left: 35,
    borderRadius: 4,
    bottom: 50,
  },
  sectionTitle: {
    top: 20,
    left: 22,
  },
  titleLivro: {
    justifyContent: "center",
    alignItems: "center",
    left: 30,
  },
  autor: {
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    top: 5,
  },
  confirmation: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  confirmationText: {
    color: "black",
    marginRight: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerContainer: {
    width: "60%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignSelf: "center",
  },
  pickerFocused: {
    borderWidth: 1,
    borderColor: "#FF735C",
  },
  pickerUnfocused: {
    borderWidth: 1,
    borderColor: "#CCC",
  },
  checkboxContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 12,
    marginRight: 6,
  },
  // pickerContainer:hover,
  // pickerContainer:focus {
  //   borderColor: '#FF735C',
  //   outline: none,
  // },
  errorMessage: {
    color: "red",
    marginBottom: 8,
    marginTop: -6,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default styles;
