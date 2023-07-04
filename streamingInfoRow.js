import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Row from "./Row";

const streamingInfoRow = props => (
    <View style={styles.marginLeft5}>
        <Text>{props.provider}{props.providerData === "sub" ? null : `: ${props.providerData}`}</Text>
    </View>
)

export default streamingInfoRow

streamingInfoRow.propTypes = {
  provider: PropTypes.string,
  providerData: PropTypes.string,
};

const styles = StyleSheet.create({
    text: {
      fontSize: 14,
    },
    marginLeft5: {
      marginLeft: 20,
    },
  });