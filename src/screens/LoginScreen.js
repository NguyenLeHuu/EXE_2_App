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
  ActivityIndicator,
} from "react-native";
import { COLORS, SIZES } from "../constants/index";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createMyAxios from "../util/axios";
import { Switch } from "react-native-paper";
const API = createMyAxios();
const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  GoogleSignin.configure({
    webClientId:
      "315813098350-1tn35k6tbaakadmlkqab5lkrdcvioup9.apps.googleusercontent.com",
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // const user_sign_in = auth().signInWithCredential(googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  async function onAuthStateChanged(user) {
    setIsLoading(true);
    // setUser(user);
    // AsyncStorage.setItem(
    //   "UserLoggedInData",
    //   JSON.stringify({ user, loggedIn: true, idToken })
    // );
    // console.log(">>");
    // console.log(user);
    // console.log("<<");
    const currentUser = auth().currentUser;

    try {
      const idToken = await user.getIdToken();

      const response = await API.post("/login", {
        idToken: idToken,
      });
      const accessToken = response.accessToken;
      AsyncStorage.setItem(
        "UserLoggedInData",
        JSON.stringify({ user, loggedIn: true, idToken, accessToken })
      );
      console.log(response);

      switch (response.accountdb) {
        case "unknown":
          const response_signup = await API.post("/signup", {
            role: "customer",
            address: currentUser?.address || "",
            data: {
              name: currentUser.displayName,
              uid: currentUser.uid,
              email: currentUser.email,
              phone: currentUser?.phoneNumber || "",
              picture: currentUser?.photoURL,
            },
          });
          navigation.navigate("Tab bar");
          break;
        case "customer":
          break;
        case "saler":
          break;
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
      // Continue with the login process
    }, 2000);
    navigation.navigate("Tab bar");
    if (initializing) setInitializing(false);
  }

  if (initializing) return null;

  if (!isLoading) {
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
            <TouchableOpacity
              onPress={() => {
                onGoogleButtonPress().then(() =>
                  console.log("Signed in with Google!")
                );
              }}
            >
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
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }
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
