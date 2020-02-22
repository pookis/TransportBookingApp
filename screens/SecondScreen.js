import React, { Component } from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Db from "../components/db"
import Number from "../components/number"

export default function SecondScreen({ navigation }) {
  return (
    <View>
      <View>
        <Button title="xopne" onPress={() => navigation.navigate("Home")} />
      </View>
      <View style={styles.container}>
        <Db />
      </View>
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
