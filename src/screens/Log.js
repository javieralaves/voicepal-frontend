import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Log({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Log view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
