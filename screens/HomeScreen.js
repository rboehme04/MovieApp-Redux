import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux'

import FlatListMovies from "../FlatListMovies";

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Favourites</Text> */}
        <FlatListMovies movies={this.props.watchlist} search={false} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  watchlist: state.watchlist,
})

export default connect(mapStateToProps)(Home)

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
