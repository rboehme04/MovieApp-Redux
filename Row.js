import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

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

const Row = props => (
  <TouchableOpacity onPress={() => props.onSelectMovie(props)}>
    <View style={styles.row}>
      <Image
        style={styles.picture}
        source={{
          uri: props.poster,
        }}
      />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

Row.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default Row;
