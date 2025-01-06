import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Product from "../screens/Product";
import SingleProduct from "../screens/SingleProduct";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen
          name="SingleProduct"
          options={{
            headerShown: false,
          }}
          component={SingleProduct}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Regiser"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
