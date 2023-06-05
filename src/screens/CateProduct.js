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
const CateProduct = ({ navigation, route }) => {
  let catename = route.params.data;
  // console.log(catename);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getWithData("/product", {
          params: {
            catename: catename,
          },
        });
        // const response = await API.getWithData(
        //   `/product/?catename=${catename}`
        // );

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
          {catename} ({products.length})
        </Text>
      </View>

      <ScrollView
        style={{
          marginVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("ProductDetail", {
                  data: { product },
                });
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
                // source={require("../assets/images/product1.png")}
                source={{
                  uri:
                    product?.mainimg ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SpmjR1qryESMLE7EQ6IVXO-gednZHwqtaA&usqp=CAU",
                }}
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
                  {product.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default CateProduct;
