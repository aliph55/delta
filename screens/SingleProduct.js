import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ImageHeader from "../components/Image";
import AntDesign from "@expo/vector-icons/AntDesign";

const SingleProduct = ({ route, navigation }) => {
  const { item } = route.params;

  console.log("item ", item);

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <ImageHeader />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#ffffff",
          position: "absolute",
          left: 25,
          width: 50,
          height: 50,
          borderRadius: 25,
          top: 25,
        }}
      >
        <AntDesign
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignSelf: "center",
            paddingTop: 12,
          }}
          name="left"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#ffffff",
          position: "absolute",
          right: 25,
          width: 50,
          height: 50,
          borderRadius: 25,
          top: 25,
        }}
      >
        <Image
          source={require("../assets/user.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </TouchableOpacity>
      <ScrollView
        style={{
          marginTop: 100,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 35,
          }}
        >
          <View
            style={{
              borderRadius: 25,
              backgroundColor: "white",
              width: 50,
            }}
          >
            <Text style={styles.size}>S</Text>
            <Text style={styles.size}>M</Text>
            <Text style={[styles.size, styles.active]}>L</Text>
            <Text style={styles.size}>XL</Text>
          </View>
          <View>
            <Image
              source={{ uri: item?.image }}
              style={{
                width: 250,
                height: 250,
                backgroundColor: "red",
                borderRadius: 15,
              }}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            Product Code {item.category} : {item.id}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.price,
                {
                  textAlign: "center",
                },
              ]}
            >
              Price
            </Text>
            <Text
              style={{
                backgroundColor: "white",
                padding: 5,
                width: 55,
                textAlign: "center",
                borderRadius: 10,
              }}
            >
              {item.price}$
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.price,
                {
                  textAlign: "center",
                },
              ]}
            >
              Rate
            </Text>
            <Text
              style={{
                backgroundColor: "white",
                padding: 5,
                width: 65,
                textAlign: "center",
                borderRadius: 10,
              }}
            >
              ⭐{item.rating.rate}
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 40,
                }}
              >
                Description
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 50,
                backgroundColor: "white",
                alignSelf: "center",
                borderRadius: 5,
                // padding: 10,
                // alignContent: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Buy
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{}}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  size: {
    fontSize: 40,
    textAlign: "center",
  },
  active: {
    backgroundColor: "#8b8b8b",
    color: "white",
    borderRadius: 25,
  },
  price: {
    fontSize: 25,
  },
});
