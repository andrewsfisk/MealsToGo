import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cdn.shopify.com/s/files/1/0502/0411/5096/files/Bomba_1_2048x2048.jpg",
    ],
    address = "103 Lonsdale St, Melbourne, 3000",
    isOpenNow = true,
    rating = 4,
    isCloseedTemporarily = false,
  } = restaurant;
  return <Text>info</Text>;
};
