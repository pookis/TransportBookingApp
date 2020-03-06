import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { Ellipse } from "react-native-svg"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

export default function Number(props) {
  const navigation = useNavigation()
  const nr = props.nr
  const month = props.month
  const dest = props.destination

  return (
    <TouchableOpacity
      style={styles.container}
      key={props.nr.toString()}
      //Pass on dates
      onPress={() =>
        navigation.navigate("Form", { routes: { month, nr, dest } })
      }
    >
      <Svg viewBox="0 0 64.00 64.00" style={styles.ellipse}>
        <Ellipse
          strokeWidth={3}
          stroke="rgba(238,69,58,1)"
          fill="rgba(230, 230, 230,1)"
          cx={52}
          cy={32}
          rx={50}
          ry={50}
        ></Ellipse>
      </Svg>
      <Text style={styles.textInput} key={props.nr}>
        {props.nr}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ellipse: {
    width: 50,
    height: 50
  },
  textInput: {
    position: "absolute",
    fontSize: 24
  },
  container: {
    margin: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20
  }
})
