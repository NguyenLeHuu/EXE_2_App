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
const OrderCancelScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      <View>
        <Image
          source={require("./../assets/images/empty.png")}
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Chưa có đơn hàng
        </Text>
      </View>
    </View>
  );
};

export default OrderCancelScreen;
