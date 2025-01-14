import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import ImageHeader from "../components/Image";
import NewArrival from "../components/NewArrival";
import Categories from "../components/Categories";

const Home = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width, height }]}>
      <ImageHeader />
      <ScrollView>
        <Header />
        <NewArrival />
        <Categories />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
