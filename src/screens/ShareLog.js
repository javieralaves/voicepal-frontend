import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import * as Clipboard from "expo-clipboard";

const ShareLog = ({ isVisible, onClose, onShare }) => {
  // State for selected option
  const [selectedOption, setSelectedOption] = useState("private");

  const renderCheckboxOption = (label, value, description) => (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={selectedOption === value}
        onValueChange={() => setSelectedOption(value)}
        color={selectedOption === value ? "#5E5CE6" : undefined}
      />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );

  // function to copy clipboard
  const copyLinkToClipboard = () => {
    Clipboard.setStringAsync("https://example.com/shared-log"); // Replace with your actual link
  };

  return (
    <View style={styles.fullScreenContainer}>
      <View style={styles.container}>
        {renderCheckboxOption(
          "Private",
          "private",
          "Only you can see this log."
        )}
        {renderCheckboxOption(
          "Restricted",
          "restricted",
          "Anyone with the link can see the log."
        )}
        {renderCheckboxOption(
          "Public",
          "public",
          "Anyone can see this log, and it's visible on your profile."
        )}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={copyLinkToClipboard}
        >
          <Text style={styles.shareButtonText}>Share Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    padding: 20,
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  label: {
    fontWeight: "600",
  },
  description: {
    color: "#8a8a8e",
  },
  shareButton: {
    backgroundColor: "#5E5CE6",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "stretch",
  },
  shareButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default ShareLog;
