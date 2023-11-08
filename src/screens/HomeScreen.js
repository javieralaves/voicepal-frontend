import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

const HomeScreen = ({ navigation }) => {
  // Component state
  const [pressedState, setPressedState] = useState("base");

  // Playing state
  const [audioState, setAudioState] = useState(false);

  // Function to toggle pressed state
  const togglePressed = () => {
    setPressedState((prevState) =>
      prevState === "base" ? "expanded" : "base"
    );
  };

  // Function to toggle audio state
  const playButtonPressed = () => {
    setAudioState(!audioState);
  };

  const { showActionSheetWithOptions } = useActionSheet();

  const openMenu = () => {
    const options = ["Edit Note", "Delete Note", "Cancel"];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // handle Option 1
        } else if (buttonIndex === 1) {
          // handle Option 2
        }
        // Cancel does nothing
      }
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
          <View style={styles.logImage}>
            <MaterialCommunityIcons
              name="thought-bubble"
              size={24}
              color="#8a8a8e"
            />
          </View>
          <View style={styles.logText}>
            <Text
              style={styles.logTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              The hypothesis behind VoicePal
            </Text>
            <Text style={styles.posted}>Nov 1 • 19:43</Text>
          </View>
        </View>
        {pressedState === "expanded" && (
          <View style={styles.expandedContent}>
            <View style={styles.progressBarArea}>
              <View style={styles.progressBar}>
                <View style={styles.progressBarKnob} />
              </View>
              <View style={styles.progressTiming}>
                <Text style={styles.timeText}>0:00</Text>
                <Text style={styles.timeText}>3:00</Text>
              </View>
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
              <TouchableOpacity
                style={{ padding: 8 }}
                onPress={playButtonPressed}
              >
                <MaterialCommunityIcons
                  name={audioState ? "pause" : "play"}
                  size={32}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialCommunityIcons
                  name="fast-forward-15"
                  size={24}
                  color="#8a8a8e"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }} onPress={openMenu}>
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
    backgroundColor: "#F7F7F9",
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logText: {
    flex: 1,
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
  progressBarArea: {
    width: "100%",
  },
  progressBar: {
    width: "100%",
    height: 3,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: 10,
    justifyContent: "center",
  },
  progressBarKnob: {
    width: 8,
    height: 8,
    borderRadius: 30,
    backgroundColor: "black",
  },
  progressTiming: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 8,
  },
  timeText: {
    color: "#8a8a8e",
    fontSize: 13,
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
