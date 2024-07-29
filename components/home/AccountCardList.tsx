import React, { ReactNode } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../common/Card";
import { Text } from "../Themed";
import IconContainer, { iconStyle } from "../common/IconContainer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/Colors";

interface AccountCard {
  iconComponent: ReactNode;
  title: string;
  amount: string;
  linkPath: string,
  linkParams: any,
}
type AccountCardListData = AccountCard[];

const AccountCardList = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            iconComponent: (
              <Ionicons name="bag" size={24} color={colors.accent} />
            ),
            title: "Account",
            amount: "₹ 3555",
            linkPath: "/modal",
            linkParams: { id: 1 },
          },
          {
            iconComponent: (
              <Ionicons name="bag" size={24} color={colors.accent} />
            ),
            title: "Account",
            amount: "₹ 3555",
            linkPath: "/modal",
            linkParams: { id: 2 },
          },
        ]}
        renderItem={({ item }) => <AccountCardItem {...item} />}
      />
    </View>
  );
};

const AccountCardItem = ({ iconComponent, title, amount, linkPath, linkParams }: AccountCard) => {
  return (
    <Card styles={styles.card} linkPath={linkPath} linkParams={linkParams}>
      <IconContainer iconComponent={iconComponent} />
      <View style={styles.textsContainer}>
        <Text>{title}</Text>
        <Text>{amount}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 5,
  },
  textsContainer: {
    flexDirection: "column",
    gap: 5,
  },
});

export default AccountCardList;
