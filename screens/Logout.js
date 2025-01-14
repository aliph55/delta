import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import TitleImage from "../components/TitleImage";
import Icon from "../components/Icon";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/User";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const userInfo = useSelector((state) => state.user);

  console.log(userInfo);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(logOut());
      navigation.navigate("Home");

      //   setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

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
          Sign Out...
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
          <TouchableOpacity
            onPress={async () => await signOut()}
            style={{
              backgroundColor: "#0089e3",
              padding: 15,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Logout;

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
