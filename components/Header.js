import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const userInfo = useSelector((state) => state.user);
  const navigation = useNavigation();

  console.log("Header ", userInfo);

  const direction = () => {
    if (userInfo.isLooged === true) {
      navigation.navigate("Logout");
    } else {
      navigation.navigate("Register");
    }
  };

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
        <TouchableOpacity onPress={direction}>
          <Image
            source={{
              uri:
                userInfo.isLooged === false
                  ? userInfo?.profileImage
                  : userInfo?.userData?.photo,
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "red",
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
