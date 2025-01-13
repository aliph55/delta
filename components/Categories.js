import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categories, setCategories] = useState();
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");

      const json = await res.json();
      setCategories(json);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const cat = {
    electronics: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    jewelery:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "men's clothing":
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "women's clothing":
      "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  };
  return (
    <View
      style={{
        paddingBottom: 45,
        padding: 15,
      }}
    >
      <Text
        style={{
          fontSize: 26,
        }}
      >
        Categories
      </Text>
      {categories && (
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Product", {
                    category: item,
                  })
                }
                style={{
                  margin: 15,
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Image
                  key={item.id}
                  source={{ uri: cat[item] }}
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  resizeMode="cover"
                />
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
