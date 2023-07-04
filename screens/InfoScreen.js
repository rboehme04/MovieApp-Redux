import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Info = () => (
    <View style={styles.container}>
        <Text style={styles.text}>The app was built with React Native</Text>
        <Text style={[styles.text, styles.marginTop]}>© Richard Böhme 2023</Text>
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
      },
      marginTop: {
        marginTop: 50,
      },
})