import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
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
    const { employeeData } = this.props;

    return (
      <View style={styles.container}>
          <Header
          title="Employee List"
          />
          <FlatList
          data={employeeData}
          keyExtractor={item => item.id}
          renderItem={({ item }: itemProp) => {
            return (
                <ListItem  title={item.employee_name} age={item.employee_age}></ListItem>
            );
          }}
        />

      <Text>Hello, This is Employee List!</Text>
    </View>
    );
  }
}


const mapStateToProps = (state: any) => ({
  employeeData: state.data1
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
