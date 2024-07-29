import { Appearance } from "react-native";


const colorScheme = Appearance.getColorScheme();

// const tintColorLight = "#f8826d";
// const tintColorDark = "#F3B8AD";

interface Colors {
  text: string;
  accentText: string;
  accent: string;
  green: string;
  red: string;
  iconBg: string;
  greenBg: string;
  redBg: string;
  tabBg: string;
  bg: string;
  border: string;
}

export const colors: Colors = colorScheme === "dark" ? {
  text: "#BBBBBB",
  accentText: "#DDCECB",
  accent: "#F3B8AD",
  green: "#499C81",
  red: "#DD526F",
  iconBg: "#282321",
  greenBg: "#212822",
  redBg: "#2D1C1A",
  tabBg: "#302725",
  bg: "#201B18",
  border: "#3D3937",
}: {
  text: "#000",
  accentText: "#000",
  accent: "#f8826d",
  green: "#499C81",
  red: "#DD526F",
  iconBg: "#282321",
  greenBg: "#212822",
  redBg: "#2D1C1A",
  tabBg: "#302725",
  bg: "#DDCECB",
  border: "#3D3937"
};

export default {
  light: {
    text: "#000",
    background: "#ffffff",
    tint: "#F3B8AD",
    tabIconDefault: "#ccc",
    tabIconSelected: "#f8826d",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: "#F3B8AD",
    tabIconDefault: "#ccc",
    tabIconSelected: "#f8826d",
  },
};
