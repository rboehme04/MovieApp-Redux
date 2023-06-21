import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FlatListMovies from "../FlatListMovies";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatListMovies
          movies={this.props.movies}
          onSelectMovie={this.props.onSelectMovie}
        />
        {/* <Text style={styles.text}>Favourites</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
