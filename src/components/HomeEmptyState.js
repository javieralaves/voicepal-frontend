import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeEmptyState() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="microphone"
        size={64}
        color="#5E5CE6"
        style={styles.microphone}
      />
      <Text style={styles.title}>Start recording</Text>
      <Text style={styles.description}>
        Create your personal audio journal.
      </Text>
      <Text style={styles.description}>
        Tap the plus button to get started.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  microphone: {
    marginBottom: 12,
    // iOS shadow properties
    shadowColor: "#5E5CE6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,

    // Android shadow properties
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    color: "#8a8a8e",
  },
});
