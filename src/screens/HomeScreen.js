import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  // Component state
  const [pressedState, setPressedState] = useState("base");

  // Function to toggle pressed state
  const togglePressed = () => {
    setPressedState((prevState) =>
      prevState === "base" ? "expanded" : "base"
    );
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.logContainer}
        onPress={togglePressed}
        activeOpacity={0.7}
      >
        <View style={styles.baseContent}>
          <View style={styles.logImage} />
          <View style={styles.logText}>
            <Text style={styles.logTitle}>The hypothesis behind VoicePal</Text>
            <Text style={styles.posted}>Nov 1 • 19:43</Text>
          </View>
        </View>
        {pressedState === "expanded" && (
          <View style={styles.expandedContent}>
            {/* Add your additional content here */}
            <View>
              <View style={styles.progressBar} />
            </View>
            <View style={styles.controls}>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialCommunityIcons
                  name="sticker-text-outline"
                  size={24}
                  color="#8a8a8e"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialCommunityIcons
                  name="rewind-15"
                  size={24}
                  color="#8a8a8e"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialCommunityIcons name="play" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialCommunityIcons
                  name="fast-forward-15"
                  size={24}
                  color="#8a8a8e"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialCommunityIcons
                  name="dots-horizontal-circle-outline"
                  size={24}
                  color="#8a8a8e"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
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
    alignItems: "left",
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
  baseContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  logImage: {
    backgroundColor: "black",
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  logText: {
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
  expandedContent: {
    marginTop: 16,
    width: "100%",
  },
  progressBar: {
    width: "100%",
    height: 3,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: 10,
  },
  controls: {
    flexDirection: "row",
    width: "100%",
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
