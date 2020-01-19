import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Header } from "../../../components";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import styles from "./styles";
import { ChatItemRight, ChatItemLeft, ChatInput } from "../../../components";


interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface itemProp {
  item: any;
}

interface State {
  
}

class Chat_Screen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {navigation } = this.props;
    return (
      <View style={styles.container}>
          <Header
          title="Chat Screen"
          leftButtonPress={() => navigation.openDrawer()}
          />
          <View style={styles.chatInputStle}>
            <ChatInput text={"Chat Input...."}></ChatInput>
          </View>
    </View>
    );
  }
}

export default Chat_Screen;
