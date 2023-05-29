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
} from "react-native";
import { COLORS, SIZES } from "../constants/index";
// import firebase from "firebase/app";
// import "firebase/auth";

// // Cấu hình Firebase
// const firebaseConfig = {
//   // apiKey: "AIzaSyDsDbQotWd0DUosqcTZJjVGxtH-L1xRrrA",
//   // authDomain: "exe-tastetrekker.firebaseapp.com",
//   // projectId: "exe-tastetrekker",
//   apiKey: "AIzaSyAcnwA0rbfkl9xLDsKip90UQJiEhEI-Zqk",
//   authDomain: "fir-auth-uicha.firebaseapp.com",
//   projectId: "fir-auth-uicha",
// };

// // Khởi tạo ứng dụng Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        // marginHorizontal: 60,
        paddingHorizontal: 20,
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View
        style={{
          marginTop: "15%",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./../assets/images/Logo.png")}
          style={{
            width: 280,
            height: 280,
            resizeMode: "contain",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{}}>
          <SafeAreaView>
            <TextInput
              style={{
                height: 60,
                width: 330,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              onChangeText={onChangeText}
              value={text}
              placeholder="Tài khoản, số điện thoại hoặc Email"
            />
            <TextInput
              style={{
                height: 60,
                width: 330,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Mật khẩu"
              keyboardType="numeric"
            />

            <View
              style={{
                alignItems: "flex-end",
                fontSize: SIZES.h3,
              }}
            >
              <Text>Quên mật khẩu?</Text>
            </View>
          </SafeAreaView>

          <View
            style={{
              marginTop: 30,
            }}
          >
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
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 18,
            width: 330,
            flexDirection: "row",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: COLORS.primary,
            }}
          ></View>
          <View>
            <Text
              style={{
                fontSize: SIZES.radius,
              }}
            >
              Hoặc đăng nhập với
            </Text>
          </View>
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: COLORS.primary,
            }}
          ></View>
        </View>

        <View
          style={{
            width: "50%",
            flexDirection: "row",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <View style={styles.circle}>
              <Image
                source={require("./../assets/images/google.png")}
                style={styles.social_icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.circle}>
              <Image
                source={require("./../assets/images/facbook.png")}
                style={styles.social_icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.circle}>
              <Image
                source={require("./../assets/images/apple.png")}
                style={styles.social_icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  circle: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  social_icon: {
    width: 25.27,
    height: 30,
    resizeMode: "contain",
    padding: 20,
  },
});
