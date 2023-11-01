import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  useWindowDimensions,
  Text,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { PaymentHistory } from "src/misc/Bills";
import {
  Canvas,
  RoundedRect,
  Shadow,
  useFont,
} from "@shopify/react-native-skia";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavProp } from "src/navigation/types";

interface HistoryCardProps extends TouchableOpacityProps {
  history: PaymentHistory | null;
  service: string;
  date: string;
  logoUrl: string;
}

const HistoryCard = ({
  history,
  service,
  date,
  logoUrl,
  ...props
}: HistoryCardProps) => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<HomeStackNavProp>();
  return (
    <TouchableOpacity
      style={{ height: 100 }}
      onPress={() => {
        props.onPress;
        if (history) {
          navigate("BillHistory", { service, logoUrl, history });
        } else console.log("Something wrong!");
      }}
      {...props}
    >
      <Canvas style={{ width: width, height: 100 }}>
        <RoundedRect
          x={16}
          y={10}
          width={width - 32}
          height={80}
          r={16}
          style={"fill"}
          color={"#FFF"}
        >
          <Shadow dx={0} dy={2} blur={8} color={"rgba(36, 36, 36, 0.06)"} />
        </RoundedRect>
      </Canvas>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.logo}>
            <Image
              style={{ width: 28, height: 28 }}
              source={{ uri: logoUrl }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.service}>{service}</Text>
            <Text style={styles.date}>{history?.date}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.amount}>
            <Text style={{ fontSize: 14 }}>$</Text>
            {history?.amount.toFixed(2)}
          </Text>
          <Ionicons name="chevron-forward" size={20} color={"#a5a3a3"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    width: "100%",
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 45,
    overflow: "hidden",
    backgroundColor: "#242424",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  service: {
    fontSize: 16,
    color: "#242424",
    fontWeight: "bold",
  },
  date: {
    fontSize: 11,

    color: "#242424",
  },
});
