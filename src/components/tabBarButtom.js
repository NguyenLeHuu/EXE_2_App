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
const Tab = createMaterialBottomTabNavigator();

const TabBarBottom = ({ navigation }) => {
  const API = createMyAxios();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      {/* <StatusBar backgroundColor={COLORS.black} barStyle="dark-content" /> */}
      <View style={{ flex: 1 }}>
        {/* <View
          style={{
            height: "34%",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              height: 44,
              // backgroundColor: COLORS.gray,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "70%",
                backgroundColor: COLORS.lightGray,
                alignItems: "center",
                borderRadius: 10,
                // paddingVertical: 10,
              }}
            >
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="text-box-search"
                  size={26}
                  color="black"
                />
              </View>
              <View>
                <SafeAreaView>
                  <TextInput
                    style={{ padding: 12, paddingRight: 100 }}
                    placeholder="Món ngon đang chờ bạn..."
                  ></TextInput>
                </SafeAreaView>
              </View>
            </View>
            <TouchableOpacity style={{}}>
              <MaterialCommunityIcons
                name="book-check-outline"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <FontAwesome name="shopping-basket" size={26} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 180,
                width: "94%",
                backgroundColor: COLORS.blue,
              }}
            >
              <Image
                source={require("./../assets/images/product.png")}
                style={{
                  width: "103%",
                  height: 180,
                  resizeMode: "cover",
                }}
              />
            </TouchableOpacity>
          </View>
        </View> */}

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Tab.Navigator
              // shifting={true}
              barStyle={{ backgroundColor: COLORS.primary, height: 60 }}
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
                    <Ionicons
                      name="notifications-sharp"
                      size={30}
                      color={color}
                    />
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default TabBarBottom;
