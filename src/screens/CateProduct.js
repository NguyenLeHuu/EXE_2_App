import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
  Switch,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES } from "../constants/index";
import { MaterialIcons, Entypo, Ionicons, Fontisto } from "@expo/vector-icons";
const CateProduct = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          height: 113,
          backgroundColor: COLORS.primary,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Ionicons
            name="ios-arrow-back-sharp"
            size={SIZES.h2}
            fontWeight="100"
            color="white"
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 10,
            fontSize: SIZES.h2,
            color: COLORS.white,
            fontWeight: 400,
          }}
        >
          Miền Bắc (451)
        </Text>
      </View>

      <ScrollView
        style={{
          marginVertical: 5,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductDetail");
            }}
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product1.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product2.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product3.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product4.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product1.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product2.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product3.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product4.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product1.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product2.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product3.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              //   height: 198,
              width: 198,
              backgroundColor: COLORS.white,
              justifyContent: "space-evenly",
              marginBottom: 5,
            }}
          >
            <Image
              source={require("../assets/images/product4.png")}
              style={{
                width: 162,
                height: 124,
                alignSelf: "center",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginBottom: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 300 }}>95 lượt mua</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default CateProduct;
