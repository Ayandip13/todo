import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";
import ActionButton from "../components/ActionButton";

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todoContainer}>
        <TodoCard />
        <TodoCard />
      </View>
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  todoContainer: {
    padding: 20,
    gap: 10,
  },
});

export default index;
