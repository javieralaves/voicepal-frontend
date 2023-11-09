import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import HomeEmptyState from "../components/HomeEmptyState";

const HomeScreen = ({ navigation }) => {
  // Processing state
  const [isProcessing, setIsProcessing] = useState(false);

  // Dummy variable for number of logs available in screen to render empty state
  const audioLogs = 1;

  // Press state
  const [pressedState, setPressedState] = useState("base");

  // Playing state
  const [audioState, setAudioState] = useState(false);

  // Function that handles processing
  const startProcessing = () => {
    setIsProcessing(true);
    // Fetch data and other async functions here?
  };

  // Call this function when the processing is done
  const endProcessing = () => {
    setIsProcessing(false);
  };

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
          // handle Edit Note
        } else if (buttonIndex === 1) {
          // handle Delete Note
          confirmDelete();
        }
        // Cancel does nothing
      }
    );
  };

  // Alert to confirm log deletion upon request
  const confirmDelete = () => {
    Alert.alert(
      "Delete Note", // Alert Title
      "Are you sure you want to delete this note? This action cannot be undone.", // Alert Message
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Put the delete logic here
            console.log("Delete Pressed");
          },
          style: "destructive", // This gives the delete button a red color (iOS only)
        },
      ],
      { cancelable: false } // This prevents the alert from being dismissed by tapping outside of the alert box
    );
  };

  // Handle navigation to profile
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}>
        <Text>Profile</Text>
      </TouchableOpacity>

      {audioLogs === 0 ? (
        <HomeEmptyState />
      ) : (
        <TouchableOpacity
          style={[styles.logContainer, isProcessing && styles.processing]}
          onPress={() => {
            if (!isProcessing) {
              if (pressedState === "expanded") {
                navigation.navigate("Log");
              } else {
                togglePressed();
              }
            }
          }}
          activeOpacity={isProcessing ? 1 : 0.7}
        >
          {/* If processing, show an indicator */}
          {isProcessing && (
            <View style={styles.processingOverlay}>
              <ActivityIndicator size="large" />
            </View>
          )}
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
            {pressedState === "expanded" && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#8a8a8e"
              />
            )}
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
  processing: {
    opacity: 0.5,
  },
  processingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
  profileButton: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
  },
});

export default HomeScreen;
