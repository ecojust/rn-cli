import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import AnimatedBackground from "./components/AnimatedBackground";

const menuData = [
  {
    title: "产品入库",
    icon: require("../assets/icon/putin.png"),
    colors: ["#4A90E2", "#7B68EE"],
    route: "ProductIn",
  },
  {
    title: "产品出库",
    icon: require("../assets/icon/out.png"),
    colors: ["#5B2C87", "#1E88E5"],
    route: "ProductOut",
  },
  {
    title: "库存查询",
    icon: require("../assets/icon/search.png"),
    colors: ["#1976D2", "#42A5F5"],
    route: "Stock",
  },
  {
    title: "标签打印",
    icon: require("../assets/icon/print.png"),
    colors: ["#00ACC1", "#26C6DA"],
    route: "Print",
  },
  {
    title: "产品移库",
    icon: require("../assets/icon/productTransfer.png"),
    colors: ["#1565C0", "#1976D2"],
    route: "ProductTransfer",
  },
  {
    title: "订单转发",
    icon: require("../assets/icon/orderForward.png"),
    colors: ["#1976D2", "#42A5F5"],
    route: "OrderForward",
  },
];

const CARD_SIZE = (Dimensions.get("window").width - 3 * 32) / 2;

export default function Menus() {
  const navigation = useNavigation();

  return (
    <AnimatedBackground
      source={require("../assets/images/background2.png")}
      duration={600}
    >
      <View style={styles.container}>
        <View style={styles.grid}>
          {menuData.map((item) => (
            <TouchableOpacity
              key={item.title}
              activeOpacity={0.85}
              onPress={() => navigation.navigate(item.route)}
              style={[styles.title]}
            >
              <LinearGradient
                style={[styles.card]}
                colors={[item.colors[0], item.colors[1]]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.iconWrap}>
                  <Image source={item.icon} style={styles.icon} />
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.exitBtn}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.exitText}>退出程序</Text>
        </TouchableOpacity>
      </View>
    </AnimatedBackground>
  );
}

// 样式保持不变
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 40,
  },
  title: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE * 0.92,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 12,
    overflow: "hidden",
    margin: 16,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 0,
    marginLeft: 0,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.08)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  exitBtn: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#2563eb",
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#2563eb",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
    paddingVertical: 12,
    paddingHorizontal: 36,
  },
  exitText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 2,
  },
});
