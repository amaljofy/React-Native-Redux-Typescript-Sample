import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../constants";
import { reverse } from "dns";

interface Props extends TouchableOpacityProps {
  title: string;
}

export class ChatItemRight extends Component<Props, {}> {
  render() {
    const { title } = this.props;
    return (
      <TouchableOpacity {...this.props} style={styles.itemContainer}>
        <View style={styles.singleItem}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: colors.containerBg,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  singleItem: {
    borderRadius: 10,
    justifyContent: 'center'
  },
  textStyle: {
    overflow: 'hidden',
    alignSelf:'baseline',
    fontSize: 18,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 10,
    textShadowColor: colors.borderColor,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    backgroundColor: colors.primary,
  },
});
