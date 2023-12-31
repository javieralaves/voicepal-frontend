import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import HomeScreen from "./src/screens/HomeScreen";
import Log from "./src/screens/Log";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import NewList from "./src/screens/NewList";
import ListView from "./src/screens/ListView";
import ListListeners from "./src/screens/ListListeners";
import ListQuestions from "./src/screens/ListQuestions";
import ListSettings from "./src/screens/ListSettings";

// authentication view
function AuthenticationView({ navigation }) {
  // stylesheet for view
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "F7F7F9",
    },
    container: {
      flex: 1,
      margin: 20,
    },
    welcomeContainer: {
      flex: 3,
      alignItems: "center",
      justifyContent: "center",
    },
    welcomeTitle: {
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 32,
      textAlign: "center",
      marginTop: 20,
    },
    welcomeDescription: {
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 24,
      color: "#8A8A8E",
      textAlign: "center",
      marginTop: 4,
    },
    footer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    appleButton: {
      height: 44,
      backgroundColor: "#000000",
      borderRadius: 10,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    socialLogo: {
      position: "absolute",
      top: "50%",
      marginTop: -11,
      height: 20,
      width: 20,
      left: 14,
    },
    appleButtonText: {
      fontSize: 17,
      fontWeight: "500",
      lineHeight: 24,
      color: "white",
      textAlign: "center",
    },
    googleButton: {
      height: 44,
      backgroundColor: "#FFFFFF",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: 10,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12,
    },
    googleButtonText: {
      fontSize: 17,
      fontWeight: "500",
      lineHeight: 24,
      color: "black",
      textAlign: "center",
    },
    captionArea: {
      marginTop: 48,
    },
    footerCaption: {
      textAlign: "center",
      color: "#8A8A8E",
      fontSize: 13,
    },
  });

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image source={require("./assets/voicepal-icon.png")} />
          <Text style={styles.welcomeTitle}>Welcome to VoicePal</Text>
          <Text style={styles.welcomeDescription}>
            An audio journal for your fuzzy thoughts
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.appleButton}
            onPress={() => navigation.navigate("Main")}
          >
            <Image
              source={require("./assets/apple-logo.png")}
              style={styles.socialLogo}
            />
            <Text style={styles.appleButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => navigation.navigate("Main")}
          >
            <Image
              source={require("./assets/google-logo.png")}
              style={styles.socialLogo}
            />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <View style={styles.captionArea}>
            <Text style={styles.footerCaption}>
              By tapping continue, you accept our Terms and Conditions and
              Privacy Policy.
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

// navigation stack
const Stack = createNativeStackNavigator();

// main app
function App() {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Authentication"
            component={AuthenticationView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Log"
            component={Log}
            options={{
              headerShown: false,
              presentation: "modal",
              cardStyleInterpolator: CardStyleInterpolators,
            }}
          />
          <Stack.Screen
            name="New List"
            component={NewList}
            options={{
              headerShown: false,
              presentation: "modal",
              cardStyleInterpolator: CardStyleInterpolators,
            }}
          />
          <Stack.Screen
            name="List"
            component={ListView}
            options={{
              headerShown: false,
              presentation: "modal",
              cardStyleInterpolator: CardStyleInterpolators,
            }}
          />
          <Stack.Screen
            name="List Listeners"
            component={ListListeners}
            options={{
              headerShown: false,
              presentation: "modal",
              cardStyleInterpolator: CardStyleInterpolators,
            }}
          />
          <Stack.Screen
            name="List Questions"
            component={ListQuestions}
            options={{
              headerShown: false,
              presentation: "modal",
              cardStyleInterpolator: CardStyleInterpolators,
            }}
          />
          <Stack.Screen
            name="List Settings"
            component={ListSettings}
            options={{
              headerShown: true,
              presentation: "modal",
              cardStyleInterpolator: CardStyleInterpolators,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: true, title: "Settings" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
}

export default App;
