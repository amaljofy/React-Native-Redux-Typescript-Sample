import * as React from 'react';
import { Button,View, Text } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";


class Screen_One extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Screen One</Text>
      <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Screen_Two',{
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
    </View>
    );
  }
}

export default Screen_One;
