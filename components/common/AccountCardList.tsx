import React, { ReactNode } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";
import { Text } from "../Themed";
import IconContainer, { iconStyle } from "./IconContainer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/Colors";

interface AccountCard {
  iconComponent: ReactNode;
  title: string;
  amount: string;
}

const AccountCardList = () => {
  return (
    <View>
      <FlatList
        style={{ columnGap: 150 }}
        data={[
          {
            iconComponent: (
              <Ionicons name="bag" size={24} color={colors.text} />
            ),
            title: "Account",
            amount: "₹ 3555",
          },
          {
            iconComponent: (
              <Ionicons name="bag" size={24} color={colors.text} />
            ),
            title: "Account",
            amount: "₹ 3555",
          },
        ]}
        renderItem={({ item }) => <AccountCardItem {...item} />}
      />
    </View>
  );
};

const AccountCardItem = ({ iconComponent, title, amount }: AccountCard) => {
  return (
    <Card styles={styles.card}>
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
  },
  textsContainer: {
    flexDirection: "column",
    gap: 5,
  },
});

export default AccountCardList;
