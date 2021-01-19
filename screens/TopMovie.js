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
  const [top, setTop] = useState([]);
  let nc = 0;
  if (Dimensions.get("screen").width < 500) nc = 1;
  else nc = 2;
  useEffect(() => {
    let unmounted = false;
    var temp = [];
    let i = 0;
    fetch(`https://imdb-api.com/en/API/Top250Movies/k_a90j071n`)
      .then((response) => {
        response.json().then(function (data) {
          console.log(data.items);
          for (i = 0; i < data.items.length; i++) {
            if (
              data.items[i].image !=
              "https://imdb-api.com/images/original/nopicture.jpg"
            )
              temp.push({
                key: data.items[i].id,
                title: data.items[i].title,
                image: data.items[i].image,
                rank: data.items[i].rank,
                year: data.items[i].year,
              });
          }
          setTop(temp);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      unmounted = true;
    };
  }, []);
  const searchSpecific = async (item) => {
    fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_a90j071n/${item.key}`)
      .then((response) => {
        response.json().then(function (data) {
          navigation.navigate("SingleMovie", {
            key: item.key,
            img: item.image,
            trailer: data.videoId,
            rank: item.rank,
            year: item.year,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });

    /* navigation.navigate("SingleMovie", {
      key: item.key,
      img: item.image,
      rank: item.rank,
    });*/
  };
  const renderItem = ({ item }) => (
    <List item={item} specific={(item) => searchSpecific(item)} />
  );
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flex: 5,
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <FlatList
          data={top}
          numColumns={nc}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
