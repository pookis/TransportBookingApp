import * as React from "react"
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native"

import { ScrollView } from "react-native-gesture-handler"
import * as WebBrowser from "expo-web-browser"
import HomeScreen from "../screens/HomeScreen"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SecondScreen from "../screens/SecondScreen"
import FormScreen from "../screens/FormScreen"

const Stack = createStackNavigator()

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dates" component={SecondScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
    </Stack.Navigator>
  )
}
