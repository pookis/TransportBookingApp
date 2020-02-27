import React, { Component } from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Db from "../components/db"
import Number from "../components/number"

export default function SecondScreen({ route, navigation }) {
  const { rout } = route.params

  return (
    <View>
      <View>
        <Text style={styles.caption}>{rout.dest}</Text>
        <Button
          title="<- Atgal Pasirinkti marsruta"
          onPress={() => navigation.navigate("Home")}
        />
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
    marginTop: 100
  },
  caption: {
    color: "#eeee",
    fontSize: 19,
    letterSpacing: 1,
    textAlign: "center"
  }
})
