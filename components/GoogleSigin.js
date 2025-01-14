import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/User";

const GoogleSigin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/userinfo.profile"], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      "580447110631-vvv3d82c0e3sotaeacnkigi5cu2ks62a.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access). Required to get the `idToken` on the user object!
    iosClientId:
      "580447110631-e3ufpt1an763bo7v3j15lipj8lti9uft.apps.googleusercontent.com",
    fflineAccess: true,
    forceCodeForRefreshToken: true,
    profileImageSize: 120,
  });

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      if (userInfo.type === "success") {
        dispatch(logIn(userInfo.data.user));
        navigation.navigate("Home");
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log("error", error);
      } else {
        console.log("error", error);
      }
    }
  };

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();

    // console.log("currentUser ", currentUser);
    if (currentUser.type === "success") {
      dispatch(logIn(currentUser.user));
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <TouchableOpacity
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          if (userInfo.type === "success") {
            navigation.navigate("Home");
          }
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("cancelled", error);
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log(
              "operation (e.g. sign in) is in progress already",
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
