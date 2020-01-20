import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Header } from "../../../components";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import styles from "./styles";
import { connect } from "react-redux";
import { ListItem, ChatItemLeft } from "../../../components";

import {
  fetchEmployeeData
} from "../../../redux/actions/fetch";
import { type } from "os";

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
    return (
      <View style={styles.container}>
          <Header
          title="News List"
          leftButtonPress={() => navigation.openDrawer()}
          />
          <View style={styles.contentStyle}>
            {loading?(<ActivityIndicator style={styles.ActivityIndicatorStyle} size="large" color="#0000ff" />):(
               <FlatList style={styles.contentStyle}
               data={employeeData}
               keyExtractor={item => item.title}
               renderItem={({ item }: itemProp) => {
                 return (
                     <ListItem  onPress={ () => navigation.navigate('NewsDetails',{dataJSON:item})} title={item.title} age={item.description} avatar={item.content.thumbnail._url} type={findCategory(item.category)} ></ListItem>
                   );
                 }}
               />
            )}
          </View>
          
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
export type CategoryObj = {
  _domain: string,
  __text: string
}

export function findCategory(categoryList: any){
  var categoryType = "General"
  for (let i = 0; i < categoryList.length; i++) {
    // if ( categoryList[i] as CategoryObj) {
    //   categoryType = categoryList[i]._domain;
    //   break;
    // }
    if (typeof categoryList[i] === 'string') {
      categoryType = categoryList[i];
      break;
    }
  }
 return categoryType;
}

export default connect(
  mapStateToProps,
  bindToAction
)(Employee_Screen);
