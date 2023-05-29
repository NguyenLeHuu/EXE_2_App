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
import { COLORS, SIZES } from "../constants/index";
import createMyAxios from "../util/axios";
const HomeScreen1 = ({ navigation }) => {
  const API = createMyAxios();
  return (
    <>
      <Text>home</Text>
      <Button
        title="Product detail"
        onPress={() => navigation.navigate("ProductDetail")}
      ></Button>
      <Button title="---------------"></Button>

      <Button title="---------------"></Button>

      <Button
        title="api test"
        onPress={() => {
          const idToken =
            "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwZTFkMjM5MDllNzZmZjRhNzJlZTA4ODUxOWM5M2JiOTg4ZjE4NDUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSOG7r3UgTmd1eeG7hW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4WXAxR01sYm15YTAtbDNBczdaeklxQmloOVdmR2VvVUxycmJ3NUc9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWF1dGgtdWljaGEiLCJhdWQiOiJmaXItYXV0aC11aWNoYSIsImF1dGhfdGltZSI6MTY3ODQyNzQwNiwidXNlcl9pZCI6InhKaDZpbm5zWWxUQmlHNndQTzlOcVZDVjNyUTIiLCJzdWIiOiJ4Smg2aW5uc1lsVEJpRzZ3UE85TnFWQ1YzclEyIiwiaWF0IjoxNjg0OTE0MTAxLCJleHAiOjE2ODQ5MTc3MDEsImVtYWlsIjoibmd1eWVubGVodXUxMTAyMDAwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjgyNTAwNDkzMDYxNjI1MjQ2Il0sImVtYWlsIjpbIm5ndXllbmxlaHV1MTEwMjAwMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.UTxoKI4se-uW8eaIeKfOBAGqtfQvvsZOjIudvoE8JshKgX3Cxv4355RPGwcW25g7wD2kGtsfZHLOOvfEh8rAwAxaoT46fXbZot5Y7TLvnPP79V1tiaWyOUa0uJlCRXVorIL0tVEyGGOMsBz9on8gKv83ewyESeoYyQs8WNifGY6BSWszNMnSD38lLzwLGjEtz_v5bEL2uBWCYn2IcR5imeeMM79CASPjSffXx7OKFo0gix1SGBBLL4xZF-tygtBJF92RUmNR2wCcFPKj_qgXE2X4fHOmzslS8suilWLSK0ROiBON9pGUX1NeuF1_DtvMcbRbaDur3_p2dTddUhaETQ";
          API.post("/login", idToken)
            .then((data) => {
              console.log("GET response:", data);
            })
            .catch((error) => {
              console.error("GET error:", error);
            });
        }}
      ></Button>
    </>
  );
};

export default HomeScreen1;
