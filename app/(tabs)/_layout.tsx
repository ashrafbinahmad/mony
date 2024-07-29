import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import Colors, { colors } from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Text, View } from "@/components/Themed";
import Header, { HeaderLeft, HeaderRight } from "@/components/Header";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => <HeaderRight />,
        headerTitle: () => <Header />,
        headerTitleAlign: "center",
        headerLeft: () => <HeaderLeft />,
        headerStyle: {
          height: 150,
          borderBottomColor: colors.accent,
          borderBottomWidth: 2,
          backgroundColor: colors.bg,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

          // () => (
          //   <Link href="/modal" asChild>

          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: "transactions",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="circle-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          // title: 'otes',
          tabBarLabel: () => <Text>Notes</Text>,

          tabBarIcon: ({ color }) => (
            <TabBarIcon name="sticky-note" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
