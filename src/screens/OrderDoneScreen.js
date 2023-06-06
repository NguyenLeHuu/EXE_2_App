import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { COLORS } from "../constants/index";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
const OrderDoneScreen = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [done, setDone] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = route.params;
        const filteredDone = data.filter((order) => order.status === "done");
        console.log("___", filteredDone);
        setDone(filteredDone);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [route.params.data]);
  // console.log("done.length");
  // console.log(done.length);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  if (done.length > 0) {
    return (
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
          {done.map((item, index) => (
            <View
              key={index}
              style={{
                height: 260,
                backgroundColor: COLORS.white,
                marginTop: 10,
              }}
            >
              <View
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
                    {item?.orderid || "Ara Sports"}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: COLORS.primary,
                    }}
                  >
                    Hoàn thành
                  </Text>
                </View>
              </View>
              <View
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
                <View>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 300,
                    }}
                  >
                    Gìay đá bóng Predator 2021_mouma roni ko da đẹp
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
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Text>Nhấn vào để xem chi tiết</Text>
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
                    {item.OrderDetails.length || "3"} sản phẩm
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
                    Thành tiền:{" "}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    {
                      item.totalmoney
                      // .toLocaleString("en-US", {
                      //   minimumFractionDigits: 1,
                      //   maximumFractionDigits: 1,
                      // })
                    }
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    width: 100,
                    backgroundColor: COLORS.primary,
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "bold",
                      fontSize: 16,
                      fontStyle: "italic",
                    }}
                  >
                    Đánh giá
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
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: COLORS.gray,
                          height: 280,
                          width: 350,
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            margin: 20,
                            justifyContent: "space-evenly",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              flex: 1,
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Entypo
                              name="star-outlined"
                              size={30}
                              color={COLORS.primary}
                            />
                            <Entypo
                              name="star-outlined"
                              size={30}
                              color="black"
                            />
                            <Entypo
                              name="star-outlined"
                              size={30}
                              color="black"
                            />
                            <Entypo
                              name="star-outlined"
                              size={30}
                              color="black"
                            />
                            <Entypo
                              name="star-outlined"
                              size={30}
                              color="black"
                            />
                          </View>
                          <View
                            style={{
                              backgroundColor: COLORS.lightGrey,
                              height: 150,
                              marginTop: 10,
                              marginBottom: 10,
                            }}
                          >
                            <TextInput
                              multiline={true}
                              numberOfLines={6}
                              //onChangeText={(text) => this.setState({text})}
                              // value={this.state.text}
                            ></TextInput>
                          </View>

                          <TouchableOpacity>
                            <View
                              style={{
                                alignItems: "flex-end",
                              }}
                            >
                              <Text
                                style={{
                                  color: COLORS.primary,
                                  fontSize: 18,
                                  fontWeight: "bold",
                                }}
                              >
                                Đánh giá
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  } else {
    return (
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
    );
  }
};

export default OrderDoneScreen;
