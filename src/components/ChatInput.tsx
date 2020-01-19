import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacityProps,
  View
} from "react-native";
import { colors } from "../constants";

interface Props extends TouchableOpacityProps {
  text: string;
}

export class ChatInput extends Component<Props, {}> {
  render() {
    const { text } = this.props;
    return (
        <View {...this.props} style={styles.itemContainer}> 
            <TextInput  placeholder={text} placeholderTextColor="#202020" style={styles.chatInputStyle}></TextInput>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    marginBottom: 10
  },
  chatInputStyle: { 
    width: '100%',  
    height: 40,
    backgroundColor: colors.niceRed,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingLeft: 10,
    paddingRight: 10
  }
});

