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

export default function List(props) {
  let nc = 0;
  if (Dimensions.get("screen").width < 500) nc = 1;
  else if (Dimensions.get("screen").width < 800) nc = 50;
  else if (Dimensions.get("screen").width < 1200) nc = 100;
  else nc = 150;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        margin: 10,
        borderRadius: 5,

        backgroundColor: "rgba(52, 52, 52, 0.8)",
      }}
    >
      <TouchableOpacity onPress={() => props.specific(props.item)}>
        <Image
          style={{
            width: 140 + nc,
            height: 200 + nc,
          }}
          source={{
            uri: props.item.image,
          }}
        />
      </TouchableOpacity>
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
            minWidth: 120,
            maxWidth: 120,
          }}
        >
          {props.item.title}
          {"\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            minWidth: 120,
            maxWidth: 120,
          }}
        >
          {props.item.description}
          {"\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            minWidth: 120,
            maxWidth: 120,
          }}
        >
          {props.item.year}
          {"\n"}
        </Text>
        {props.item.rank != undefined ? (
          <Text
            style={{
              color: "white",
              fontSize: 15,
              minWidth: 120,
              maxWidth: 120,
            }}
          >
            Rank : {props.item.rank}
          </Text>
        ) : (
          <View />
        )}
        {props.item.gross != undefined ? (
          <Text
            style={{
              color: "white",
              fontSize: 15,
              minWidth: 120,
              maxWidth: 120,
            }}
          >
            Gross : {props.item.gross}
          </Text>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
