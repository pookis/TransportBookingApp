import React, { Component } from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Db from "../components/db"
import Number from "../components/datesBtn"
import Layout from "../constants/Layout"
import { WebView } from "react-native-webview"

import { Dimensions } from "react-native"

export default function FormScreen({ route, navigation }) {
  const { routes } = route.params

  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height
  return (
    <View>
      <Text style={styles.caption}>{routes.nr}</Text>
      <Button
        title="<- Atgal Pasirinkti Datas"
        onPress={() => navigation.navigate("Dates")}
      />
    </View>
  )
  /* 
  return {
    /* <WebView

      source={{ uri: "https://jobabroad.net" }}
      style={{ marginTop: 0 }}
    /> */
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
