import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "src/navigation/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainer, RecentHistory } from "@components";
import {
  Canvas,
  Circle,
  LinearGradient,
  vec,
  Image,
  useImage,
} from "@shopify/react-native-skia";

type BillingDetailsRouteProp = RouteProp<StackParamList, "BillingDetails">;

const { width, height } = Dimensions.get("screen");
const bannerHeight = height * 0.35;
const canvasSize = width * 0.6;
const radius = canvasSize / 2 - 10;
const middleP = canvasSize / 2;

const BillingDetails = () => {
  const {
    params: { bill },
  } = useRoute<BillingDetailsRouteProp>();
  const { goBack } = useNavigation();
  const logo = useImage(bill.logoUrl);
  return (
    <MainContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Monthly bills
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.banner}>
            <Canvas style={{ width: canvasSize, height: canvasSize }}>
              <Circle
                cx={middleP}
                style={"stroke"}
                strokeWidth={12}
                cy={middleP}
                r={radius}
              >
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(canvasSize, canvasSize)}
                  colors={["#FD5E37", "#ff7755"]}
                />
              </Circle>
              <Circle
                cx={middleP}
                cy={middleP}
                r={radius - 18}
                style={"fill"}
                color={"#242424"}
              />
              <Image
                image={logo}
                fit={"contain"}
                height={120}
                width={120}
                x={middleP - 60}
                y={middleP - 60}
              />
            </Canvas>
            <Text style={styles.title}>{bill.service} Subscription</Text>
          </View>
          <View>
            <RecentHistory label="Previous History" bill={bill} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </MainContainer>
  );
};

export default BillingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: bannerHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
