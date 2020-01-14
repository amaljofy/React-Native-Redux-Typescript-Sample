import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground
} from "react-native";
import { colors } from "../constants";

interface Props extends TouchableOpacityProps {
  title: string;
  age: string;
  avatar: string;
}

export class  ListItem extends Component<Props, {}> {
  render() {
    const { title,age,avatar } = this.props;
    return (
      <TouchableOpacity {...this.props} style={styles.itemContainer}>
        <View style={styles.singleItem}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.ageStyle}>{age}</Text>
        </View>
        <View>
        <ImageBackground
            source={{ uri: `${avatar}` }} style={styles.imageStyle}>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.containerBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  singleItem: {
    flex: 1, 
    flexDirection: 'column', 
    borderRadius: 10,
    alignItems: 'flex-start', 
    height: 110
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "700",
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
  },
  imageStyle: {
    width: 105,
    height: 105,
    }
});
