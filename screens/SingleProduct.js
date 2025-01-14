import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageHeader from "../components/Image";
import AntDesign from "@expo/vector-icons/AntDesign";
import SegmentControl from "../components/SegmentControl";

const options = ["S", "M", "L", "XL"];
const SingleProduct = ({ route, navigation }) => {
  const { title, image, description, id, price, rating, category } =
    route.params;

  const [selectedOption, setSelectedOption] = useState("L");

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
          {title}
        </Text>
        <View
          style={{
            // backgroundColor: "red",
            justifyContent: "space-around",
            // flexDirection: "row",
            marginTop: 35,
            height: 350,
            alignItems: "center",
          }}
        >
          {category !== "electronics" && (
            <SegmentControl
              selectedOption={selectedOption}
              onOptionPress={setSelectedOption}
            />
          )}
          <View>
            <Image
              source={{ uri: image }}
              style={{
                width: 250,
                height: 250,
                // backgroundColor: "red",
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
            Product Code {category} : {id}
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
                width: 65,
                textAlign: "center",
                borderRadius: 10,
              }}
            >
              {price}$
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
              ⭐{rating?.rate}
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
              onPress={() =>
                navigation.navigate("Payment", {
                  title,
                  image,
                  description,
                  id,
                  price,
                  rating,
                  category,
                })
              }
              style={{
                width: 50,
                backgroundColor: "white",
                alignSelf: "center",
                borderRadius: 5,
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
          <Text style={{}}>{description}</Text>
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

  price: {
    fontSize: 25,
  },
});
