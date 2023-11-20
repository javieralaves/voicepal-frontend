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

export default function ListQuestions({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>unanswered questions</Text>
          <View style={styles.questionContainer}>
            <View style={styles.questionContent}>
              <Image
                source={require("../../assets/profile-picture.jpeg")}
                style={styles.memberImage}
              />
              <View style={styles.memberText}>
                <Text style={styles.questionTitle}>
                  are you planning to focus on openai or will you look into
                  other models?
                </Text>
                <Text style={styles.questionMeta}>where to learn about ai</Text>
                <Text style={styles.questionMeta}>pablo simko · just now</Text>
              </View>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={console.log("handle pass")}
                >
                  pass
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={console.log("record answer")}
              >
                <Text style={styles.buttonText}>answer</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  questionContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  questionContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 12,
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
  questionTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  questionMeta: {
    fontSize: 13,
    color: "#87878e",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
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
});
