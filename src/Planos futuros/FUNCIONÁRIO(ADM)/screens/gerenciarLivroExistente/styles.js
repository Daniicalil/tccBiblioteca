import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  inicio: {
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  headerContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
  },
  bookListContainer: {
    flex: 1,
  },
  paragraph: {
    marginTop: "3%",
    marginBottom: "6%",
    fontSize: 18,
    flex: 1,
    left: 70,
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
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  seletores: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioLabel: {
    marginLeft: 0,
    fontSize: 14,
  },
  bookList: {
    marginTop: 2,
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "98%",
    margin: 0,
    marginBottom: 2,
    cursor: "pointer",
    width: "100%",
  },
  bookItem: {
    width: "31.2%",
    alignItems: "center",
    margin: "1%",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  titleBook: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  author: {
    fontSize: 11.5,
    color: "#555",
    textAlign: "center",
    marginBottom: 5,
  },
  switchContainer: {
    // padding: 10,
  },
  flatList: {
    flex: 1,
  },
  inativo: {
    opacity: 0.5,
  },
  bookInfo: {
    padding: 1,
  },
  toggleContainer: {
    marginLeft: "auto",
  },
  image: {
    marginTop: 6,
    width: 60,
    height: 95,
    borderRadius: 6,
    marginBottom: 6,
    resizeMode: "cover",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#FF735C",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginTop: 16,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  bookListContainer: {
    marginBottom: 16,
  },
  bookText: {
    fontSize: 16,
  },
  viewEditar: {
    alignItems: "center",
  },
  btnPress: {
    opacity: 0.5,
    backgroundColor: "#3F7263",
  },
  containerAny: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContainer: {
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  noResultsText: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    alignSelf: "center",
  },
});

export default styles;
