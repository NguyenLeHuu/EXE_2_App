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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderPendingScreen from "./OrderPendingScreen";
import OrderDoneScreen from "./OrderDoneScreen";
import OrderCancelScreen from "./OrderCancelScreen";
const Tab = createMaterialTopTabNavigator();

const OrderScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <View
        style={{
          flexDirection: "row",
          height: 113,
          backgroundColor: COLORS.primary,
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Ionicons
            name="ios-arrow-back-sharp"
            size={SIZES.h2}
            fontWeight="100"
            color="white"
          />
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: SIZES.h2,
            color: COLORS.white,
            fontWeight: 400,
          }}
        >
          Đơn hàng của bạn
        </Text>
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Tab.Navigator
          // swipeEnabled={false}
          screenOptions={{
            swipeEnabled: false,
            tabBarLabelStyle: {
              fontSize: 14,
              color: COLORS.primary,
              fontWeight: 800,
              textTransform: "none",
            },
          }}
        >
          <Tab.Screen name="Đang giao" component={OrderPendingScreen} />
          <Tab.Screen name="Đã nhận" component={OrderDoneScreen} />
          <Tab.Screen name="Đã hủy" component={OrderCancelScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default OrderScreen;
