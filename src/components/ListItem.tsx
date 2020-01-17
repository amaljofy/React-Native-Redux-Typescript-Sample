import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image
} from "react-native";
import { colors } from "../constants";

interface Props extends TouchableOpacityProps {
  title: string;
  age: string;
  avatar: string;
  type: string;
}

export class  ListItem extends Component<Props, {}> {
  render() {
    const { title,age,avatar,type } = this.props;
    return (
      <TouchableOpacity {...this.props} style={styles.itemContainer}>
        <View style={styles.singleItem}>
          <Text numberOfLines={2} ellipsizeMode='tail' style={styles.titleStyle}>{title}</Text>
          <Text style={styles.ageStyle}>{age}</Text>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.typeStyle}>{type}}</Text>
        </View>
        <View>
        <Image
            source={{ uri: `${avatar}` }} style={styles.imageStyle}>
          </Image>
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
    justifyContent: 'center',
    height: 110
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "700",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4
    },
  ageStyle: {
    fontSize: 10,
    fontWeight: "100",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4
  },
  typeStyle: {
    alignSelf:'baseline',
    fontSize: 12,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 10,
    textShadowColor: colors.borderColor,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    backgroundColor: colors.niceRed,
  },
  imageStyle: {
    width: 105,
    height: 105,
    borderRadius: 10,
    }
});
