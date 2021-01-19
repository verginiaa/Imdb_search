import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Movies from "./screens/MoviesMenu";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./StackNavigator";
import Navg from "./drawer";
export default function App() {
  return (
    <View style={{ backgroundColor: "#1f252e", flex: 1, marginTop: 20 }}>
      <Navg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
