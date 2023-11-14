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
} from "react-native";
import LogComponent from "../components/LogComponent";

const ProfileScreen = ({ navigation }) => {
  // Placeholder for user data
  const userData = {
    name: "Javi",
    profilePictureUri: require("../../assets/profile-picture.jpeg"),
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen}>
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
        <View>
          <LogComponent navigation={navigation} style={styles.logSpacing} />
          <LogComponent navigation={navigation} style={styles.logSpacing} />
          <LogComponent navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F9",
  },
  screen: {
    flex: 1,
    padding: 20,
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
    marginBottom: 20,
  },

  button: {
    padding: 12,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },

  firstButton: {
    flex: 1,
    marginRight: 10, // Space between buttons
  },

  secondButton: {
    flex: 1,
  },
  logSpacing: {
    marginBottom: 12, // Spacing between logs
  },
});

export default ProfileScreen;
