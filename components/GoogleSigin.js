import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const GoogleSigin = () => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/userinfo.profile"], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      "580447110631-vvv3d82c0e3sotaeacnkigi5cu2ks62a.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access). Required to get the `idToken` on the user object!
  });

  return (
    <TouchableOpacity
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log("first");
          if (userInfo.type === "success") {
            // dispatch(logIn(userInfo));
            navigation.navigate("Home");
          }
          console.log(userInfo);
          // console.log(JSON.stringify(userInfo));
          // console.log(userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("cancelled", error);
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(
              " operation (e.g. sign in) is in progress already",
              error
            );
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log(" play services not available or outdated ", error);
          } else if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            console.log("SIGN_IN_REQUIRED ", error);
          } else {
            // some other error happened
            console.log("other ", error);
          }
        }
      }}
    >
      <Image source={require("../assets/google.png")} />
    </TouchableOpacity>
  );
};

export default GoogleSigin;

const styles = StyleSheet.create({});
