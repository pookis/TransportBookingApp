import React, { Component } from "react"
import { FlatList, StyleSheet, Text, View, Button } from "react-native"
import Number from "./number"

//console.disableYellowBox = true

export default class Db extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month1: [],
      month2: [],
      dates1: [],
      dates2: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch("http://jobabroad.net/wp-json/rpi/content")
    const json = await response.json()

    const { month_1, month_2, days_1, days_2 } = json

    this.setState({
      month1: month_1,
      month2: month_2,
      dates1: days_1,
      dates2: days_2
    })
  }

  dates1 = () => {
    return this.state.dates1.map(item => <Number nr={item} />)
  }

  dates2 = () => {
    return this.state.dates2.map(item => <Number nr={item} />)
  }

  render() {
    return (
      <View>
        <View style={styles.container}>{this.dates1()}</View>
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
    backgroundColor: "#777"
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
