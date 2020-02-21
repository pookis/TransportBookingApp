import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabBarIcon from "../components/TabBarIcon"
import LinksScreen from "../screens/LinksScreen"
import AboutUs from "../screens/AboutUs"
import HomeNavigation from "./HomeNavigation"

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="REZERVUOTI"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-bus" />
          )
        }}
      />
      <BottomTab.Screen
        name="TAISYKLĖS"
        component={LinksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          )
        }}
      />

      <BottomTab.Screen
        name="APIE MUS"
        component={AboutUs}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-apps" />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
