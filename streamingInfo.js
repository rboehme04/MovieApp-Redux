import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import StreamingInfoRow from "./streamingInfoRow"

const streamingInfo = props => (
    <View style={[styles.marginTop5, styles.padding5]}>
        {props.streaming ? <Text style={styles.text}>Streaming Options:</Text> : null}
        {props.streaming.netflix && <StreamingInfoRow provider="Netflix" providerData={props.streaming.netflix} />}
        {props.streaming.prime && <StreamingInfoRow provider="Amazon Prime" providerData={props.streaming.prime} />}
        {props.streaming.disney && <StreamingInfoRow provider="Disney+" providerData={props.streaming.disney} />}
    </View>
)

export default streamingInfo

streamingInfo.propTypes = {
  streaming: PropTypes.object,
};

const styles = StyleSheet.create({
    text: {
      fontSize: 14,
    },
    padding5: {
      padding: 5,
    },
    marginTop5: {
      marginTop: 5,
    },
    marginBottom5: {
      marginBottom: 5,
    },
  });