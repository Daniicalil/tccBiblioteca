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
  headerContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  titleContainer: {
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
  item: {
    width: "31.2%",
    height: "auto",
    alignContent: "center",
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
  course: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
  },
  image: {
    marginTop: 6,
    width: 60,
    height: 95,
    borderRadius: 6,
    marginBottom: 6,
    resizeMode: "cover",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
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
    paddingHorizontal: 8,
  },
  scrollViewContainer: {
    backgroundColor: "#FFF",
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
