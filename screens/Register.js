import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TitleImage from "../components/TitleImage";
import Icon from "../components/Icon";
import GoogleSigin from "../components/GoogleSigin";

const Register = () => {
  return (
    <View style={[styles.container]}>
      <TitleImage />
      <Icon />
      <View style={styles.content}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "#adadad",
          }}
        >
          Please Login...
        </Text>
        <View
          style={{
            flexDirection: "row",
            // gap: 35,
            width: "100%",
            alignContent: "space-between",
            justifyContent: "space-around",
          }}
        >
          <GoogleSigin />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  content: {
    backgroundColor: "#e1e1e1",
    // gap: 5,
    flex: 1,
    // height: 450,
    aspectRatio: "auto",
    padding: 10,
    margin: 25,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 25,
  },
  login: {
    // marginTop: 15,
  },
});
