import { View, Image } from "react-native";
import React from "react";

const Icon = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 70, height: 70 }}
      />
    </View>
  );
};

export default Icon;
