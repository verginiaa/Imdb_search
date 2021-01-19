import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Input from "../Input";
import List from "../List";
import { globalStyles } from "../GlobalStyles";
export default function App({ navigation }) {
  const [movies, setMovies] = useState("");
  let nc = 0;
  if (Dimensions.get("screen").width < 500) nc = 1;
  else nc = 2;
  const search = async (key, searchKey) => {
    var temp = [];
    let i = 0;
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_a90j071n/${searchKey}`)
      .then((response) => {
        response.json().then(function (data) {
          for (i = 0; i < data.results.length; i++) {
            if (
              data.results[i].image !=
              "https://imdb-api.com/images/original/nopicture.jpg"
            )
              temp.push({
                key: data.results[i].id,
                title: data.results[i].title,
                image: data.results[i].image,
                description: data.results[i].description,
              });
          }
          setMovies(temp);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchSpecific = async (item) => {
    fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_a90j071n/${item.key}`)
      .then((response) => {
        response.json().then(function (data) {
          navigation.navigate("SingleMovie", {
            key: item.key,
            img: item.image,
            trailer: data.videoId,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });

    /* navigation.navigate("SingleMovie", {
      key: "tt1375666",
      img:
        "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg",
    });*/
  };

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Input
          category="movie"
          search={(key, searchKey) => search(key, searchKey)}
          // search={(key, searchKey) => searchSpecific()}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <FlatList
          data={movies}
          numColumns={nc}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <List item={item} specific={(item) => searchSpecific(item)} />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
