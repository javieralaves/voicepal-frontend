import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Log from "./Log";

const ProfileScreen = ({ navigation }) => {
  // Placeholder for user data
  const userData = {
    name: "Javi",
    profilePictureUri: require("../../assets/profile-picture.jpeg"),
  };

  // Function to handle sending feedback
  const sendFeedback = () => {
    // Logic for sending feedback
  };

  // Function to handle logging out
  const logOut = () => {
    // Logic for logging out
  };

  // Function to handle deactivating account
  const deactivateAccount = () => {
    Alert.alert(
      "Deactivate Account",
      "Are you sure you want to deactivate your account?",
      [
        { text: "Cancel", style: "cancel" },
        // If confirmed, call a function to handle the deactivation
        {
          text: "Deactivate",
          onPress: () => console.log("Deactivate account"),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={userData.profilePictureUri}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>{userData.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={console.log("Edit profile")}
        >
          <Text>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#F7F7F9",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },

  button: {
    padding: 12,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },

  firstButton: {
    flex: 1, // This allows the button to expand
    marginRight: 10, // Space between buttons
  },

  secondButton: {
    flex: 1,
  },
});

export default ProfileScreen;
