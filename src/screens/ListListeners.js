import {
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

export default function ListListeners({ navigation }) {
  const handleMemberPress = () => {
    // navigate to the appropriate profile depending on the id
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>listeners</Text>
          <TouchableOpacity style={styles.member} onPress={handleMemberPress}>
            <Image
              source={require("../../assets/profile-picture.jpeg")}
              style={styles.memberImage}
            />
            <View style={styles.memberText}>
              <Text style={styles.memberTitle}>javi alaves</Text>
              <Text style={styles.memberSubtitle}>@javi</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 24,
  },
  member: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#F7F7F9",
    borderRadius: 16,
    padding: 16,
  },
  memberImage: {
    width: 48,
    height: 48,
    borderRadius: 20,
    marginRight: 12,
  },
  memberText: {
    flex: 1,
  },
  memberTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    marginBottom: 2,
  },
  memberSubtitle: {
    fontSize: 14,
    color: "#87878e",
  },
});
