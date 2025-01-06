import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        height: 200,
        flexDirection: "row",
        margin: 15,
        paddingVertical: 75,
        zIndex: 15,
      }}
    >
      <View
        style={{
          flex: 5,
        }}
      >
        <Text style={{ textAlign: "left", fontSize: 37 }}>BE UNIQUE</Text>
        <Text style={{ textAlign: "right", fontSize: 18 }}>
          With Your Own Style
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/user.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
