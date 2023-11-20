import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  // Placeholder for user data
  const userData = {
    name: "Javi",
    username: "@javi",
    profilePictureUri: require("../../assets/profile-picture.jpeg"),
  };

  const listData = {
    name: "voicepal stories",
    listeners: "10",
    profilePictureUri: require("../../assets/wfh.png"),
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen}>
        <Image
          source={userData.profilePictureUri}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.username}>{userData.username}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            onPress={console.log("Edit profile")}
          >
            <Text style={styles.buttonText}>edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondButton]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.buttonText}>settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>my lists</Text>
          <TouchableOpacity
            style={styles.newListButton}
            onPress={() => navigation.navigate("New List")}
          >
            <Text style={styles.buttonText}>new list</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listComponent}
            onPress={() => navigation.navigate("List")}
          >
            <Image
              source={listData.profilePictureUri}
              style={styles.listImage}
            />
            <View style={styles.listText}>
              <Text style={styles.listTitle}>{listData.name}</Text>
              <Text style={styles.listSubtitle}>
                {listData.listeners} listeners
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight,
  },
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  profilePicture: {
    width: 88,
    height: 88,
    borderRadius: 36,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
    color: "#87878e",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 24,
  },
  button: {
    padding: 12,
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "#F7F7F9",
  },
  newListButton: {
    padding: 12,
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "#F7F7F9",
    marginBottom: 12,
  },
  buttonText: {
    fontWeight: "500",
  },
  firstButton: {
    flex: 1,
    marginRight: 10, // Space between buttons
  },
  secondButton: {
    flex: 1,
  },
  profilesection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#87878e",
    marginBottom: 12,
  },
  listComponent: {
    height: 72,
    flex: 1,
    flexDirection: "row",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderColor: "#E4E4E5",
    borderWidth: 1,
  },
  listText: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    marginBottom: 2,
  },
  listSubtitle: {
    fontSize: 14,
    color: "#87878e",
  },
  listImage: {
    width: 40,
    height: 40,
    borderRadius: 16,
    marginRight: 12,
  },
});

export default ProfileScreen;
