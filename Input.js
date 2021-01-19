import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "./GlobalStyles";
export default function App(props) {
  const [name, setName] = useState(false);
  const [year, setYear] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [key, setKey] = useState("");

  const category = props.category;
  const placeH = "Search your " + category + "...";
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.body}>
        <TextInput
          style={{
            flex: 7,
            alignItems: "flex-start",
            marginLeft: 10,
            backgroundColor: "white",
            fontSize: 15,
          }}
          value={searchKey}
          onChangeText={(val) => setSearchKey(val)}
          placeholder={placeH}
        />
        <View style={globalStyles.search}>
          <TouchableOpacity
            onPress={() => {
              if (name === true) props.search("name", searchKey);
              else props.search("year", searchKey);
              Keyboard.dismiss();
            }}
          >
            <Feather name="search" size={24} color="#d0d1d0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
