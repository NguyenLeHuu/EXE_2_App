import React, { useState, useEffect } from "react";
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
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
import createMyAxios from "../util/axios";

const API = createMyAxios();

const ProductDetail = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(1);
  const product = route.params.data.product;

  const handlerAddToCart = () => {
    navigation.navigate("Tab bar");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <View style={{ backgroundColor: COLORS.primary }}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 320,
            width: 410,
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: -80 }}>
            <Image
              // source={require("./../assets/images/product.png")}
              source={{
                uri:
                  product?.mainimg ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SpmjR1qryESMLE7EQ6IVXO-gednZHwqtaA&usqp=CAU",
              }}
              style={{
                width: 380,
                height: 241,
                resizeMode: "cover",
              }}
            />
          </View>

          <View style={{ width: 390, marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "nowrap",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.h2,
                  flex: 1,
                }}
              >
                {product.name}
              </Text>
              <Text style={styles.txt_d1}>{product.price}đ</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.txt_d2}>( Thương hiệu: Đà Lạt One Farm)</Text>
              <Text style={styles.txt_d2}>500g</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
              }}
            >
              <Entypo name="star-outlined" size={SIZES.h2} color="white" />
              <Text style={styles.txt_d3}>Bán chạy nhất trong cửa hàng</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.h4,
                fontWeight: "bold",
              }}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: SIZES.h2,
            }}
          >
            {quantity}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (quantity < product.quantity) setQuantity(quantity + 1);
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.h4,
                fontWeight: "bold",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handlerAddToCart()}
          style={{
            height: 60,
            width: 350,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.h2,
              fontWeight: "bold",
            }}
          >
            Thêm vào giỏ hàng - {product.price}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

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
});
