import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// 导入页面组件
import LoginScreen from "../login_RN";
import MenusScreen from "../menus_RN";
// import ProductInScreen from "../pages/productIn";
// import ProductInNewScreen from "../pages/productIn/new";
// import ProductInAddScreen from "../pages/productIn/add";
// import ProductOutScreen from "../pages/productOut";
// import ProductOutDetailScreen from "../pages/productOut/detail";
// import StockScreen from "../pages/stock";
// import StockDetailScreen from "../pages/stock/detail";
// import StockManualScreen from "../pages/stock/manual";
// import PrintScreen from "../pages/print";
// import ProductTransferScreen from "../pages/productTransfer";
// import OrderForwardScreen from "../pages/orderForward";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // 隐藏默认头部
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menus" component={MenusScreen} />

        {/* <Stack.Screen name="ProductIn" component={ProductInScreen} />
        <Stack.Screen name="ProductInNew" component={ProductInNewScreen} />
        <Stack.Screen name="ProductInAdd" component={ProductInAddScreen} />

        <Stack.Screen name="ProductOut" component={ProductOutScreen} />
        <Stack.Screen
          name="ProductOutDetail"
          component={ProductOutDetailScreen}
        />

        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="StockDetail" component={StockDetailScreen} />
        <Stack.Screen name="StockManual" component={StockManualScreen} />

        <Stack.Screen name="Print" component={PrintScreen} />
        <Stack.Screen
          name="ProductTransfer"
          component={ProductTransferScreen}
        />
        <Stack.Screen name="OrderForward" component={OrderForwardScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
