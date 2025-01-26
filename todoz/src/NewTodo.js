import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const renderTodos = ({item}) => {
    return(
    <View style={styles.todoCard}>
      <Text style={styles.todoText}>{item.title}</Text>
    </View>
    )
  };

  return (
    <SafeAreaView style={{ marginTop: 30, marginHorizontal: 30 }}>
      <TextInput
        onChangeText={(e) => setTodo(e)}
        style={styles.input}
        placeholder="Enter your task"
      />
      <TouchableOpacity
        onPress={addTodo}
        activeOpacity={0.7}
        style={styles.addButton}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodos} />
    </SafeAreaView>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FBFBFB",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    borderRadius: 5,
    color: "black",
    marginTop: 30,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#B7E0FF",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 80,
  },
  buttonText: {
    textAlign: "center",
  },
});
