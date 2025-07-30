import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import FaceRecognition from "./components/FaceRecognition";
import AnimatedBackground from "./components/AnimatedBackground";
import PushNotification from "react-native-push-notification";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [faceVisible, setFaceVisible] = useState(false);

  const loginWithFace = () => {
    setFaceVisible(true);
  };

  const loginWithAccount = () => {
    console.log("账号登录:", { username, password });
    navigation.replace("Menus");
  };

  const loginSuccess = () => {
    setFaceVisible(false);
    console.log("登录成功");
    navigation.replace("Menus");
  };

  const handleNotify = () => {
    PushNotification.localNotification({
      title: "测试通知",
      message: "这是一条测试通知内容",
      playSound: true,
      soundName: "default",
    });

    Toast.show({
      type: "success",
      text1: "通知已发送",
      text2: "请查看通知栏",
    });
  };

  useEffect(() => {
    // 配置推送通知
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("收到通知:", notification);
      },
      requestPermissions: Platform.OS === "ios",
    });

    // 创建通知频道 (Android)
    PushNotification.createChannel(
      {
        channelId: "default-channel",
        channelName: "Default Channel",
        channelDescription: "A default channel",
        soundName: "default",
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`)
    );
  }, []);

  return (
    <AnimatedBackground
      source={require("../assets/images/background.png")}
      duration={600}
    >
      <View style={styles.container}>
        <View style={styles.overlay} />
        <Text style={styles.title}>通货出入库系统</Text>
        <View style={styles.inputContainer}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>账号</Text>
          </View>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="请输入账号"
            placeholderTextColor="#999"
          />

          <View style={{ height: 20 }} />
          <View>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <View style={styles.labelRow}>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>密码</Text>
                  <Text style={styles.arrow}>{showPassword ? "▲" : "▼"}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {showPassword && (
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="请输入密码"
              placeholderTextColor="#999"
              secureTextEntry
            />
          )}
        </View>

        <TouchableOpacity
          style={styles.faceButton}
          onPress={() => {
            if (showPassword) {
              loginWithAccount();
            } else {
              loginWithFace();
            }
          }}
        >
          <Text style={styles.faceButtonText}>
            {showPassword ? "账号登录" : "人脸识别"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faceButton} onPress={handleNotify}>
          <Text style={styles.faceButtonText}>测试通知</Text>
        </TouchableOpacity>

        {/* <FaceRecognition
          visible={faceVisible}
          onClose={() => loginSuccess()}
          onSuccess={() => loginSuccess()}
        /> */}
      </View>
      <Toast />
    </AnimatedBackground>
  );
}

// 样式保持不变
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontWeight: 900,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -10,
    opacity: 0.3,
    backgroundColor: "rgba(247, 250, 255, 0.8)",
  },
  title: {
    fontSize: 36,
    color: "#2563eb",
    fontWeight: 900,
    marginBottom: 60,
    marginTop: -60,
    textAlign: "center",
  },
  inputContainer: {
    width: "85%",
    marginBottom: 40,
  },
  labelRow: {
    fontSize: 20,
    color: "#222",
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  label: {
    fontSize: 26,
    color: "#222",
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
  },
  arrow: {
    position: "absolute",
    right: -12,
    top: 2,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 16,
  },
  faceButton: {
    backgroundColor: "#2563eb",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 36,
    alignItems: "center",
    marginTop: 10,
  },
  faceButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
