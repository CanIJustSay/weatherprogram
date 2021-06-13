import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import db from "../local db";
export default class Weather extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      storeData: this.props.navigation.getParam("Jdata"),
    };
  }
  render() {
    return (
      <View>
        <Image source={db[this.state.storeData.name]} style={{width:100,height:100}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
