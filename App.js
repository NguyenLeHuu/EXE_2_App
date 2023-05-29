import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import TabBarBottom from "./src/components/tabBarButtom";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailScreen from "./src/screens/ProductDetail";
import CartScreen from "./src/screens/CartScreen";
import OrderScreen from "./src/screens/OrderScreen";
import OrderCancelScreen from "./src/screens/OrderCancelScreen";
import OrderDoneScreen from "./src/screens/OrderDoneScreen";
import OrderPendingScreen from "./src/screens/OrderPendingScreen";
import CateProduct from "./src/screens/CateProduct";
import SupplierScreen from "./src/screens/SupplierScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab bar" component={TabBarBottom} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Đang giao" component={OrderPendingScreen} />
        <Stack.Screen name="Đã nhận" component={OrderDoneScreen} />
        <Stack.Screen name="Đã hủy" component={OrderCancelScreen} />
        <Stack.Screen name="CateProduct" component={CateProduct} />
        <Stack.Screen name="SupplierScreen" component={SupplierScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
