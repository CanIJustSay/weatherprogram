import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from "./screens/home";
import Weather from "./screens/weather";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
  var nav = createStackNavigator({
  Home: {
    screen: Home,
  },
  Weather: {
    screen: Weather,
  },
});
var AppContainer = createAppContainer(nav);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
