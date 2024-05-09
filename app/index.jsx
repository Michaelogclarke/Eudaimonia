import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Header } from "react-native/Libraries/NewAppScreen";

const Michaelog = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        height: 100,
        width: 100,
        left: 20,
        top: 20,
      }}
    >
      <GestureHandlerRootView
        style={{
          backgroundColor: "white",
          top: 100,
        }}
      >
        <TouchableOpacity>
          <Text href="/home">John</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>

      <Text></Text>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "red",
          height: 100,
          width: 100,
          left: 100,
        }}
      >
        <Text>Red box</Text>
      </View>
      <View>
        {/* <Link href="/home" style={{ color: "blue" }}>
          home
        </Link> */}
      </View>
    </View>
  );
};

export default Michaelog;
