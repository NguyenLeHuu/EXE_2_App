import React, { useEffect, useState } from "react";
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
} from "@expo/vector-icons";
import { Avatar, Button, Card } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialBottomTabNavigator();

const API = createMyAxios();
const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [idcustomer, setIdcustomer] = useState("");
  const [orders, setOrders] = useState([]);
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
    }, 1000);
  }, []);

  useEffect(() => {
    fetchData();
  }, [idcustomer]);

  const fetchData = async () => {
    try {
      const response = await API.get(`order/${idcustomer}`);
      const responseData = response.data;
      if (responseData.length > 0) {
        set1(responseData);
      } else {
        const response_create_empty_cart = await API.post("/order", {
          customerid: idcustomer,
        });
        await fetchData();
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };

  const set1 = (data) => {
    // console.log("data____", data);
    setOrders(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  useEffect(() => {
    if (orders.length > 0) {
      const filteredCart = orders.find((order) => order.status === "cart");
      const orderid = filteredCart.orderid;
      AsyncStorage.setItem("cartid", JSON.stringify({ orderid }));
    }
  }, [orders]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: "12%",
            justifyContent: "space-evenly",
            backgroundColor: COLORS.primary,
            borderBottomRightRadius: 18,
            borderBottomLeftRadius: 18,
          }}
        >
          <View
            style={{
              height: 44,
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
                <TextInput
                  style={{ padding: 12, paddingRight: 100 }}
                  placeholder="Món ngon đang chờ bạn..."
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.navigate("Order")}
            >
              <MaterialCommunityIcons
                name="book-check-outline"
                size={27}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.navigate("Cart")}
            >
              <FontAwesome name="shopping-basket" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={{
            flex: 1,
            marginTop: 10,
            marginHorizontal: 10,
            // backgroundColor: COLORS.lightPrimary,
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <TouchableOpacity
              style={{
                height: 190,
                width: "96%",
              }}
            >
              <Image
                source={require("./../assets/images/product.png")}
                style={{
                  width: "103%",
                  height: 190,
                  resizeMode: "cover",
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 244,
                // backgroundColor: COLORS.gray,
                marginVertical: 20,
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 130,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CateProduct", {
                        data: "Miền Bắc",
                      })
                    }
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={require("./../assets/images/locate.png")}
                      style={{
                        height: 60,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Miền Bắc
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 100,
                    width: 130,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CateProduct", {
                        data: "Miền Trung",
                      })
                    }
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={require("./../assets/images/locate.png")}
                      style={{
                        height: 60,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Miền Trung
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 100,
                    width: 130,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CateProduct", {
                        data: "Miền Nam",
                      })
                    }
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={require("./../assets/images/locate.png")}
                      style={{
                        height: 60,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Miền Nam
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 130,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CateProduct", {
                        data: "Khô, sấy",
                      })
                    }
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={require("./../assets/images/KhoSay.png")}
                      style={{
                        height: 60,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Khô, sấy
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 100,
                    width: 130,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CateProduct", {
                        data: "Bánh kẹo",
                      })
                    }
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={require("./../assets/images/cake.png")}
                      style={{
                        height: 60,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Bánh kẹo
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 100,
                    width: 130,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CateProduct", {
                        data: "Đồ uống",
                      })
                    }
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: COLORS.primary,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                  >
                    <Image
                      source={require("./../assets/images/drink.png")}
                      style={{
                        height: 60,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Đồ uống
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  // fontStyle: "italic",
                }}
              >
                Yêu thích nhất
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                height: 204,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 204,
                  backgroundColor: COLORS.white,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/images/product2.png")}
                    style={{
                      width: 300,
                      height: 140,
                      alignSelf: "center",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Kẹo dừa bến tre
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    Ăn vào dính quả déo sao mà dứt
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: 300,
                  height: 204,
                  backgroundColor: COLORS.white,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/images/product4.png")}
                    style={{
                      width: 300,
                      height: 140,
                      alignSelf: "center",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Kẹo dừa bến tre
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    Ăn vào dính quả déo sao mà dứt
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: 300,
                  height: 204,
                  backgroundColor: COLORS.white,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/images/product5.png")}
                    style={{
                      width: 300,
                      height: 140,
                      alignSelf: "center",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Kẹo dừa bến tre
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    Ăn vào dính quả déo sao mà dứt
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View>
            <View
              style={{
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  // fontStyle: "italic",
                }}
              >
                Giá cực tốt
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                height: 300,
                marginBottom: 20,
                // backgroundColor: COLORS.gray,
              }}
            >
              <View
                style={{
                  width: 204,
                  height: 300,
                  backgroundColor: COLORS.white,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/images/product3.png")}
                    style={{
                      width: 204,
                      height: 204,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Kẹo dừa bến tre
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    Ăn vào dính quả déo sao mà dứt
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: 204,
                  height: 300,
                  backgroundColor: COLORS.white,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/images/product5.png")}
                    style={{
                      width: 204,
                      height: 204,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Mắc ruốc Bang Ly
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    Vị ngon nhức nách, mê ly
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: 204,
                  height: 300,
                  backgroundColor: COLORS.white,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/images/product1.png")}
                    style={{
                      width: 204,
                      height: 204,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Kẹo dừa Bến Nghé
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    Ăn vào dính quả déo sao mà dứt
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View>
            <View
              style={{
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  // fontStyle: "italic",
                }}
              >
                Gợi ý cho bạn
              </Text>
            </View>
            <ScrollView
              // horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                // height: 300,
                marginBottom: 20,
                // backgroundColor: COLORS.gray,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
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
                    <Text style={{ fontSize: 12, fontWeight: 300 }}>
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
                    <Text style={{ fontSize: 12, fontWeight: 300 }}>
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
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
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
                    <Text style={{ fontSize: 12, fontWeight: 300 }}>
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
                    <Text style={{ fontSize: 12, fontWeight: 300 }}>
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
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
