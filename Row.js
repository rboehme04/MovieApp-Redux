import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { onSelectMovieSearch } from "./redux/actions";
import { onSelectMovieWatchlist } from "./redux/actions";

// functional component --> can use useNavigation() Hook, HOC is not longer supportet
function Row(props) {

  const navigation = useNavigation();

  const onClick = async () => {
    if (props.search === true){
      try {
        await props.onSelectMovieSearch(props); // wait for fetch-request
        navigation.navigate("Details");
      } catch (err) {
        console.error("Fehler beim Laden der Detailinformationen", err);
      }
    } else {
      props.onSelectMovieWatchlist(props);
      navigation.navigate("Details");
    }
  }

  return (
    <TouchableOpacity onPress={onClick}>
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
}

Row.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default connect(null, { onSelectMovieSearch, onSelectMovieWatchlist })(Row);

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
    textAlignVertical: "center",
    overflow: "hidden",
  },
});
