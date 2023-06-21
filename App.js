import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigators/TabNavigator";
import { StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar StatusBarStyle={'light-content'} />
        <TabNavigator />
      </NavigationContainer>
    );
  }
}