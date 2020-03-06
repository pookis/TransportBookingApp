import React, { Component } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native"
import Number from "./datesBtn"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

export default class Db extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month1: [],
      month2: [],
      dates1: [],
      dates2: [],
      aboutUs: [],
      tc: [],
      destination1: "LIETUVA - ISPANIJAx",
      destination2: "ISPANIJA - LIETUVAx",
      destination3: "AIRIJA - LIETYVAx",
      destination4: "LIETUVA - AIRIJAx"
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch("http://jobabroad.net/wp-json/rpi/content")
    const json = await response.json()

    const { month_1, month_2, days_1, days_2, about_us } = json

    this.setState({
      month1: month_1,
      month2: month_2,
      dates1: days_1,
      dates2: days_2
    })
  }

  dates1 = () => {
    return this.state.dates1.map(nr => (
      <Number
        nr={nr}
        key={nr}
        month={this.state.month1}
        destination={this.props.dest}
      />
    ))
  }

  dates2 = () => {
    return this.state.dates2.map(nr => (
      <Number
        nr={nr}
        key={nr}
        month={this.state.month2}
        destination={this.props.dest}
      />
    ))
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.header}>{this.state.month1}</Text>
        </View>

        <View style={styles.container}>{this.dates1()}</View>

        <View style={styles.container1}>
          <Text style={styles.header}>{this.state.month2}</Text>
        </View>
        <View style={styles.container}>{this.dates2()}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  container1: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#ccc",

    padding: 2,
    marginTop: 6
  }
})

/* const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    fontSize: 12
  },
  dates: {
    fontSize: 40,
    marginTop: 50
  }
})
 */
