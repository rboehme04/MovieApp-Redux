import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";

import { fetchMovieDetail } from "../api";

const Stack = createNativeStackNavigator();

export default class StackNavigatorApp extends React.Component {
  state = {
    favouriteMovies: [],
  };

  onSelectMovie = async (movie) => {
    const detailMovie = await fetchMovieDetail(movie.title);
    this.props.navigation.navigate("Details", {
      movie: detailMovie,
    });
  };

  updateWatchlist = (movie, operator) => {
    if (operator === 'add'){
      this.setState( prevState => ({
        favouriteMovies: [...prevState.favouriteMovies, movie],
      }));
    } else if (operator === 'remove'){
      this.setState( prevState => ({
        favouriteMovies: prevState.favouriteMovies.filter(movieItem => movieItem.title !== movie.title)
      }))
    } else {
      throw new Error('Missing argument operator!');
    }
  };

  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            headerTitle: "Home",
            headerRight: () => (
              <Button
                title="Search"
                onPress={() => navigation.navigate("Search")}
              />
            ),
          })}
        >
          {props => (
            <HomeScreen
              {...props}
              movies={this.state.favouriteMovies}
              onSelectMovie={this.onSelectMovie}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Search">
          {props => (
            <SearchScreen
              {...props}
              onSelectMovie={this.onSelectMovie}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          //  options={({ route }) => ({ title: route.params.movie.title })}
        >
          {props => (
            <DetailScreen
              {...props}
              updateWatchlist={this.updateWatchlist}
              favouriteMovies={this.state.favouriteMovies}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
