import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const SettingsScreen = () => {
  // Function to handle deactivating account
  const deactivateAccount = () => {
    Alert.alert(
      "Deactivate Account",
      "Are you sure you want to deactivate your account?",
      [
        { text: "Cancel", style: "cancel" },
        // If confirmed, call a function to handle the deactivation
        {
          text: "Deactivate",
          onPress: () => console.log("Deactivate account"),
          style: "destructive",
        },
      ]
    );
  };

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
      <TouchableOpacity style={styles.button} onPress={deactivateAccount}>
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
