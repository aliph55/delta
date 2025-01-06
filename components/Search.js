import { StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Search = () => {
  return (
    <View style={styles.continer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
          backgroundColor: "#8B8B8B",
          width: "90%",
          borderRadius: 34,
          paddingLeft: 10,
          opacity: 0.7,
        }}
      >
        <Ionicons name="search" size={24} color="#D9D9D9" />
        <TextInput
          placeholderTextColor={"#D9D9D9"}
          placeholder="Search..."
          style={{ color: "#D9D9D9" }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Ionicons
          style={{ textAlign: "center" }}
          name="filter"
          size={24}
          color="#8B8B8B"
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  continer: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
