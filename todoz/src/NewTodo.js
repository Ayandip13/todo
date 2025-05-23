import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";

const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const addTodo = () => {
    if (todo === "") return;
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleDelete = ({ id }) => {
    const NewTodoObj = todoList.filter((i) => i.id !== id);
    setTodoList(NewTodoObj);
  };
  const handleUpdate = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const saveTodo = () => {
    const updateList = todoList.map((e) => {
      if (e.id === editedTodo.id) {
        return { ...e, title: todo };
      }
      return e;
    });
    setTodoList(updateList);
    setEditedTodo(null);
    setTodo("");
  };

  const renderTodos = ({ item }) => {
    return (
      <View style={styles.todoCard}>
        <IconButton
          icon="pencil"
          onPress={() => handleUpdate(item)}
          iconColor="#929AAB"
        />
        <Text style={styles.todoText}>{item.title}</Text>
        <IconButton
          onPress={() => handleDelete(item)}
          icon="trash-can"
          iconColor="#929AAB"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ marginTop: 30, marginHorizontal: 30 }}>
      <TextInput
        onChangeText={(e) => setTodo(e)}
        style={styles.input}
        placeholder="Enter your task"
      />

      {editedTodo ? (
        <TouchableOpacity
          onPress={saveTodo}
          activeOpacity={0.7}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={addTodo}
          activeOpacity={0.7}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}

      <FlatList
        style={styles.flatlist}
        data={todoList}
        renderItem={renderTodos}
      />
    </SafeAreaView>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EEEEEE",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    color: "black",
    borderColor: "#393E46",
    marginTop: 30,
    marginBottom: 10,
    elevation: 8,
  },
  addButton: {
    backgroundColor: "#929AAB",
    elevation: 20,
    borderWidth: 2,
    borderColor: "#F1F1F1",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 80,
  },
  buttonText: {
    textAlign: "center",
  },
  todoCard: {
    backgroundColor: "#EEEEEE",
    height: 50,
    width: 285,
    justifyContent: "center",
    borderRadius: 9,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginLeft: 10,
    elevation: 10,
    marginBottom: 10,
    borderWidth: 0.1,
  },
  todoText: {
    color: "#393E46",
  },
  flatlist: {
    marginTop: 50,
  },
});
