import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ActionButton = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <MaterialIcons name="add" style={styles.icon} />{" "}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor:"skyblue",
    width:70,
    height:70,
    borderRadius:70,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:50,
    right:24
  },
  icon: {
    fontSize:40,
    color:'white',
  },
});

export default ActionButton;
