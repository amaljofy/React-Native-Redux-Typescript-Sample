import React, { Component } from "react";
import { Button,View, Text } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class Screen_Two extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Screen Two</Text>

        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />

        <Button
          title="Webservice Screen"
          onPress={()=> navigation.navigate('Web_Service')}
        />

        <Button
          title="Drawer Screen"
          onPress={()=> navigation.navigate('Drawer_Screen')}
        />

    </View>
    );
  }
}

export default Screen_Two;
