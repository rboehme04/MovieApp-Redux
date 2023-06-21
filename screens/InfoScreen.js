import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Info = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Info's published here!</Text>
    </View>
)

export default Info

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
      },
      text: {
        textAlign: "center"
      }
})