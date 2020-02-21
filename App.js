import * as React from "react"
import { Platform, StatusBar, StyleSheet, View, Image } from "react-native"
import { SplashScreen } from "expo"
import * as Font from "expo-font"
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Logo from "./components/logo"
import BottomTabNavigator from "./navigation/BottomTabNavigator"

const Stack = createStackNavigator()

export default function App() {
  const MyTheme = {
    dark: true,
    colors: {
      card: "#fff",
      background: "#242331"
    }
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{
            headerTitle: props => <Logo />,
            headerStyle: {
              height: 100,
              borderBottomColor: "rgba(238,70,55,1)",
              borderBottomWidth: 4
            },
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
