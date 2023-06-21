import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

import Row from "./Row";

export default class FlatListMovies extends React.Component {
  renderItem = ({ item }) => (
    <Row {...item} onSelectMovie={this.props.onSelectMovie} />
  );

  render() {
    return <FlatList renderItem={this.renderItem} data={this.props.movies} />;
  }
}

FlatListMovies.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};