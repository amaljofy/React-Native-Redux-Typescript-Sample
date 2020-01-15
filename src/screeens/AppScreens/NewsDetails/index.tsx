import React, { Component } from "react";
import { View, Image, Alert } from "react-native";
import { Header } from "../../../components";
import { NavigationScreenProp, NavigationState, NavigationActions } from "react-navigation";
import styles from "./styles";
import { AvatarItem } from "../../../components";
import { WebView } from 'react-native-webview';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;

}
interface State {
  
}

class NewsDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { navigation} = this.props;
    const responseJson = this.props.navigation.getParam("dataJSON");


    return (
      <View style={styles.container}>
          <Header
          title={responseJson.creator.__text}
          backButtonPress={() => navigation.goBack()}
        />
      <AvatarItem avatar={responseJson.image.loc.__text} title={responseJson.description}></AvatarItem>
      <WebView source={{ html: responseJson.encoded.__text }} />
    </View>
    );
  }
}

export default NewsDetails
