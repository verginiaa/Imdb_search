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
import { globalStyles } from "./GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

export default function List(props) {
  let nc = 0;
  if (Dimensions.get("screen").width < 500) nc = 1;
  else if (Dimensions.get("screen").width < 800) nc = 50;
  else if (Dimensions.get("screen").width < 1200) nc = 100;
  else nc = 150;
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        margin: 10,
        borderRadius: 5,

        backgroundColor: "rgba(52, 52, 52, 0.8)",
      }}
    >
      <Image
        style={{
          width: 270 + nc,
          height: 230 + nc,
        }}
        source={{
          uri: props.item.image,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            minWidth: 220,
            maxWidth: 220,
          }}
        >
          Episode {props.item.episodeNum}, {props.item.title}.{"\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            minWidth: 220,
            maxWidth: 220,
          }}
        >
          Plot : {props.item.plot}
          {"\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            minWidth: 220,
            maxWidth: 220,
          }}
        >
          Released on : {props.item.released}.{"\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            minWidth: 220,
            maxWidth: 220,
          }}
        >
          Imdb rating{" "}
          <AntDesign
            name="star"
            size={15}
            color="#772323"
            style={{ marginRight: 50, marginLeft: 3 }}
          />{" "}
          : {props.item.imdbRating}/10.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
