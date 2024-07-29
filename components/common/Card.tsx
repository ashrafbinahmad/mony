import React, { Component, ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  StyleSheetProperties,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "../Themed";
import { colors } from "@/constants/Colors";
import { Link, Navigator } from "expo-router";

const Card = ({
  linkPath,
  linkParams,
  children,
  styles,
}: {
  linkPath?: string;
  linkParams?: any;
  children: ReactNode;
  styles?: ViewStyle;
}) => {
  return (
    <Link href={{
      pathname: linkPath ?? '',
      params: linkParams,
    }} asChild style={{ ..._styles.card, ...styles }}>
      <Pressable>
        {children}
      </Pressable>
    </Link>
  );
};

const _styles = StyleSheet.create({
  card: {
    borderColor: colors.border,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default Card;
