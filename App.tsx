/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from "@react-native/new-app-screen";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from "react-native";

// import Bluetooth from "./service/Bluetooth";

interface IDevice {
  name: string;
  id: string;
}

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Bluetooth.startScan((devices: any) => {
    //   setDevices(devices);
    // });

    return () => {
      // Bluetooth.stopScan();
    };
  }, []);

  //@ts-ignore
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderColor: "#eee" }}
    >
      <Text>{item.name || "未知设备"}</Text>
      <Text style={{ color: "#888" }}>{item.id}id</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        扫描到的蓝牙设备
      </Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>暂无设备</Text>
        }
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
