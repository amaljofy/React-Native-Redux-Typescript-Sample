import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { colors } from "../../../constants";
import { ListItem } from "../../../components/ListItem";
import styles from "./styles";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class SideBar extends Component<Props, {}> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <Image source={require('../../../../images/img1.png')} style={styles.profileImage}></Image>
         <Text style={styles.textStyle}>Amal Jofy</Text>

      </View>
    );
  }
}
export default SideBar;
