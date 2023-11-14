import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={console.log("Sending feedback")}
      >
        <Text>Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={console.log("Logging out")}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={console.log("Deactivating account")}
      >
        <Text style={styles.deactivateText}>Deactivate Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F7F9",
  },
  button: {
    width: "100%",
    padding: 12,
    alignItems: "left",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
  deactivateText: {
    color: "red",
  },
});

export default SettingsScreen;
