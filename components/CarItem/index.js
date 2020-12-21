import React from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import styles from "./styles";
import StyledButton from "./../StyledButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitles}>
          {tagline} <Text style={styles.subtitlesCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            Alert.alert("Custom pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            Alert.alert("Existing inventory pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
