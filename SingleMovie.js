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
import Tr from "./tr";
import { globalStyles } from "./GlobalStyles";

export default function SingleMovie({ route, navigation }) {
  // console.warn("nav :" + " " + navigation);

  const [movieDetails, setMovieDetails] = useState([]);

  var tempTwo = [];
  console.log(route.params.rank);
  useEffect(() => {
    let unmounted = false;

    fetch(`http://www.omdbapi.com/?i=${route.params.key}&apikey=201adbfd`)
      .then((response) => {
        response.json().then(function (data) {
          tempTwo.push({
            year: data.Year,
            length: data.Runtime,
            plot: data.Plot,
            actors: data.Actors,
            release: data.Released,
            genre: data.Genre,
            director: data.Director,
            language: data.Language,
            awards: data.Awards,
            key: data.imdbID,
            title: data.Title,
            rating: data.imdbRating,
            img: route.params.img,
            metaScore: data.Metascore,
            trailer: route.params.trailer,
            gross: route.params.gross,
            rank: route.params.rank,
            totalSeasons: data.totalSeasons,
          });
          setMovieDetails(tempTwo);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      unmounted = true;
    };
  }, []);
  const renderItem = ({ item }) => <Tr item={item} />;
  return (
    <View style={globalStyles.container}>
      <FlatList data={movieDetails} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({});
