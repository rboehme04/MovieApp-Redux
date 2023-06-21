import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigators/TabNavigator";
import { StatusBar } from "react-native";

import { store, persistor } from "./redux/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer>
            <StatusBar StatusBarStyle={"light-content"} />
            <TabNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}