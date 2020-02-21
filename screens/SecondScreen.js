import * as React from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Number from "../components/number"

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Number nr="3" />
      <Number nr="26" />
      <Number nr="30" />
      <Number nr="4" />
      <Number nr="16" />
      <Number nr="30" />
      <Number nr="3" />
      <Number nr="26" />
      <Number nr="30" />
      <Number nr="4" />
      <Number nr="16" />
      <Number nr="30" />

      <Button title="G" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#777"
  }
})
