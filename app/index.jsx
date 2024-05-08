import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Michaelog = () => {
  return (
    <View style={{ backgroundColor: "blue", height: 100, width: 100 }}>
      <Text>Beth smells, Lovely</Text>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "red",
          height: 100,
          width: 100,
          left: 100,
          bottom: 34,
        }}
      >
        <Text>HEllo</Text>
      </View>
      <View>
        <Link href="/home" style={{ color: "blue" }}>
          home
        </Link>
      </View>
    </View>
  );
};

export default Michaelog;
