import React, { useState } from "react";
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
const OrderDoneScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
        <View
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
                Ara Sports
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
                3 sản phẩm
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
                đ154.600
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
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
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
        <View
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
                Ara Sports
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
                3 sản phẩm
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
                đ154.600
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
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
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

        <View
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
                Ara Sports
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
                3 sản phẩm
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
                đ154.600
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
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
                        <Entypo name="star-outlined" size={30} color="black" />
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
      </ScrollView>
    </View>
  );
};

export default OrderDoneScreen;
