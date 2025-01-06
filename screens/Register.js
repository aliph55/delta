import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import TitleImage from "../components/TitleImage";
import Icon from "../components/Icon";
import GoogleSigin from "../components/GoogleSigin";
import FacebookSigin from "../components/FacebookSigin";

const Register = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width, height }]}>
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
        <View style={styles.login}>
          <GoogleSigin />
        </View>
        <View style={styles.login}>
          <FacebookSigin />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
  },
  content: {
    gap: 45,
    flex: 1,
    backgroundColor: "#e1e1e1",
    padding: 25,
    margin: 25,
    paddingTop: 35,
    alignItems: "center",
    borderRadius: 25,
  },
  login: {
    marginTop: 35,
  },
});
