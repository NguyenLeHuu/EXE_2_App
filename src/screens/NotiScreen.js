import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/index";
import createMyAxios from "../util/axios";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const NotiScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <View
        style={{
          backgroundColor: COLORS.primary,
          flex: 0.14,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: SIZES.h2,
              color: COLORS.white,
              fontWeight: 400,
            }}
          >
            Thông báo
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginHorizontal: 5 }}
            onPress={() => navigation.navigate("Order")}
          >
            <MaterialCommunityIcons
              name="book-check-outline"
              size={27}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginHorizontal: 15 }}
            onPress={() => navigation.navigate("Cart")}
          >
            <FontAwesome name="shopping-basket" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.gray, marginTop: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 100,
            backgroundColor: COLORS.lightGray,
            borderTopWidth: 1,
            borderColor: COLORS.gray,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View>
            <AntDesign name="notification" size={24} color="red" />
          </View>
          <View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Khuyến mãi</Text>
            </View>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 14, fontWeight: 300 }}
              >
                Giảm đến mấy chục tỉ với đơn hàng 10k
              </Text>
            </View>
          </View>
          <View style={{ opacity: 0.3 }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 100,
            backgroundColor: COLORS.lightGray,
            borderTopWidth: 1,
            borderColor: COLORS.gray,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View>
            <AntDesign name="notification" size={24} color="red" />
          </View>
          <View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Khuyến mãi</Text>
            </View>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 14, fontWeight: 300 }}
              >
                Giảm đến mấy chục tỉ với đơn hàng 10k
              </Text>
            </View>
          </View>
          <View style={{ opacity: 0.3 }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotiScreen;
