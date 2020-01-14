import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { colors } from "../constants";

interface Props extends TouchableOpacityProps {
  title: string;
  age: string;
}

export class  ListItem extends Component<Props, {}> {
  render() {
    const { title,age } = this.props;
    return (
      <TouchableOpacity {...this.props} style={styles.itemContainer}>
        
        <View style={styles.singleItem}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.ageStyle}>{age}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.containerBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  singleItem: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'flex-start', 
    height: 80, 
    backgroundColor: colors.niceRed
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8
  },
  ageStyle: {
    fontSize: 10,
    fontWeight: "100",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8
  }
});
