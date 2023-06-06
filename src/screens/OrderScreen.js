import React, { useState, useEffect, createContext } from "react";
import {
  View,
  Text,
  StatusBar,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderPendingScreen from "./OrderPendingScreen";
import OrderDoneScreen from "./OrderDoneScreen";
import OrderCancelScreen from "./OrderCancelScreen";
import createMyAxios from "../util/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = createMyAxios();
const Tab = createMaterialTopTabNavigator();

export const responeFake = {
  status: 200,
  message: "Get list order/cart by customer id successful!",
  data: [
    {
      orderid: "9e603d588054c8c55064a51c661aa1",
      date: "2023-06-02",
      totalmoney: "0.00",
      customerid: "Cus_01",
      status: "any",
      OrderDetails: [],
    },
    {
      orderid: "Order01",
      date: "2023-02-06",
      totalmoney: "20000.00",
      customerid: "Cus_01",
      status: "pending",
      OrderDetails: [
        {
          orderdetailid: 3,
          productid: "PRODUCT_001",
          quantity: 10,
        },
      ],
    },
    {
      orderid: "Order02",
      date: "2023-02-06",
      totalmoney: "245000.00",
      customerid: "Cus_01",
      status: "pending",
      OrderDetails: [],
    },
    {
      orderid: "Order03",
      date: "2023-02-06",
      totalmoney: "163000.00",
      customerid: "Cus_01",
      status: "pending",
      OrderDetails: [],
    },
    {
      orderid: "Order04",
      date: "2023-02-06",
      totalmoney: "400000.00",
      customerid: "Cus_01",
      status: "done",
      OrderDetails: [],
    },
    {
      orderid: "Order05",
      date: "2023-02-06",
      totalmoney: "650000.00",
      customerid: "Cus_01",
      status: "done",
      OrderDetails: [],
    },
    // {
    //   orderid: "Order09",
    //   date: "2023-02-06",
    //   totalmoney: "650000.00",
    //   customerid: "Cus_01",
    //   status: "cancel",
    //   OrderDetails: [],
    // },
    {
      orderid: "Order06",
      date: "2023-02-06",
      totalmoney: "1025000.00",
      customerid: "Cus_01",
      status: "done",
      OrderDetails: [
        {
          orderdetailid: "6",
          quantity: "2",
          orderid: "Order06",
          productid: "PRODUCT_001",
          price: "135.000",
          rating: "4",
          feedback: "qua xin",
          salername: "ShuShu Shop",
          salerid: "SALER_001",
        },
        {
          orderdetailid: "7",
          quantity: "3",
          orderid: "Order06",
          productid: "PRODUCT_002",
          price: "650.000",
          rating: "4",
          feedback: "qua xin",
          salername: "Yummi Shop",
          salerid: "SALER_002",
        },
      ],
    },
    {
      orderid: "Order07",
      date: "2023-02-06",
      totalmoney: "140000.00",
      customerid: "Cus_01",
      status: "cart",
      OrderDetails: [
        {
          orderdetailid: "3",
          quantity: "2",
          orderid: "Order07",
          productid: "PRODUCT_001",
          price: "135.000",
          rating: "4",
          feedback: "qua xin",
          salername: "ShuShu Shop",
          salerid: "SALER_001",
        },
        {
          orderdetailid: "4",
          quantity: "3",
          orderid: "Order07",
          productid: "PRODUCT_002",
          price: "650.000",
          rating: "4",
          feedback: "qua xin",
          salername: "Yummi Shop",
          salerid: "SALER_002",
        },
        {
          orderdetailid: "5",
          quantity: "1",
          orderid: "Order07",
          productid: "PRODUCT_003",
          price: "320.000",
          rating: "4",
          feedback: "qua xin",
          salername: "Yummim Shop",
          salerid: "SALER_003",
        },
      ],
    },
    {
      orderid: "Order08",
      date: "2023-02-06",
      totalmoney: "103000.00",
      customerid: "Cus_01",
      status: "done",
      OrderDetails: [],
    },
  ],
};

const OrderScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idcustomer, setIdcustomer] = useState("");

  const getUserData = async () => {
    const UserLoggedInData = await AsyncStorage.getItem("UserLoggedInData");
    if (UserLoggedInData) {
      // console.log("UserLoggedInData >>>>");
      // console.log(JSON.stringify(JSON.parse(UserLoggedInData), null, 2));
      // console.log("<<<< UserLoggedInData");
      let udata = JSON.parse(UserLoggedInData);
      let id = udata.user.uid;
      setIdcustomer(id);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 500);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(idcustomer.length);
        const response = await API.get(`order/${idcustomer}`);
        const responseData = response.data;
        set1(responseData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [idcustomer]);

  const set1 = (data) => {
    // console.log("data____", data);
    setOrders(data);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // console.log("_______________");
  //       const arr = responeFake.data;
  //       setOrders(arr);

  //       console.log(":::::::::orders");
  //       console.log(orders);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   // setTimeout(() => {
  //   fetchData();
  //   // }, 1000);
  // });

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else {
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
              initialParams={{ data: orders }}
            />
            <Tab.Screen
              name="Đã nhận"
              component={OrderDoneScreen}
              initialParams={{ data: orders }}
            />
            <Tab.Screen
              name="Đã hủy"
              component={OrderCancelScreen}
              initialParams={{ data: orders }}
            />
          </Tab.Navigator>
        </View>
      </View>
    );
  }
};
export default OrderScreen;
