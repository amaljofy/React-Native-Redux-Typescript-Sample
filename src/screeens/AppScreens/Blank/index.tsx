import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { Header } from "../../../components";
import { NavigationScreenProp, NavigationState, NavigationActions } from "react-navigation";
import styles from "./styles";
import { AvatarItem } from "../../../components";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;

}
interface State {
  
}

class Blank extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { navigation} = this.props;
    const responseJson = this.props.navigation.getParam("dataJSON");


    return (
      <View style={styles.container}>
          <Header
          title={responseJson.author}
          backButtonPress={() => navigation.goBack()}
        />
      <Text style={styles.textStyle}>Hello, This is blank screen!</Text>
      <AvatarItem avatar={responseJson.download_url+".jpg"} title={responseJson.author}></AvatarItem>
    </View>
    );
  }
}

export default Blank
