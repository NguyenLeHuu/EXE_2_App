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
  ActivityIndicator,
  Linking,
} from "react-native";
import Modal from "react-native-modal";
import { COLORS, SIZES } from "../constants/index";

import {
  MaterialIcons,
  Entypo,
  Ionicons,
  Fontisto,
  Feather,
} from "@expo/vector-icons";
import createMyAxios from "../util/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = createMyAxios();

const CartScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState();
  const [itemCart, setItemCart] = useState([]);
  const [idcustomer, setIdcustomer] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const [totalMoney, setTotalMoney] = useState(0);

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
    fetchData();
  }, [idcustomer]);

  const fetchData = async () => {
    try {
      // const idcustomer = "Cus_01";
      const response = await API.get(`order/${idcustomer}`);
      const responseData = response.data;
      set1(responseData);
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
      setCart(filteredCart);
    }
  }, [orders]);
  useEffect(() => {
    // console.log(cart, "cart");
    if (cart !== undefined) {
      const orderdetails = cart.OrderDetails;
      setItemCart(orderdetails);
    }
  }, [cart]);

  const handerIncrease = async (orderdetailid, quantity) => {
    await API.put("orderdetail", {
      quantity: quantity + 1,
      orderdetailid: orderdetailid,
    });
    await fetchData();
  };

  const handerDescrease = async (orderdetailid, quantity) => {
    await API.put("orderdetail", {
      quantity: quantity - 1,
      orderdetailid: orderdetailid,
    });
    await fetchData();
  };

  // const paypal = async () => {
  //   const items_cart = itemCart.map((item) => ({
  //     name: item.Product.name,
  //     sku: item.Product.productid,
  //     price: item.Product.price,
  //     currency: "USD",
  //     quantity: item.quantity,
  //   }));
  //   // console.log(items_cart);

  //   const total = itemCart.reduce(
  //     (accumulator, item) => accumulator + item.Product.price * item.quantity,
  //     0
  //   );

  //   const idorder = cart.orderid;

  //   const response = await API.post("/pay", {
  //     items_cart: items_cart,
  //     total: total,
  //     idorder: idorder,
  //     customerid: idcustomer,
  //   });

  //   const link_return = response.message;

  //   const supported = await Linking.canOpenURL(link_return);

  //   if (supported) {
  //     await Linking.openURL(link_return);
  //   } else {
  //     console.log("Không thể mở URL:", link_return);
  //   }
  // };

  const momo = async () => {
    toggleModal();
    console.log("momo");
    const total = itemCart.reduce(
      (accumulator, item) => accumulator + item.Product.price * item.quantity,
      0
    );
    setTotalMoney(total);
    console.log("cartid___", cart.orderid);
    await API.put(`/order/status/${cart.orderid}`, {
      tracking: "checking",
    });

    await API.put(`/order/total/${cart.orderid}`, {
      totalmoney: total,
    });

    const res = await API.post("/order", {
      customerid: idcustomer,
    });

    console.log(res.data.orderid);

    const id = res.data.orderid;
    await AsyncStorage.setItem("cartid", JSON.stringify({ id }));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const copyToClipboard = (content) => {
  //   Clipboard.setString(content);
  // };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
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
            Giỏ hàng ({itemCart.length})
          </Text>
        </View>

        {itemCart.length > 0 ? (
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
              {itemCart.map((item, index) => (
                <View
                  key={index}
                  style={{
                    height: 260,
                    backgroundColor: COLORS.white,
                    marginTop: 10,
                    marginHorizontal: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("SupplierScreen", {
                        data: item?.Product.Category.Saler.salerid,
                      });
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
                        {item?.salername || "Ara Sports"}
                        {/* Ara Sports */}
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
                        // source={require("./../assets/images/product.png")}
                        source={{
                          uri:
                            item?.Product.mainimg ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SpmjR1qryESMLE7EQ6IVXO-gednZHwqtaA&usqp=CAU",
                        }}
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
                        {item?.Product.name ||
                          "Gìay đá bóng Predator 2021_mouma roni ko da đẹpaaaaaaaaaaaaaaaaaaaaaaa"}
                      </Text>
                      <View
                        style={{
                          fontSize: 13,
                          marginTop: 5,
                          fontWeight: 300,
                        }}
                      >
                        <Text>Size L</Text>
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
                          đ{item?.Product.price || "135.000"}
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
                      <TouchableOpacity
                        onPress={() => {
                          handerDescrease(item.orderdetailid, item.quantity);
                        }}
                        style={styles.btn}
                      >
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
                        {item?.quantity}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          handerIncrease(item.orderdetailid, item.quantity);
                        }}
                        style={styles.btn}
                      >
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
                        đ{item?.Product.price * item?.quantity || "154"}
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
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
            <View>
              <Image
                source={require("./../assets/images/empty.png")}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Chưa có đơn hàng
              </Text>
            </View>
          </View>
        )}

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
                <Fontisto
                  name="shopping-sale"
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
                style={{
                  fontWeight: 600,
                  color: COLORS.primary,
                  fontSize: 20,
                }}
              >
                đ
                {itemCart
                  .reduce(
                    (accumulator, item) =>
                      accumulator + item.Product.price * item.quantity,
                    0
                  )
                  .toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // paypal();
                momo();
              }}
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
                Mua hàng ({itemCart.length})
              </Text>
              <Modal
                isVisible={isModalVisible}
                animationIn="slideInDown"
                animationOut="slideOutDown"
                animationInTiming={900}
                animationOutTiming={900}
                onBackdropPress={toggleModal}
              >
                <View
                  style={{
                    marginHorizontal: 15,
                    justifyContent: "flex-start",
                    backgroundColor: COLORS.light,
                    flex: 0.45,
                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.primary,
                      flex: 0.3,
                      borderTopStartRadius: 20,
                      borderTopEndRadius: 20,
                      marginBottom: 15,
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: COLORS.white,
                        }}
                      >
                        Hướng dẫn thanh toán
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                    }}
                  >
                    <View style={{ marginBottom: 15 }}>
                      <Text style={{ fontSize: 18, fontWeight: "600" }}>
                        Chuyển khoản với nội dung như sau
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            width: "90%",
                            borderRadius: 5,
                            backgroundColor: COLORS.grey,
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <View style={{}}>
                            <Text
                              numberOfLines={2}
                              // ellipsizeMode="tail"
                              style={styles.content}
                            >
                              {`$TasteTreeker - ${cart.orderid} - đ${totalMoney}`}
                            </Text>
                          </View>
                          <TouchableOpacity
                          // onPress={copyToClipboard(
                          //   `$TasteTreeker - xxxxxxxxxx - đ300.000.000000`
                          // )}
                          >
                            <Feather name="copy" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                      <Text style={{ fontSize: 18, fontWeight: "600" }}>
                        Ngân Hàng Agribank
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            width: "90%",
                            borderRadius: 5,
                            backgroundColor: COLORS.grey,
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={styles.content}>
                            Số tài khoản: 6001 2052 6241 5
                          </Text>
                          <TouchableOpacity
                          // onPress={copyToClipboard("6001 2052 6241 5")}
                          >
                            <Feather name="copy" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                      <Text style={{ fontSize: 18, fontWeight: "600" }}>
                        MoMo
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            width: "90%",
                            borderRadius: 5,
                            backgroundColor: COLORS.grey,
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={styles.content}>
                            Số điện thoại: 0354187011
                          </Text>
                          <TouchableOpacity
                          // onPress={copyToClipboard("0354187011")}
                          >
                            <Feather name="copy" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    {/* <View style={{ flex: 0.1, justifyContent: "flex-end" }}>
                      <Text>Đơn hàng sẽ được kiểm tra và xác nhận sớm!</Text>
                    </View> */}
                  </View>
                </View>
              </Modal>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default CartScreen;

const styles = StyleSheet.create({
  btn: {
    height: 35,
    width: 30,
    marginHorizontal: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  txt_d1: {
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
  txt_d2: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: "300",
  },
  txt_d3: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontStyle: "italic",
    fontWeight: "300",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  content: {
    color: COLORS.primary,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 16,
  },
});
