import React, { Component } from "react";
import { View, Text } from "react-native";
import {Button, Input} from "../../../components";

import { NavigationScreenProp, NavigationState } from "react-navigation";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}


class Login extends Component<Props, {}> {
  
  render() {
    const myIcon = <Icon name="android" size={20} color="#900" />;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Login_Screen</Text>
      <Input
        placeholder="Username"
        autoCompleteType = "username"
        underlineColorAndroid="transparent"
        inlineImageLeft = 'myIcon'
        />
      <Input
        placeholder="Password"
        autoCompleteType = "password"
        underlineColorAndroid="transparent"
        />
      <Button text="Login"
       onPress={() => this.props.navigation.navigate("Main")} />
    </View>
    );
  }
}

export default Login;
