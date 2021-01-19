import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
  },
  text: {
    color: "white",
  },
  body: {
    flexDirection: "row",
    paddingTop: 15,
  },
  colOne: {
    flexDirection: "column",
    justifyContent: "center",
  },
  colTwo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  colThree: {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  search: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
  movText: {
    color: "white",
  },
  genre: {
    color: "#adadad",
    borderColor: "#89898a",
    borderWidth: 0.7,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    marginTop: 20,
  },
  line: {
    borderBottomColor: "#89898a",
    margin: 20,
    borderBottomWidth: 0.3,
  },
  title: {
    color: "white",
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 17,
  },
  plot: {
    color: "#c1c2c2",
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    fontSize: 15,
  },
  meta: {
    color: "#7aa795",

    marginLeft: 100,
    marginRight: 10,
    padding: 5,
    fontSize: 25,
  },
  imdb: {
    color: "white",
    fontSize: 15,
  },
  mainName: {
    color: "white",
    fontSize: 17,
    marginLeft: 10,
    flex: 1,
  },
  length: {
    color: "#999999",
    marginRight: 10,
    fontSize: 12,
  },
  upperTitle: {
    color: "#adadad",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
