import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

import {connect} from 'react-redux'
import { onSelectMovie } from "./redux/actions";

class Row extends React.Component {

  onClick = () => {
    this.props.onSelectMovie(this.props)
    this.props.navigation.navigate("Details");
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onClick}>
        <View style={styles.row}>
          <Image
            style={styles.picture}
            source={{
              uri: this.props.poster,
            }}
          />
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Row.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default connect(null, {onSelectMovie})(Row)


const styles = StyleSheet.create({
  row: {
    margin: 2,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    //borderWidth: 1,
    //borderColor: "black",
  },
  picture: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    textAlignVertical: 'center',
    overflow: 'hidden',
  },
});