import AccountCardList from "@/components/home/AccountCardList";
import Card from "@/components/common/Card";
import CategoryTitle from "@/components/home/CategoryTitle";
import IncomeText from "@/components/home/IncomeText";
import { Text } from "@/components/Themed";
import { colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import MonthPicker from "@/components/common/MonthPicker";

const Index = () => {
  return (
    <View style={styles.container}>
      <CategoryTitle
        title="Accounts"
        rightComponent={<IncomeText text="500" />}
      />
      <AccountCardList />
      <Card styles={{ alignItems: "center" }}>
        <Text>+</Text>
      </Card>
      <CategoryTitle
        title="Accounts"
        rightComponent={<MonthPicker />}
      />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.bg,
  },
});

export default Index;
