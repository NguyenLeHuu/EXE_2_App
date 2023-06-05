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
  Pressable,
} from "react-native";
import { COLORS, SIZES } from "../constants/index";
import createMyAxios from "../util/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  Fontisto,
  Feather,
} from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";

const ProfileScreen = ({ navigation }) => {
  const [userDetail, setUserDetail] = React.useState();
  const log_out = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"))
      .then(() => {
        GoogleSignin.signOut;
        GoogleSignin.revokeAccess();
      })
      .then(() => AsyncStorage.clear())
      .then(() => navigation.navigate("Login"))
      .catch(() => {
        console.log(" >>ERR LOG_OUT");
      });
  };
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const UserLoggedInData = await AsyncStorage.getItem("UserLoggedInData");
    // const id = await AsyncStorage.getItem("idToken");
    // console.log("___", id);

    if (UserLoggedInData) {
      // console.log("UserLoggedInData >>>>");
      // console.log(JSON.stringify(JSON.parse(UserLoggedInData), null, 2));
      // console.log("<<<< UserLoggedInData");
      let udata = JSON.parse(UserLoggedInData);
      setUserDetail(udata.user);
    }

    // console.log(userDetail.displayName);
    // console.log(userDetail.photoURL);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
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
            Hồ sơ
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

      <View style={{ height: 100 }}>
        <View style={{ backgroundColor: COLORS.primary, height: 50 }}></View>
        <View style={{ height: 50 }}></View>
        <Image
          // source={require("../assets/images/product3.png")}

          source={{
            uri:
              userDetail?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={{
            width: 140,
            height: 140,
            alignSelf: "center",
            position: "absolute",
            top: "50%",
            marginTop: -75,
            borderRadius: 70,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Text
          style={{ color: COLORS.primary, fontWeight: "bold", fontSize: 16 }}
        >
          {userDetail?.displayName || "Welcome back"}
        </Text>
      </View>
      <Pressable
        onPress={() => log_out()}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{ color: COLORS.primary, fontWeight: "bold", fontSize: 16 }}
        >
          Log out
        </Text>
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          //   backgroundColor: COLORS.gray,
          marginHorizontal: 10,
        }}
      >
        <View style={{ height: 380 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 60,
              //   backgroundColor: COLORS.lightPrimary1,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Đơn hàng của bạn
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 300, fontStyle: "italic" }}
            >
              Xem tất cả
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 50,
              //   backgroundColor: COLORS.red,
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <FontAwesome5 name="people-carry" size={30} color="black" />
                <Text style={{ fontSize: 11 }}>Chờ vận{"\n"}chuyển</Text>
              </View>
              <View>
                <FontAwesome5 name="shipping-fast" size={30} color="black" />
                <Text style={{ fontSize: 11 }}>Đang vận{"\n"}chuyển</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name="book-check-outline"
                  size={30}
                  color="black"
                />
                <Text style={{ fontSize: 11 }}>Đã nhận{"\n"}hàng</Text>
              </View>
              <View>
                <Fontisto
                  name="spinner-rotate-forward"
                  size={30}
                  color="black"
                />
                <Text style={{ fontSize: 11 }}>Đổi trả{"\n"}hàng</Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Entypo name="heart-outlined" size={26} color="black" />
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>Yêu Thích</Text>
                  </View>
                </View>
                <View style={{ opacity: 0.5 }}>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <AntDesign name="book" size={24} color="black" />
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>Đơn mua</Text>
                  </View>
                </View>
                <View style={{ opacity: 0.5 }}>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Feather name="star" size={24} color="black" />
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>Đánh giá</Text>
                  </View>
                </View>
                <View style={{ opacity: 0.5 }}>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <MaterialCommunityIcons
                      name="history"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>Lịch sử mua hàng</Text>
                  </View>
                </View>
                <View style={{ opacity: 0.5 }}>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Ionicons name="bookmark-outline" size={24} color="black" />
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text>Voucher</Text>
                  </View>
                </View>
                <View style={{ opacity: 0.5 }}>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: COLORS.lightGray }}>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Đề xuất cho bạn
            </Text>
          </View>

          <View style={{}}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  //   height: 198,
                  width: 185,
                  backgroundColor: COLORS.white,
                  justifyContent: "space-around",
                  marginBottom: 8,
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
                <View style={{ marginLeft: 5, marginBottom: 20 }}>
                  <Text style={{ fontSize: 12, fontWeight: 200 }}>
                    95 lượt mua
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 16, fontWeight: 500 }}
                  >
                    Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
                  </Text>
                </View>
              </View>

              <View
                style={{
                  //   height: 198,
                  width: 185,
                  backgroundColor: COLORS.white,
                  justifyContent: "space-around",
                  marginBottom: 8,
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
                <View style={{ marginLeft: 5, marginBottom: 20 }}>
                  <Text style={{ fontSize: 12, fontWeight: 200 }}>
                    95 lượt mua
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 16, fontWeight: 500 }}
                  >
                    Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  //   height: 198,
                  width: 185,
                  backgroundColor: COLORS.white,
                  justifyContent: "space-around",
                  marginBottom: 8,
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
                <View style={{ marginLeft: 5, marginBottom: 20 }}>
                  <Text style={{ fontSize: 12, fontWeight: 200 }}>
                    95 lượt mua
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 16, fontWeight: 500 }}
                  >
                    Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
                  </Text>
                </View>
              </View>

              <View
                style={{
                  //   height: 198,
                  width: 185,
                  backgroundColor: COLORS.white,
                  justifyContent: "space-around",
                  marginBottom: 8,
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
                <View style={{ marginLeft: 5, marginBottom: 20 }}>
                  <Text style={{ fontSize: 12, fontWeight: 200 }}>
                    95 lượt mua
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontSize: 16, fontWeight: 500 }}
                  >
                    Bánh xoài Nha Trangaknvjabvjabvabvajbvjsbvjabvjabvjabjvbj
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
