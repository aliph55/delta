import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const NewArrival = () => {
  const navigation = useNavigation();

  const [newClothes, setNewClothes] = useState();

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");

      const json = await res.json();
      setNewClothes(json);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <View
        style={{
          padding: 15,
        }}
      >
        <Text
          style={{
            fontSize: 26,
          }}
        >
          NewArrival
        </Text>
      </View>
      {newClothes && (
        <FlatList
          data={newClothes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SingleProduct", {
                    title: item.title,
                    image: item.image,
                    description: item.description,
                    id: item.id,
                    price: item.price,
                    rating: item.rating,
                    category: item.category,
                  })
                }
              >
                <Image
                  key={item.id}
                  source={{ uri: item?.image }}
                  style={{
                    width: 150,
                    height: 200,
                    margin: 15,
                    borderRadius: 15,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default NewArrival;

const styles = StyleSheet.create({});
