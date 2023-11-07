import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.logContainer}>
        <View style={styles.logImage} />
        <View style={styles.logText}>
          <Text style={styles.logTitle}>The hypothesis behind VoicePal</Text>
          <Text style={styles.posted}>Nov 1 • 19:43</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  logImage: {
    backgroundColor: "black",
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  logText: {
    width: "100%",
    marginLeft: 12,
    marginTop: 2,
  },
  logTitle: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "500",
    color: "black",
    textAlign: "left",
  },
  posted: {
    fontSize: 15,
    lineHeight: 18,
    color: "#8a8a8e",
    textAlign: "left",
    marginTop: 4,
  },
});

export default HomeScreen;
