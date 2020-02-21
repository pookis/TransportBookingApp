import * as React from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

export default function SecondScreen({ navigation }) {
  return (
    <View>
      <Text>SECOND SCREEN</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  )
}
