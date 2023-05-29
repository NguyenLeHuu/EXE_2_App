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
import {
  MaterialIcons,
  Entypo,
  Ionicons,
  Fontisto,
  EvilIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const SupplierScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.lightPrimary1} />
      <View
        style={{
          flex: 0.23,
          backgroundColor: COLORS.lightPrimary1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <View style={{ marginHorizontal: 10 }}>
              <Ionicons
                name="ios-arrow-back-sharp"
                size={24}
                fontWeight="100"
                color="white"
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              backgroundColor: "rgba(141, 138, 147, 0.3)",
              opacity: 0.7,
              alignItems: "center",
              height: 40,
            }}
          >
            <View style={{ marginHorizontal: 10 }}>
              <FontAwesome name="search" size={22} color="white" />
            </View>
            <View style={{ width: "80%" }}>
              <TextInput
                placeholder="Search in the shop"
                placeholderTextColor="#fff"
                style={{ color: COLORS.white }}
              ></TextInput>
            </View>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            flex: 1,
            marginHorizontal: 10,
            // backgroundColor: COLORS.gray,
          }}
        >
          <View style={{}}>
            <Image
              source={require("./../assets/images/product.png")}
              style={{
                width: 70,
                height: 70,
                resizeMode: "cover",
                borderRadius: 35,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Xưởng Hà Phong
              </Text>
              <AntDesign
                name="right"
                size={16}
                color="white"
                style={{ marginLeft: 5 }}
              />
            </View>
            <View>
              <Text style={{ color: COLORS.white }}>Online 6 giờ trước</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="star"
                size={16}
                color="yellow"
                style={{ opacity: 0.7 }}
              />
              <View style={{}}>
                <Text
                  style={{ color: COLORS.white, fontWeight: 600, fontSize: 16 }}
                >
                  4.8/5.0{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 110,
                height: 30,
                backgroundColor: COLORS.primary,
              }}
            >
              <AntDesign
                name="flag"
                size={24}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: COLORS.white, fontSize: 16 }}>
                Theo dõi
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 110,
                height: 30,
                borderColor: COLORS.white,
                borderWidth: 1,
                marginTop: 5,
              }}
            >
              <Entypo
                name="chat"
                size={24}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: COLORS.white, fontSize: 16 }}>Chat</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        style={{
          flex: 1,
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
export default SupplierScreen;
