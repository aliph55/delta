import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Palette } from "../constant/constants";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const SegmentedControl = React.memo(({ selectedOption, onOptionPress }) => {
  const { height: windowHeight } = useWindowDimensions();

  const options = ["S", "M", "L", "XL"];

  const internalPadding = 20;
  const segmentedControlHeight = windowHeight / 3;

  const itemHeight =
    (segmentedControlHeight - internalPadding) / options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(
        itemHeight * options.indexOf(selectedOption) + internalPadding / 2
      ),
    };
  }, [selectedOption, options, itemHeight]);

  return (
    <View
      style={[
        styles.container,
        {
          height: segmentedControlHeight,
          borderRadius: 20,
          paddingTop: internalPadding / 2,
        },
      ]}
    >
      <Animated.View
        style={[
          {
            height: itemHeight,
          },
          rStyle,
          styles.activeBox,
        ]}
      />
      {options.map((option) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onOptionPress?.(option);
            }}
            key={option}
            style={[
              {
                height: itemHeight,
              },
              styles.labelContainer,
            ]}
          >
            <Text style={styles.label}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Dikey hizalama
    width: 50, // Genişliği sabitlemek için ayarlandı
    backgroundColor: Palette.baseGray05,
    marginBottom: 25,
  },
  activeBox: {
    position: "absolute",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 3,
    width: "80%", // Genişlik ayarlandı
    left: "10%", // Ortalamak için
    backgroundColor: Palette.background,
  },
  labelContainer: { justifyContent: "center", alignItems: "center" },
  label: {
    fontFamily: "SF-Compact-Rounded-Medium",
    fontSize: 16,
  },
});

export default SegmentedControl;
