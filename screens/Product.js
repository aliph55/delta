import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Product = ({ navigation, route }) => {
  const [newProducts, setProducts] = useState();
  const { category } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Products: " + category,
    });
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const res = await response.json();
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(newProducts);

  const turncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // title: item.title,
  //                   image: item.image,
  //                   description: item.description,
  //                   id: item.id,
  //                   price: item.price,
  //                   rating: item.rating,
  //                   category: item.category,

  return (
    <View>
      {newProducts && (
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({ item }) => {
            // console.log("Product ", item);
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
                style={{
                  alignContent: "center",
                  width: "43%",
                  height: 220,
                  borderRadius: 15,
                  overflow: "hidden",
                  margin: 10,
                }}
              >
                <Image
                  resizeMode="cover"
                  source={{ uri: item?.image }}
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                />
                <Text
                  style={{
                    paddingLeft: 5,
                  }}
                >
                  {turncateString(item.title, 15)}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      borderRadius: 10,
                      backgroundColor: "#252b41",
                      width: 50,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      paddingVertical: 2,
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        paddingRight: 2,
                      }}
                    >
                      ⭐
                    </Text>
                    <Text style={{ color: "white" }}>{item.rating.rate}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      width: 50,
                      marginTop: 5,
                      paddingVertical: 2,
                    }}
                  >
                    <Text>$</Text>
                    <Text
                      style={{
                        color: "#33806d",
                        paddingLeft: 5,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          data={newProducts}
        />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
