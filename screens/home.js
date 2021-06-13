import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      citySelected: "",
      weather: "",
      switchScreens: false,
    };
  }
  getAPI = async () => {
    var url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.citySelected +
      "&units=metric&appid=22515dbe8047cf659da74a1cae281c2e";

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(async (json) => {
        await this.setState({
          weather: json,
          switchScreens: true,
        });
        this.props.navigation.navigate('Weather', { Jdata: json });
      });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Header
          centerComponent={{
            text: "Choose your city",
            style: { color: "#fff" },
          }}
        ></Header>

        <Image
          source={require("../assets/USMAP.jpg")}
          style={{ width: 100, height: 100 }}
        ></Image>

        <DropDownPicker
          items={[
            { label: "Seattle", value: "Seattle" },
            { label: "Black Hills", value: "Black Hills" },
            { label: "Philadelphia", value: "Philadelphia" },
            { label: "Crescent City", value: "Crescent-City" },
            { label: "Phoenix", value: "Phoenix" },
            { label: "Seattle", value: "Seattle" },
            { label: "Seattle", value: "Seattle" },
            { label: "Seattle", value: "Seattle" },
            { label: "Seattle", value: "Seattle" },
            { label: "Seattle", value: "Seattle" },
          ]}
          containerStyle={{ width: 300 }}
          onChangeItem={async (item) => {
            await this.setState({
              citySelected: item.value,
            });
            await this.getAPI();
          }}
        ></DropDownPicker>
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
