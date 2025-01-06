import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageHeader = () => {
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("../assets/header.png")}
        style={{
          width: "100%",
          height: 250,
          position: "absolute",
          zIndex: -1,
        }}
      />
    </View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({});
