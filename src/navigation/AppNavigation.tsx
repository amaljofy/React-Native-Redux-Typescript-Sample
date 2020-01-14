import React from "react";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import Blank from "../screeens/AppScreens/Blank";
import Screen_One from "../screeens/AppScreens/Screen_One";
import Screen_Two from "../screeens/AppScreens/Screen_Two";
import Web_Service from "../screeens/AppScreens/Web_Service";
import Tab_Screen from "../screeens/AppScreens/Tab_Screen";
import Employee_Screen from "../screeens/AppScreens/Employee_Screen";
import AuthLoading from "../screeens/AuthLoading";
import AuthScreen from "../screeens/AuthScreens/Login";
import SideBar from "../screeens/AppScreens/SideBar";
import Icon from 'react-native-vector-icons/FontAwesome';


const MainStack = createStackNavigator(
  {
    Screen_One: { screen: Screen_One },
    Screen_Two: { screen: Screen_Two },
    Web_Service: { screen: Web_Service }
  },
  {
    initialRouteName: "Screen_One",
    headerMode: "none"
  }
);
const myIcon = <Icon name="android" size={20} color="#900" />;
const searchIcon = <Icon name="search" size={20} color="#900" />;
const taxiIcon = <Icon name="taxi" size={20} color="#900" />;
const homeIcon = <Icon name="home" size={20} color="#900" />;



const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: MainStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon:  myIcon,
    },
  },
  Search: {
    screen: Tab_Screen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: searchIcon
    },
  },
  Discover: {
    screen: Web_Service,
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: taxiIcon
    },
  },
  Employee: {
    screen: Employee_Screen,
    navigationOptions: {
      tabBarLabel: 'Employee',
      tabBarIcon: homeIcon
    },
  },
});

const HomeStack = createStackNavigator(
  {
    MainTabs: { screen: MainTabs },
    Blank: { screen: Blank }
  },
  {
    initialRouteName: "MainTabs",
    headerMode: "none"
  }
);

const AppStack = createDrawerNavigator(
  {
    HomeStack: { screen: HomeStack },
    Blank: { screen: Blank }
  },
  {
    drawerWidth: width - 50,
    drawerPosition: "left",
    contentComponent: props => <SideBar {...props} />
  }
);


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      AuthScreen: AuthScreen,
      Main: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
