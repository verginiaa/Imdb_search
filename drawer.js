import * as React from "react";
import { Button, View, Text, Pressable } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ComingSoonStack from "./Stacks/ComingSoon";
import InTheaterStack from "./Stacks/InTheaterStack";
import MostPopularMovieStack from "./Stacks/MostPopularMovieStack";
import MostPopularSeriesStack from "./Stacks/MostPopularSeriesStack";
import MovieStack from "./Stacks/MovieStack";
import SeriesStack from "./Stacks/SeriesStack";
import TopMovieStack from "./Stacks/TopMovieStack";
import TopSeriesStack from "./Stacks/TopSeriesStack";
import BoxOffice from "./Stacks/BoxOfficeStack";
import CustomDrawerContent from "./Scroll";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function Drawe() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Search Series"
        drawerContentOptions={{
          activeTintColor: "#ffffff",
          inactiveTintColor: "#c7c7c7",
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Box Office"
          component={BoxOffice}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="camcorder-box"
                size={22}
                color="#bfd1cd"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="In Theater"
          component={InTheaterStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="theater"
                size={22}
                color="#bfd1cd"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Coming soon"
          component={ComingSoonStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="ios-timer" size={22} color="#bfd1cd" />
            ),
          }}
        />
        <Drawer.Screen
          name="Search Movies"
          component={MovieStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="search1" size={22} color="#ebc0b3" />
            ),
          }}
        />
        <Drawer.Screen
          name="Most popular movies"
          component={MostPopularMovieStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="staro" size={22} color="#ebc0b3" />
            ),
          }}
        />

        <Drawer.Screen
          name="Top 250 Movies"
          component={TopMovieStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="arrowup" size={22} color="#ebc0b3" />
            ),
          }}
        />

        <Drawer.Screen
          name="Search Series"
          component={SeriesStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="search1" size={22} color="#a1cce7" />
            ),
          }}
        />

        <Drawer.Screen
          name="Most popular series"
          component={MostPopularSeriesStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="staro" size={22} color="#a1cce7" />
            ),
          }}
        />

        <Drawer.Screen
          name="Top 250 Series"
          component={TopSeriesStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="arrowup" size={22} color="#a1cce7" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
