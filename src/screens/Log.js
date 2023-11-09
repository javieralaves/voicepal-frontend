import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Log({ navigation }) {
  // Playing state
  const [audioState, setAudioState] = useState(false);

  // Function to toggle audio state
  const playButtonPressed = () => {
    setAudioState(!audioState);
  };

  // Action Sheet setup
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
    <SafeAreaView style={styles.safeArea} edges={["right", "left"]}>
      <ScrollView style={styles.container}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#8a8a8e"
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity
              onPress={() => {
                /* handle share functionality */
              }}
            >
              <Feather name="share" size={24} color="#8a8a8e" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openMenu}
              style={styles.actionSheetButton}
            >
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={24}
                color="#8a8a8e"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.image}
          source={require("../../assets/log-image.png")}
        />
        <View style={styles.logInfo}>
          <Text style={styles.logTitle}>The hypothesis behind VoicePal</Text>
          <Text style={styles.posted}>Nov 1 • 19:43</Text>
        </View>
        <View style={styles.mediaPlayer}>
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
        <View style={styles.summaryArea}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summaryText}>Audio Summary Here</Text>
        </View>
        <View style={styles.transcriptionArea}>
          <Text style={styles.sectionTitle}>Transcript</Text>
          <Text style={styles.transcriptionText}>Transcription Here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionSheetButton: {
    marginLeft: 16, // 16 pixels apart from the share button
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width * (5 / 4),
  },
  logInfo: {
    padding: 16,
  },
  logTitle: {
    fontWeight: "bold",
    fontSize: 22,
  },
  posted: {
    color: "grey",
    marginTop: 8,
  },
  mediaPlayer: {
    padding: 16,
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
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
    marginBottom: 12,
  },
  summaryArea: {
    padding: 16,
  },
  summaryText: {
    // Include text styles for summary
  },
  transcriptionArea: {
    padding: 16,
    // Include styles for transcription text area
  },
  transcriptionText: {
    // Include text styles for transcription
  },
});
