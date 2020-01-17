import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Header } from "../../../components";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import styles from "./styles";
import { connect } from "react-redux";
import { ListItem } from "../../../components";

import {
  fetchEmployeeData
} from "../../../redux/actions/fetch";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  fetchEmployeeData: () => void;
  employeeData: any;
  loading: boolean;
}

interface itemProp {
  item: any;
}

interface State {
  
}

class Employee_Screen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { fetchEmployeeData } = this.props;
    fetchEmployeeData();
  }

  render() {
    const {navigation, employeeData, loading } = this.props;

    console.log("Hello Loading : "+loading)
    return (
      <View style={styles.container}>
          <Header
          title="News List"
          leftButtonPress={() => navigation.openDrawer()}
          />
          <Text>{loading?"TRUE":"FALSE"}</Text>
          {loading?(<ActivityIndicator size="large" color="#0000ff" />):null}
          <FlatList
          data={employeeData}
          keyExtractor={item => item.title}
          renderItem={({ item }: itemProp) => {
            return (
                <ListItem  onPress={ () => navigation.navigate('NewsDetails',{dataJSON:item})} title={item.title} age={item.description} avatar={item.image.loc.__text} ></ListItem>
            );
          }}
        />
    </View>
    );
  }
}


const mapStateToProps = (state: any) => ({
  employeeData: state.data1.item,
  loading: state.loading
});

function bindToAction(dispatch: any) {
  return {
    fetchEmployeeData: () =>
    dispatch(fetchEmployeeData())
  };
  
}

export default connect(
  mapStateToProps,
  bindToAction
)(Employee_Screen);
