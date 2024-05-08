import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const home = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        height: 100,
        width: 100,
      }}
    >
      <StatusBar style="auto" />
      <Text>home</Text>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
