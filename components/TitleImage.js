import { Image, StyleSheet, View } from "react-native";
import React from "react";

const TitleImage = () => {
  return (
    <View
      style={{
        height: 200,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={require("../assets/title.png")}
        resizeMode="stretch"
      />
    </View>
  );
};

export default TitleImage;

const styles = StyleSheet.create({});
