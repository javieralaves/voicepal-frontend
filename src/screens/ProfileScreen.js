import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 12,
    alignItems: "left",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default ProfileScreen;
