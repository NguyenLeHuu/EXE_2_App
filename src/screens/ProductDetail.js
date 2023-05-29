import React from "react";
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
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
const ProductDetail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 290,
            width: 410,
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: -80 }}>
            <Image
              source={require("./../assets/images/product.png")}
              style={{
                width: 380,
                height: 241,
                resizeMode: "contain",
              }}
            />
          </View>

          <View style={{ width: 390, marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.txt_d1}>Hồng treo gió</Text>
              <Text style={styles.txt_d1}>250.000đ</Text>
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
          <TouchableOpacity style={styles.btn}>
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
            1
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
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
          onPress={() => navigation.navigate("Tab bar")}
          style={{
            height: 60,
            width: 330,
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
            Thêm vào giỏ hàng - 250.000
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
