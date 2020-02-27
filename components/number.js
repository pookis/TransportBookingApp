import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { Ellipse } from "react-native-svg"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

export default function Number(props) {
  const navigation = useNavigation()
  const nr = props.nr

  return (
    <TouchableOpacity
      style={styles.container}
      key={props.nr.toString()}
      //Pass on Value dates
      onPress={() => navigation.navigate("Form", { routes: { nr } })}
    >
      <Svg viewBox="0 0 64.00 64.00" style={styles.ellipse}>
        <Ellipse
          strokeWidth={4}
          fill="rgba(175,164,164,1)"
          stroke="rgba(230, 230, 230,1)"
          cx={32}
          cy={32}
          rx={30}
          ry={30}
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
    width: 40,
    height: 40
  },
  textInput: {
    position: "absolute",
    fontSize: 16
  },
  container: {
    margin: 3,
    alignItems: "center",
    justifyContent: "center"
  }
})
