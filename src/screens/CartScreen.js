import React, { useState, useEffect } from "react";
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
import createMyAxios from "../util/axios";

const API = createMyAxios();

const CartScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
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
    filteredCart = orders.filter((order) => order.status === "cart");
    setCart(filteredCart);
    console.log(cart);
  }, [orders]);

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
          Giỏ hàng ({cart.length})
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
          marginBottom: 10,
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              height: 260,
              backgroundColor: COLORS.white,
              marginTop: 10,
              marginHorizontal: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SupplierScreen");
              }}
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    marginRight: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    Yêu thích
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {" "}
                  Ara Sports
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  marginRight: 20,
                }}
              >
                <Image
                  source={require("./../assets/images/product.png")}
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    width: 300,
                  }}
                >
                  Gìay đá bóng Predator 2021_mouma roni ko da
                  đẹpaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
                <View
                  style={{
                    fontSize: 13,
                    marginTop: 5,
                    fontWeight: 300,
                  }}
                >
                  <Text>A8_Đen cam, 41</Text>
                </View>
                <View
                  style={{
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      marginTop: 5,
                      fontWeight: 500,
                      color: COLORS.primary,
                    }}
                  >
                    đ135.000
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                justifyContent: "center",
              }}
            >
              <View>
                <TouchableOpacity style={styles.btn}>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: SIZES.h4,
                      fontWeight: "bold",
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: COLORS.lightGray,
                }}
              >
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: SIZES.h2,
                    paddingHorizontal: 20,
                  }}
                >
                  1
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.btn}>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: SIZES.h4,
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Shop Voucher 50% mua lần đầu
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  name="attach-money"
                  size={24}
                  color={COLORS.primary}
                />
                <Text
                  style={{
                    fontWeight: 300,
                    fontSize: 16,
                  }}
                >
                  {" "}
                  Tổng:{" "}
                </Text>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  đ154.600
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                marginTop: 10,
              }}
            ></View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          backgroundColor: COLORS.lightGray,
          flex: 0.3,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            borderTopWidth: 1,
            borderColor: COLORS.light,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginHorizontal: 5,
              }}
            >
              <Fontisto name="shopping-sale" size={24} color={COLORS.primary} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                TasteTreeker Voucher
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 200,
                }}
              >
                Chọn hoặc nhập mã
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 5,
                opacity: 0.2,
              }}
            >
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            borderColor: COLORS.light,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginHorizontal: 5,
              }}
            >
              <MaterialIcons
                name="attach-money"
                size={24}
                color={COLORS.primary}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Bạn chưa chọn sản phẩm
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Switch
              style={{
                marginHorizontal: 5,
                opacity: 0.5,
              }}
            ></Switch>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            borderColor: COLORS.light,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: 400 }}>Tổng thanh toán </Text>
            <Text
              style={{ fontWeight: 600, color: COLORS.primary, fontSize: 20 }}
            >
              đ1.253.000
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text
              style={{ fontWeight: 600, color: COLORS.white, fontSize: 20 }}
            >
              {" "}
              Mua hàng (3)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  btn: {
    height: 35,
    width: 30,
    marginHorizontal: 0,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.lightGray,
  },
  // txt_d1: {
  //   color: COLORS.black,
  //   fontSize: SIZES.h2,
  // },
  // txt_d2: {
  //   color: COLORS.black,
  //   fontSize: SIZES.h3,
  //   fontWeight: "300",
  // },
  // txt_d3: {
  //   color: COLORS.black,
  //   fontSize: SIZES.h4,
  //   fontStyle: "italic",
  //   fontWeight: "300",
  // },
});
