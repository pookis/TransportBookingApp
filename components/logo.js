import * as React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default function Logo() {
  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 41
        }}
        source={require("../assets/images/logo.jpg")}
      />
    </View>
  )
}
