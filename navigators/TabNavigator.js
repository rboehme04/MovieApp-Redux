import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStackNavigator from "./StackNavigator";
import InfoScreen from "../screens/InfoScreen";

const Tabs = createBottomTabNavigator();

const TabNavigatorApp = () => (
  <Tabs.Navigator
    initialRouteName="Main"
    screenOptions={{
      //tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: "gray",
      tabBarShowLabel: false,
    }}
  >
    <Tabs.Screen
      name="Main"
      component={HomeStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={size}
              color={color}
            />
          );
        },
      }}
    />
    <Tabs.Screen
      name="Info"
      component={InfoScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              size={size}
              color={color}
            />
          );
        },
      }}
    />
  </Tabs.Navigator>
);

export default TabNavigatorApp;
