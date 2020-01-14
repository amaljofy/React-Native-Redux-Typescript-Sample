import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { Header } from "../../../components";
import styles from "./styles";


class Blank extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header
          title="Home"
        />

      <Text>Hello, This is blank screen!</Text>
    </View>
    );
  }
}

export default Blank;
