import React, { useState, useEffect, createContext } from "react";
import { View, Text, StatusBar, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderPendingScreen from "./OrderPendingScreen";
import OrderDoneScreen from "./OrderDoneScreen";
import OrderCancelScreen from "./OrderCancelScreen";
import createMyAxios from "../util/axios";

const API = createMyAxios();
const Tab = createMaterialTopTabNavigator();

const OrderScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [done, setDone] = useState([1, 2]);
  const [pending, setPending] = useState([]);
  const [canceled, setCanceled] = useState([]);
  // const done1 = [1, 2, 3];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const idcustomer = "Cus_01";
        const response = await API.get(`order/customer/${idcustomer}`);
        // console.log(response);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setDone(orders.filter((order) => order.status === "done"));
    // console.log(done.length);
    setPending(orders.filter((order) => order.status === "pending"));
    setCanceled(orders.filter((order) => order.status === "canceled"));
  }, [orders]);
  // useEffect(() => {
  //   console.log("________", done);
  // }, [done]);

  useEffect(() => {
    const filteredDone = orders.filter((order) => order.status === "done");
    setDone(filteredDone);
    navigation.setParams({ data: filteredDone });
  }, [orders, navigation]);
  // const handleDoneTabPress = () => {
  //   console.log("11111");
  //   navigation.navigate("OrderDoneScreen", { data: done1 });
  // };

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
          Đơn hàng của bạn ({orders.length})
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
          <Tab.Screen
            name="Đang giao"
            component={OrderPendingScreen}
            initialParams={{ data: pending }}
          />
          <Tab.Screen
            name="Đã nhận"
            component={OrderDoneScreen}
            initialParams={{ data: done }}
            // listeners={{
            //   tabPress: handleDoneTabPress,
            // }}
          />
          <Tab.Screen
            name="Đã hủy"
            component={OrderCancelScreen}
            initialParams={{ data: canceled }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default OrderScreen;
