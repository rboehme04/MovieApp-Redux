import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default class StackNavigatorApp extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: "Watchlist",
            headerRight: () => (
              <Button
                title="Search"
                onPress={() => navigation.navigate("Search")}
              />
            ),
          })}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          //  options={({ route }) => ({ title: route.params.movie.title })}
        />
      </Stack.Navigator>
    );
  }
}
