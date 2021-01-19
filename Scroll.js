import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: "#3f3f3f",
      }}
    >
      <View style={styles.icon}>
        <MaterialCommunityIcons name="movie-open" size={100} color="#bfd1cd" />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    padding: 10,
    margin: 20,
  },
});
