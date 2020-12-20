import React from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Logo pressed");
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Menu Pressed")}>
        <Image
          style={styles.menu}
          source={require("../../assets/images/menu.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
