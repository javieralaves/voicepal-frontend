import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Log({ navigation }) {
  // Playing state
  const [audioState, setAudioState] = useState(false);

  // Share toast state
  const [isToastVisible, setToastVisible] = useState(false);

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
              name={Platform.OS === "android" ? "arrow-left" : "chevron-down"}
              size={24}
              color="#8a8a8e"
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity
              onPress={() => {
                setToastVisible(true);
                setTimeout(() => setToastVisible(false), 3000);
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
          <Text style={styles.summaryText}>
            Here's some sample text for what an audio summary looks like. Let's
            have a few lines of summary, like that. So that I can see how this
            looks and figure out the styling and truncation. I'm going to need a
            little more than that, so I should probably keep typing. Anyway,
            how's your day today? Are you having a good time? What's the weather
            like?
          </Text>
        </View>
        <View style={styles.transcriptionArea}>
          <Text style={styles.sectionTitle}>Transcript</Text>
          <Text style={styles.transcriptionText}>
            In our latest audio note, we delve into the core hypothesis behind
            VoicePal. We believe that in today's fast-paced world, people often
            have insightful thoughts and ideas while on the move, but they lack
            an efficient way to capture and revisit these fleeting moments.
            VoicePal aims to bridge this gap by offering a seamless audio
            recording experience, coupled with an intuitive interface for
            organizing and revisiting these thoughts. Our goal is to not only
            preserve these valuable insights but also to enhance the user's
            ability to reflect and act upon them, transforming raw thoughts into
            meaningful actions.
          </Text>
          {isToastVisible && (
            <View style={styles.toastContainer}>
              <Text style={styles.toastText}>Generating a public link...</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#F7F7F9",
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
    fontSize: 14,
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
    fontWeight: "600",
    fontSize: 15,
    color: "#000",
    marginBottom: 8,
  },
  summaryArea: {
    padding: 16,
    margin: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    shadowOpacity: 0.6,
  },
  summaryText: {
    fontSize: 15,
    lineHeight: 22,
  },
  transcriptionArea: {
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 64,
  },
  transcriptionText: {
    fontSize: 15,
    lineHeight: 22,
  },
  toastContainer: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: "center",
    padding: 12,
    backgroundColor: "rgba(60,60,60,0.9)",
    borderRadius: 20,
    marginHorizontal: 20,
  },
  toastText: {
    color: "white",
  },
});
