import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    marginBottom: 10,
    fontSize: 16,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 3,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalButtonAdd: {
    backgroundColor: "#FF735C",
    padding: 10,
    borderRadius: 30,
    flex: 1,
    marginRight: 5,
  },
  modalButtonCanc: {
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    flex: 1,
    marginLeft: 5,
  },
  buttonTextAdd: {
    textAlign: "center",
    color: "#FFF",
  },
  buttonTextCanc: {
    textAlign: "center",
    color: "#000",
  },

  small: {
    /* visibility: hidden;  */
    /* display: none; */
    color: "#e74c3c",
    fontSize: 14,
    marginTop: 0.5,
    alignSelf: "center",
    marginBottom: 5,
    marginBottom: 6,
  },
});

export default styles;
