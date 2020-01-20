import React, { Component } from "react";
import { View, Button, FlatList, ActivityIndicator, Alert } from "react-native";
import { Header } from "../../../components";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import styles from "./styles";
import { ChatItemRight, ChatItemLeft, ChatInput } from "../../../components";


interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  chatDataList: Array<ChatObj>;
}

interface itemProp {
  item: any;
}

interface State {
  chatDataList: Array<ChatObj>;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


class Chat_Screen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chatDataList: [{_id:"1000",_isUser:true,_text:"Hello How are you"}]
    };
  }

  handleClick(){
    var seq1 = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    var seq2 = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

    this.setState({chatDataList: [
      ...this.state.chatDataList,
      {_id:seq1.toString(),_isUser:false,_text:"Hello How"},
      {_id:seq2.toString(),_isUser:true,_text:"Hello How fdf are you"}
    ]})

  }

  render() {
    const { chatDataList } = this.state;
    const {navigation } = this.props;
    return (
      <View style={styles.container}>
          <Header
          title="Chat Screen"
          leftButtonPress={() => navigation.openDrawer()}
          />
          <View style={styles.contentStyle}>
          <FlatList
            ref="listRef"
            data={chatDataList}
            renderItem={({ item }) => item._isUser ? (<ChatItemRight title={item._text}/>):(<ChatItemLeft title={item._text}/>)}
            keyExtractor={item => item._id}
          />
          </View>
          <View style={styles.chatInputView}>
            <ChatInput style={styles.chatInputStyle} text={"Chat Input...."}></ChatInput>
            <View style={styles.sendButtonStyle}>
              <Button
                title="Send"
                onPress={() => this.handleClick()}>
              </Button>
            </View>
          </View>
    </View>
    );
  }
}


export type ChatObj = {
  _id: string,
  _isUser: boolean,
  _text: string
}

export default Chat_Screen;
