import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SingleMovie from "./SingleMovie";
import Movies from "./screens/MoviesMenu";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />

      <Stack.Screen
        name="SingleMovie"
        component={SingleMovie}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
