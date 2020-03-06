import React, { Component } from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Db from "../components/db"
import Number from "../components/datesBtn"

export default function SecondScreen({
  route,
  navigation,
  destination,
  month
}) {
  const { rout } = route.params

  return (
    <View>
      <View>
        <Text style={styles.caption}>{rout.dest}</Text>
        <Text style={styles.title} onPress={() => navigation.navigate("Home")}>
          Pasirinkite datą:
        </Text>
      </View>
      <View style={styles.container}>
        <Db dest={rout.dest} />
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
    marginTop: 40
  },
  caption: {
    color: "#eeee",
    fontSize: 25,
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 30
  },
  title: {
    color: "#eee",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 4
  }
})
