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
import createMyAxios from "../util/axios";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import OrderDoneScreen from "../screens/OrderDoneScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotiScreen from "../screens/NotiScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialBottomTabNavigator();
const API = createMyAxios();

const TabBarBottom = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        {/* <View style={{ flex: 1 }}> */}
        {/* <View style={{ flex: 1 }}> */}
        <Tab.Navigator
          // shifting={true}
          barStyle={{ backgroundColor: COLORS.primary, height: "7%" }}
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            style: {
              borderTopWidth: 1,
              borderTopColor: "lightgray",
            },
            labeled: false,
          }}
        >
          <Tab.Screen
            name="Khám phá"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={30} color={color} />
              ),
              tabBarLabel: null,
            }}
          />
          <Tab.Screen
            name="Thông báo"
            component={NotiScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="notifications-sharp" size={30} color={color} />
              ),
              tabBarLabel: null,
            }}
          />
          <Tab.Screen
            name="Tôi"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="ios-person-circle-outline"
                  size={30}
                  color={color}
                />
              ),
              tabBarLabel: null,
            }}
          />
        </Tab.Navigator>
        {/* </View> */}
        {/* </View> */}
      </View>
    </View>
  );
};

export default TabBarBottom;
