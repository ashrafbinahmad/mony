import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../Themed";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/Colors";

interface MonthPickerProps {
  onPicked?: (month: string, year: number) => void;
}

const MonthPicker = ({ onPicked }: MonthPickerProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="chevron-back" size={24} color={colors.text} />
      <Text style={{ width: 110, textAlign: "center", color: colors.text }}>
        2024 May{" "}
      </Text>
      <Ionicons name="chevron-forward" size={24} color={colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MonthPicker;
