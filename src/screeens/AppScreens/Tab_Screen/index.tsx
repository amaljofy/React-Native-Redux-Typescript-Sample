import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableWithoutFeedback,View, FlatList, ActivityIndicator, Alert } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Header } from "../../../components";
import { AvatarItem } from "../../../components";
import NetInfo from "@react-native-community/netinfo";

import styles from "./styles";

import {
  fetchImageData,
  fetchMoreImageData
} from "../../../redux/actions/fetch";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  fetchImageData: (page?: number, limit?: number) => void;
  fetchMoreImageData: (page?: number, limit?: number) => void;
  imageData: any;
  loading: boolean;
}

interface itemProp {
  item: any;
}

interface State {
  page: number;
  limit: number;
}


class Tab_Screen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: 1,
      limit: 20
    };
  }

  componentDidMount() {
    const { fetchImageData } = this.props;
    const { page, limit } = this.state;
 
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      if(state.isConnected) {fetchImageData(page, limit)} else Alert.alert("No Internet")
    });
    // fetchImageData(page, limit);
  }

  render() {
    const { navigation, imageData,fetchMoreImageData, loading } = this.props;
    const { page, limit } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title="Search"
          leftButtonPress={() => navigation.openDrawer()}
        />
          <FlatList
          data={imageData}
          keyExtractor={item => item.id}
          renderItem={({ item }: itemProp) => {
            return (
              <TouchableWithoutFeedback 
              onPress={ () => navigation.navigate('Blank',{dataJSON:item})}>
                <AvatarItem avatar={item.download_url+".jpg"} title={item.author}></AvatarItem>
              </TouchableWithoutFeedback>
            );
          }}
          onEndReached={() => {
            this.setState({ page: page + 1 });
            fetchMoreImageData(page + 1, limit);
          }}
          ListFooterComponent={
            loading ? (
              <View style={styles.loadingFooter}>
                <ActivityIndicator />
              </View>
            ) : null
          }
        />
    </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  imageData: state.data,
  loading: state.loading
});

function bindToAction(dispatch: any) {
  return {
    fetchImageData: (page?: number, limit?: number) =>
      dispatch(fetchImageData(page, limit)),
    fetchMoreImageData: (page?: number, limit?: number) =>
      dispatch(fetchMoreImageData(page, limit))
  };
  
}

export default connect(
  mapStateToProps,
  bindToAction
)(Tab_Screen);
