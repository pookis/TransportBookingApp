import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { Ellipse } from "react-native-svg"

function Number(props) {
  return (
    <View style={styles.container}>
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
      <Text style={styles.textInput}>{props.nr}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ellipse: {
    width: 40,
    height: 40
  },
  textInput: {
    top: 7,
    left: 4,
    width: 33,
    height: 29,
    color: "#121212",
    position: "absolute",
    fontSize: 22,
    lineHeight: 0,
    textAlign: "center"
  },
  container: {
    margin: 3,
    position: "relative"
  }
})

export default Number
