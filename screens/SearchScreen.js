import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import FlatListMovies from '../FlatListMovies';
import { fetchMovies } from "../api";

class Search extends React.Component {

  state = {
    search: "",
    movies: null,
  }

  handleSearchInput = search => {
    this.setState({
      search: search,
    })
    this.handleSearchMovies(search)
  }

  handleSearchMovies = async(search) => {
    const movies = await fetchMovies(search);
    this.setState({
      movies: movies,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.search}
          onChangeText={this.handleSearchInput}
          placeholder="Search"
        />
        <FlatListMovies movies={this.state.movies} />
      </View>
    )
  }
 
}

export default Search

const styles = StyleSheet.create({
    container: {
      textAlign: "center",
      flex: 1
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      minWidth: 100,
      fontSize: 20,
      marginTop: 20,
      marginBottom: 5,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
})