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

import Btn from "../components/destBtn"

export default function HomeScreen({ navigate }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#eee", marginBottom: 11, fontSize: 15 }}>
        PASIRINKITE MARŠRUTĄ
      </Text>

      <Btn dest="LIETUVA - AIRIJA" />
      <Btn dest="LIETUVA - ISPANIJA" />
      <Text> </Text>
      <Btn dest="AIRIJA - LIETUVA" />
      <Btn dest="ISPANIJA - LIETUVA" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
})
