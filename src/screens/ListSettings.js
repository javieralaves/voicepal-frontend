import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListSettings({ navigation }) {
  const [listName, setListName] = useState("voicepal stories"); // initiated with values for demo purposes
  const [description, setDescription] = useState(
    "stories and insights from the people behind voicepal"
  );
  const [isPublic, setIsPublic] = useState(true); // true for public, false for private

  const handleAddProfilePicture = () => {
    // Handle the action for adding a profile picture
  };

  const handleTabSelect = (selectedVisibility) => {
    setIsPublic(selectedVisibility);
  };

  const handleCreateList = () => {
    // Code to push data to the database
    console.log("Creating list:", { listName, description, isPublic });
    // Add database logic here

    // Close the modal view after saving changes
    navigation.goBack(); // or use navigation.pop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.profilePictureButton}
            onPress={handleAddProfilePicture}
          >
            <MaterialCommunityIcons
              name="image-plus"
              color={"#87878e"}
              size={24}
            />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setListName}
              value={listName}
              placeholder="add a name"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={setDescription}
              value={description}
              placeholder="description"
            />
          </View>
          <View style={styles.visibilitySection}>
            <Text style={styles.controlSectionTitle}>visibility</Text>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, isPublic ? styles.activeTab : {}]}
                onPress={() => handleTabSelect(true)}
              >
                <MaterialCommunityIcons
                  name="earth"
                  size={20}
                  color={isPublic ? "#242424" : "#87878E"}
                  style={styles.tabIcon}
                />
                <Text
                  style={isPublic ? styles.selectedTabText : styles.tabText}
                >
                  public
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab, !isPublic ? styles.activeTab : {}]}
                onPress={() => handleTabSelect(false)}
              >
                <MaterialCommunityIcons
                  name="lock"
                  size={20}
                  color={!isPublic ? "#242424" : "#87878E"}
                  style={styles.tabIcon}
                />
                <Text
                  style={!isPublic ? styles.selectedTabText : styles.tabText}
                >
                  private
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.captionText}>
              {isPublic
                ? "anyone can see this list on your profile"
                : "only people with the link can see this list"}
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.createButton} onPress={handleCreateList}>
        <Text style={styles.createButtonText}>save changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 32,
  },
  profilePictureButton: {
    width: 64,
    height: 64,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#E4E4E5",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    alignSelf: "center",
  },
  inputContainer: {},
  textInput: {
    height: 56,
    backgroundColor: "#F7F7F9",
    padding: 16,
    marginBottom: 24,
    borderRadius: 12,
  },
  controlSectionTitle: {
    fontWeight: "600",
    marginBottom: 6,
  },
  visibilitySection: {
    marginBottom: 24,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 6,
    backgroundColor: "#F7F7F9",
    borderRadius: 12,
    padding: 8,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#FFF",
  },
  tabIcon: {
    marginRight: 5,
  },
  tabText: {
    color: "#87878E",
    fontWeight: "600",
  },
  selectedTabText: {
    color: "#242424",
    fontWeight: "600",
  },
  captionText: {
    fontSize: 13,
    color: "#87878e",
  },
  createButton: {
    backgroundColor: "#5E5CE6",
    padding: 12,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    marginBottom: 32,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
