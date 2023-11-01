import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MonthlyData } from "src/misc";
import HistoryCard from "./HistroyCard";

interface RecentHistoryProps {
  bill: MonthlyData | null;
  label?: string;
}

const RecentHistory = ({ bill, label }: RecentHistoryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{label}</Text>
        <TouchableOpacity>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      {bill?.payment_history.length == 0 ? (
        <View style={styles.empty}>
          <Text>Emtpy history</Text>
        </View>
      ) : (
        <ScrollView>
          {bill?.payment_history.map((item, index) => {
            return (
              <HistoryCard
                key={index}
                history={item}
                service={bill.service}
                date={bill.date}
                logoUrl={bill.logoUrl}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default RecentHistory;

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
  empty: {
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
