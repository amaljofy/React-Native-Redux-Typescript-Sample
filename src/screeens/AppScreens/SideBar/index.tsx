import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { colors } from "../../../constants";
import { ListItem } from "../../../components/ListItem";
import styles from "./styles";
import ImagePicker from 'react-native-image-picker';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface State {
  avatarSource: any
}

class SideBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      avatarSource: null
    };
  }

  showAlert(name: string){
    Alert.alert(name)
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <Image source={this.state.avatarSource === null ? require('../../../../images/img1.png'):this.state.avatarSource} style={styles.profileImage}></Image>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => this.showAlert("qwe")}>
          <Text style={styles.textStyle}>Amal Jofy</Text>
        </TouchableOpacity>
        
      
      </View>
    );
  }
}
export default SideBar;
