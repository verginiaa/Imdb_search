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
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "./GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import Episodes from "./Episodes";
export default function Tr(props) {
  const navigation = useNavigation();
  //console.warn("nav :" + navigation);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  Image.getSize(props.item.img, (width, height) => {
    console.log(width + " " + height);
    let x = width / 250;
    setWidth(width / x);
    setHeight(height / x);
  });
  const r = props.item.genre.split(",");
  console.log("gross is :" + props.item.gross);
  console.log("trailer is :" + props.item.trailer);
  let series = false;
  if (props.item.totalSeasons != undefined) series = true;

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: width,
            height: height,
          }}
          source={{
            uri: props.item.img,
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={globalStyles.length}>
            released on :{props.item.release}
          </Text>
          <Text style={globalStyles.length}>{props.item.length}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={globalStyles.mainName}>{props.item.title}</Text>
        {series == true ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Episodes", { seriesId: props.item.key });
            }}
          >
            <Text style={globalStyles.genre}>
              Go to episodes
              <AntDesign name="arrowright" size={14} color="#adadad" />
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View style={globalStyles.line} />

      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {r.map((s) => {
            return (
              <Text key={s} style={globalStyles.genre}>
                {s}
              </Text>
            );
          })}
        </View>
        {props.item.trailer != undefined ? (
          <View>
            <View style={globalStyles.line} />

            <Text style={globalStyles.title}>Trailer :</Text>

            <YoutubePlayer
              height={200}
              play={playing}
              videoId={props.item.trailer}
              onChangeState={onStateChange}
            />
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View>
            <View style={globalStyles.line} />
          </View>
        )}

        {props.item.rating != "N/A" && series == false ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={globalStyles.imdb}>imdb rating</Text>
              <AntDesign
                name="star"
                size={15}
                color="#772323"
                style={{ marginRight: 50, marginLeft: 3 }}
              />
              <Text style={globalStyles.movText}>Metascore</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={globalStyles.imdb}>{props.item.rating}/10</Text>
              <Text style={globalStyles.meta}>{props.item.metaScore}</Text>
            </View>
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View />
        )}
        {props.item.rating != "N/A" && series == true ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={globalStyles.imdb}>imdb rating</Text>
              <AntDesign
                name="star"
                size={15}
                color="#772323"
                style={{ marginLeft: 3 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={globalStyles.imdb}>{props.item.rating}/10</Text>
            </View>
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View />
        )}

        {props.item.rank != undefined ? (
          <View>
            <Text style={globalStyles.title}>Rank :</Text>
            <Text style={globalStyles.plot}>{props.item.rank}</Text>
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View />
        )}

        <Text style={globalStyles.title}>Plot :</Text>
        <Text style={globalStyles.plot}>{props.item.plot}</Text>

        <View style={globalStyles.line} />
        {props.item.totalSeasons != undefined ? (
          <View>
            <Text style={globalStyles.title}>Total seasons :</Text>
            <Text style={globalStyles.plot}>{props.item.totalSeasons}.</Text>
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View />
        )}

        <Text style={globalStyles.title}>Actors :</Text>
        <Text style={globalStyles.plot}>{props.item.actors}.</Text>
        <View style={globalStyles.line} />
        {props.item.director != "N/A" ? (
          <View>
            <Text style={globalStyles.title}>Director :</Text>
            <Text style={globalStyles.plot}>{props.item.director}.</Text>
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View />
        )}

        <Text style={globalStyles.title}>Languages :</Text>
        <Text style={globalStyles.plot}>{props.item.language}.</Text>

        {props.item.gross != undefined ? (
          <View>
            <View style={globalStyles.line} />
            <Text style={globalStyles.title}>Gross :</Text>
            <Text style={globalStyles.plot}>{props.item.gross}</Text>
            <View style={globalStyles.line} />
          </View>
        ) : (
          <View>
            <View style={globalStyles.line} />
          </View>
        )}
        {props.item.awards != "N/A" ? (
          <View>
            <Text style={globalStyles.title}>Awards :</Text>
            <Text style={globalStyles.plot}>{props.item.awards}</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={globalStyles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
