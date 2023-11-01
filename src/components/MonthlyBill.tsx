import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { MonthlyData } from "src/misc";
import {
  Canvas,
  Circle,
  Image,
  LinearGradient,
  Rect,
  useImage,
  vec,
} from "@shopify/react-native-skia";

const Card = ({ bill }: { bill: MonthlyData | null }) => {
  const { width } = useWindowDimensions();
  const logo = useImage(bill?.logoUrl);

  return (
    <TouchableOpacity
      style={{
        width: width / 3 - 30,
        padding: 8,
        borderRadius: 12,
        backgroundColor: "#fff",
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
        <Circle cx={25} cy={25} r={22} style={"fill"} color={"#fff"} />

        {logo ? (
          <Image
            image={logo}
            fit={"contain"}
            height={22}
            width={22}
            x={15}
            y={15}
          />
        ) : (
          <ActivityIndicator size={"small"} color={"#FD5E37"} />
        )}
      </Canvas>
      <View>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          {bill?.service}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "#494949",
            textTransform: "capitalize",
          }}
        >
          {bill?.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MonthlyBill = ({ data }: { data: MonthlyData[] | null }) => {
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
        {data.map((item) => {
          return <Card key={item.id} bill={item} />;
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
