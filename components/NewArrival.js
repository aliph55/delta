import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NewArrival = () => {
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
            );
          }}
        />
      )}
    </View>
  );
};

export default NewArrival;

const styles = StyleSheet.create({});
