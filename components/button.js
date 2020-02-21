import * as React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

export default function Btn(props) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Dates")}
    >
      <Text style={styles.caption}>{props.dest}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 36,
    marginBottom: 6,
    elevation: 6,
    backgroundColor: "#eee",
    borderRadius: 6,
    borderColor: "rgba(238,69,58,1)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,

    shadowOffset: {
      height: 3,
      width: 3
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  caption: {
    color: "#000",
    fontSize: 13,
    letterSpacing: 1,
    textAlign: "center"
  }
})
