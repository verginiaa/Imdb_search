import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import TopMovie from "../screens/TopMovie";
const Stack = createStackNavigator();
import SingleMovie from "../SingleMovie";

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Top Movies"
        component={TopMovie}
        options={{
          headerLeft: () => (
            <Entypo
              name="menu"
              size={30}
              color="#d0d1d0"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
          headerTintColor: "#d0d1d0",
          headerStyle: {
            backgroundColor: "#333333",
          },
        }}
      />
      <Stack.Screen
        name="SingleMovie"
        component={SingleMovie}
        options={{
          headerTitle: "",
          headerTintColor: "#d0d1d0",
          headerStyle: {
            backgroundColor: "#333333",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;

//
