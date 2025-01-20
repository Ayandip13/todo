import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TodoCard = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => setIsActive(!isActive)}
    >
      <View style={styles.todoContainer}>
        <MaterialIcons
          name={isActive ? "radio-button-checked" : "radio-button-off"}
          size={24}
          color={isActive ? "black" : "#7A7777"}
        />
        <Text style={[isActive ? styles.title : styles.inactiveTitle]}>
          TodoCard
        </Text>
      </View>
      <Text style={[styles.time, isActive && { color: "#7A7777" }]}>Time</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(32,31,31,0.2)",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    fontWeight: "400",
    color: "black",
  },
  inactiveTitle: {
    fontSize: 18,
    color: "#7A7777",
    fontWeight: "300",
    textDecorationLine: "line-through",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10",
  },
});

export default TodoCard;
