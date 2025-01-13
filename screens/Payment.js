import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CardForm, StripeProvider } from "@stripe/stripe-react-native";
import { STRIPE_PUBLISHABLE_KEY } from "../constant/App";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Payment = ({ route }) => {
  const { title, image, description, id, price, rating, category } =
    route.params;
  const navigation = useNavigation();

  const [isReady, setIsReady] = useState(false);
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo.isLooged === false) {
      navigation.navigate("Register");
    }
  }, []);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      "https://server-1-jreb.onrender.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInfo.userData.email,
          currency: "usd",
          amount: price * 100,
        }),
      }
    );
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
    });
    if (error) {
      Alert.alert(
        "Error has occured with your payment",
        error.localizedMessage
      );
    } else if (paymentIntent) {
      Alert.alert("Successful", "The payment was confirmed successfully!");
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        {/* <Header title={"Making Donation"} /> */}
        <Text style={style.donationAmountDescription}>
          You are about to donate {price}
        </Text>
        <View>
          <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <CardForm
              style={style.cardForm}
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={"Donate"}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: 24,
  },
  button: {
    marginHorizontal: 24,
  },
  donationAmountDescription: {
    marginTop: 12,
  },
  cardForm: {
    height: 220,
    marginTop: 12,
  },
});
