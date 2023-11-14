import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeEmptyState from "../components/HomeEmptyState";
import LogComponent from "../components/LogComponent";

// dummy variable to keep track of audio log count
const audioLogs = 3;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {audioLogs === 0 ? (
        <HomeEmptyState />
      ) : (
        <>
          <LogComponent navigation={navigation} style={styles.logSpacing} />
          <LogComponent navigation={navigation} style={styles.logSpacing} />
          <LogComponent navigation={navigation} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  logSpacing: {
    marginBottom: 12,
  },
});

export default HomeScreen;
