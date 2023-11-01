import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  TouchableOpacityProps,
} from "react-native";
import React, { Dispatch, useState } from "react";
import { MonthlyData } from "src/misc";
import {
  AnimatedProp,
  Canvas,
  Circle,
  Color,
  Image,
  LinearGradient,
  useImage,
  vec,
} from "@shopify/react-native-skia";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavProp } from "src/navigation/types";

interface CardProps extends TouchableOpacityProps {
  bill: MonthlyData | null;
  bg: AnimatedProp<Color>;
  fg: AnimatedProp<Color>;
}

interface MonthlyBillProps {
  data: MonthlyData[] | null;
  setBill: Dispatch<React.SetStateAction<MonthlyData>>;
}

const Card = ({ bill, bg, fg, ...props }: CardProps) => {
  const { width } = useWindowDimensions();
  const logo = useImage(bill?.logoUrl);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: width / 3 - 30,
        padding: 6,
        borderRadius: 12,
        backgroundColor: bg as never,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas style={{ width: 50, height: 50 }}>
        <Circle cx={25} cy={25} r={25}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(50, 50)}
            colors={["#FD5E37", "#9c2103"]}
          />
        </Circle>
        <Circle cx={25} cy={25} r={22} style={"fill"} color={bg} />
        <Image
          image={logo}
          fit={"contain"}
          height={22}
          width={22}
          x={15}
          y={15}
        />
      </Canvas>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: fg as never,
          }}
        >
          {bill?.service}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 11,
            color: fg as never,
            opacity: 0.6,
            textTransform: "capitalize",
          }}
        >
          {bill?.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MonthlyBill = ({ data, setBill }: MonthlyBillProps) => {
  const [activeBillIndex, setActiveBillIndex] = useState(0);
  const { navigate } = useNavigation<HomeStackNavProp>();

  if (!data) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size={"large"} color={"#FD5E37"} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monthly Bills</Text>
        <TouchableOpacity>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ padding: 16, gap: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <Card
              onPress={() => {
                setBill(data[index]);
                setActiveBillIndex(index);
                navigate("BillingDetails", { bill: data[index] });
              }}
              key={item.id}
              bill={item}
              bg={activeBillIndex == index ? "#242424" : "#ffffff"}
              fg={activeBillIndex == index ? "#ffffff" : "#242424"}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MonthlyBill;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
  },
});
