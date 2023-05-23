import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { COLORS, SIZES } from "../constants/index";
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Text>home</Text>
      <Button
        title="Product detail"
        onPress={() => navigation.navigate("ProductDetail")}
      ></Button>
      <Button title="---------------"></Button>
      <Button
        title="Order"
        onPress={() => navigation.navigate("Order")}
      ></Button>
    </>
  );
};

export default HomeScreen;
