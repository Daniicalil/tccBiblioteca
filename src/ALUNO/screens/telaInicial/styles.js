import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  funcionamento: {
    width: "90%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#3F7263",
    marginTop: "3%",
    alignSelf: "center",
  },
  imgFunc: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 7,
    fontSize: 18,
    textAlign: "left",
    marginLeft: "8%",
  },
  item: {
    width: "31.6%",
    height: "auto",
    alignItems: "center",
    margin: 3,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  course: {
    marginTop: 10,
    fontSize: 12,
    // fontWeight: 'bold',
    textAlign: "center",
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
  titleBook: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  author: {
    fontSize: 11.5,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  flatList: {
    flex: 1,
  },
  flatListContainer: {
    justifyContent: "center",
  },
  scrollViewContainer: {
    backgroundColor: "#fff",
  },
  importancia: {
    width: "90%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#3F7263",
    marginTop: "5%",
    alignSelf: "center",
    marginBottom: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgImportancia: {
    width: "90%",
    height: "100%",
  },
  containerAny: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noResultsText: {
    textAlign: "center"
  }
});

export default styles;
