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
        <View>
          <Text style={styles.sectionTitle}>my lists</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("New List")}
          >
            <Text style={styles.buttonText}>new list</Text>
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
    marginVertical: 5,
    borderRadius: 999,
    backgroundColor: "#F7F7F9",
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
  sectionTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#87878e",
    marginBottom: 12,
  },
});

export default ProfileScreen;
