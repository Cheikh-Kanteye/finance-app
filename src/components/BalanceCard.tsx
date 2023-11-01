import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { icons } from "@assets";
import {
  Canvas,
  LinearGradient,
  Rect,
  RoundedRect,
} from "@shopify/react-native-skia";

const IncToExpenseRatio = ({ ratio }: { ratio: number }) => {
  const { width } = useWindowDimensions();
  const percent = width * ratio;

  return (
    <Canvas style={{ width: "100%", height: 30 }}>
      <Rect
        x={0}
        y={16}
        width={width}
        height={6}
        style={"fill"}
        color={"rgba(253, 95, 55, 0.1)"}
      ></Rect>
      <Rect x={0} y={16} width={percent} height={6}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: width, y: 0 }}
          colors={["#2b0901", "#fd5f37", "#fd5f37"]}
        />
      </Rect>
      <RoundedRect
        x={percent}
        y={14}
        width={4}
        height={10}
        r={4}
        style={"fill"}
        color={"#fffefe"}
      />
    </Canvas>
  );
};

const BalanceCard = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(15676.6);
  const [expenses, setExpenses] = useState(11616.2);

  useEffect(() => {
    setBalance(income - expenses);
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardRow}>
          <View>
            <Text style={styles.balance}>${balance.toFixed(2)}</Text>
            <Text style={styles.label}>
              Interest: <Text style={{ color: "#FD5E37" }}>6% APY</Text>
            </Text>
          </View>
          <Image
            source={icons.walletO}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.trackedBalance}>${income.toFixed(2)}</Text>
              <Text style={styles.label}>Total Income</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.trackedBalance}>${expenses.toFixed(2)}</Text>
              <Text style={styles.label}>Expenses</Text>
            </View>
          </View>
          {/* ======================income-to-expense ratio================= */}
          <IncToExpenseRatio ratio={expenses / income} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 180,
    justifyContent: "space-between",
    backgroundColor: "#242424",
    borderRadius: 24,
    paddingVertical: 18,
    overflow: "hidden",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  balance: { color: "#fff", fontSize: 20, fontWeight: "900" },
  label: { color: "#bebebe", fontSize: 11 },
  trackedBalance: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  img: {
    width: 28,
    height: 28,
    tintColor: "#fcfcfc89",
  },
});
