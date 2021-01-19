import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Button,
} from "react-native";
import { globalStyles } from "./GlobalStyles";
import Input from "./Input";
import SingleEpisode from "./SingleEpisode";
export default function SingleMovie(props) {
  //I need here id of selected series and season number form the input

  const [selectedSeriesId, setSelectedSeries] = useState(
    props.route.params.seriesId
  );
  const [allEpisodes, setAllEpisodes] = useState([]);
  let nc = 0;
  if (Dimensions.get("screen").width < 500) nc = 1;
  else nc = 2;
  const search = (key, searchKey) => {
    var temp = [];
    let i = 0;
    console.log(selectedSeriesId);
    fetch(
      `https://imdb-api.com/en/API/SeasonEpisodes/k_a90j071n/${selectedSeriesId}/${searchKey}`
    )
      .then((response) => {
        response.json().then(function (data) {
          for (i = 0; i < data.episodes.length; i++) {
            if (
              data.episodes[i].image !=
              "https://imdb-api.com/images/original/nopicture.jpg"
            )
              temp.push({
                seriesName: data.title,
                key: data.episodes[i].id,
                title: data.episodes[i].title,
                image: data.episodes[i].image,
                plot: data.episodes[i].plot,
                seasonNum: data.episodes[i].seasonNumber,
                episodeNum: data.episodes[i].episodeNumber,
                released: data.episodes[i].released,
                imdbRating: data.episodes[i].imDbRating,
              });
          }
          setAllEpisodes(temp);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchSpecific = (item) => {};
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Input
          category="Season"
          search={(key, searchKey) => search(key, searchKey)}
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
          data={allEpisodes}
          numColumns={nc}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <SingleEpisode
                item={item}
                specific={(item) => searchSpecific(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
