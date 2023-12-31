import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import Toast, { BaseToast } from "react-native-toast-message";

export default function ListView({ navigation }) {
  const isCreator = true;

  const listData = {
    name: "voicepal stories",
    author: "javi alaves",
    description: "stories and insights from the people behind voicepal",
    profilePictureUri: require("../../assets/wfh.png"),
    listMembers: 1,
    unansweredQuestions: 0,
  };

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          backgroundColor: "#242424",
          borderRadius: 9999,
          borderLeftColor: "#242424",
        }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        text1Style={{
          fontSize: 15,
          fontWeight: "500",
          color: "white",
        }}
      />
    ),
    // Add other types if needed
  };

  // Placeholder functions for button presses
  const handleMembersPress = () => {
    navigation.navigate("List Listeners");
  };
  const handleQuestionsPress = () => {
    navigation.navigate("List Questions");
  };
  const handleSharePress = () => {
    const shareLink = "https://voicepal.me"; // Replace with actual link
    Clipboard.setStringAsync(shareLink);

    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Link copied to clipboard",
    });
  };
  const handleSubscriptionPress = () => console.log("Manage subscription");
  const handleListSettings = () => {
    navigation.navigate("List Settings");
  };

  let buttons = [];

  if (isCreator) {
    // For creators, add members and questions buttons, then share button
    buttons = [
      {
        icon: "account-circle",
        text: listData.listMembers.toString(),
        onPress: handleMembersPress,
      },
      {
        icon: "comment-question",
        text: listData.unansweredQuestions.toString(),
        onPress: handleQuestionsPress,
      },
      { icon: "share", text: "share", onPress: handleSharePress },
    ];
  } else {
    // For consumers, joined button, then ask button, then share button
    buttons = [
      {
        text: "joined",
        onPress: () => {
          Alert.alert(
            "Leave list",
            "Are you sure you want to leave this list?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Confirm",
                onPress: () => console.log("Confirm Pressed"),
              },
            ],
            { cancelable: false }
          );
        },
      },
      {
        icon: "microphone",
        text: "ask",
        onPress: handleQuestionsPress,
      },
      { icon: "share", text: "share", onPress: handleSharePress },
    ];
  }

  const handleRecordButton = () => {
    console.log("Microphone pressed");
    // Open recording modal
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Image source={listData.profilePictureUri} style={styles.listImage} />
          <Text style={styles.listTitle}>{listData.name}</Text>
          <Text style={styles.listCreator}>by {listData.author}</Text>
          <Text style={styles.listDescription}>{listData.description}</Text>
          {isCreator && (
            <TouchableOpacity
              style={styles.listSettings}
              onPress={handleListSettings}
            >
              <MaterialCommunityIcons
                name={"pencil"}
                size={24}
                color={"#87878e"}
              />
            </TouchableOpacity>
          )}
          <View style={styles.buttonRow}>
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={button.onPress}
              >
                <MaterialCommunityIcons
                  name={button.icon}
                  size={24}
                  color={"#242424"}
                />
                <Text style={styles.buttonText}>{button.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* don't have the record button component here so just made one in view */}
      {isCreator && (
        <TouchableOpacity
          style={styles.microphoneButton}
          onPress={handleRecordButton}
        >
          <MaterialCommunityIcons name="microphone" size={32} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 16,
    marginTop: 16 + StatusBar.currentHeight,
  },
  listImage: {
    width: 88,
    height: 88,
    borderRadius: 32,
    marginBottom: 12,
  },
  listTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "800",
    marginBottom: 2,
  },
  listCreator: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#87878e",
  },
  listDescription: {
    color: "#87878e",
  },
  listSettings: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E4E4E5",
    borderRadius: 12,
    top: 16,
    right: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#F7F7F9",
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
  },
  buttonText: {
    marginLeft: 8,
    color: "#242424",
    fontWeight: "500",
  },
  microphoneButton: {
    position: "absolute",
    bottom: 64,
    alignSelf: "center",
    backgroundColor: "#5E5CE6",
    width: 88,
    height: 88,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
