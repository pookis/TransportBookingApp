import * as React from "react"
import { WebView } from "react-native-webview"

import { StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import * as WebBrowser from "expo-web-browser"
import { RectButton, ScrollView } from "react-native-gesture-handler"

export default function LinksScreen() {
  return (
    <WebView
      source={{ uri: "https://adstream.tech/sgp/kontaktai" }}
      style={{ marginTop: 0 }}
    />
  )
}
