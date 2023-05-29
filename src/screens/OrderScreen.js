import React from "react";
import { View, Text, StatusBar, Pressable } from "react-native";
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
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginLeft: 10 }}
        >
          <Ionicons
            name="ios-arrow-back-sharp"
            size={SIZES.h2}
            fontWeight="100"
            color="white"
          />
        </Pressable>
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
          initialRouteName="Đã nhận"
          screenOptions={{
            tabBarStyle: { backgroundColor: COLORS.white },
            tabBarLabelStyle: {
              fontSize: 15,
              color: COLORS.primary,
              fontWeight: "700",
              textTransform: "none",
            },
            tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
            // swipeEnabled: false,
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
