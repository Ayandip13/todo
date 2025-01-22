import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { IconButton, iconButton } from "react-native-paper";

const dummyData = [
  {
    id: 1,
    title: "Read a Book",
  },
  {
    id: 2,
    title: "wakeup at 7 AM",
  },
];

const TodoScreen = () => {
  // initialize the local state
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  //function to add todo into the list by pressing add button
  const handleAddTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]); //This '...todoList' spreads the existing todoList array into a new array, ensuring we don't directly modify the state.
  };

  // items that we're gonna render inside flatlist to show
  const renderTodos = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 8,
          marginBottom: 12,
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 12,
          paddingHorizontal: 8,
          flexDirection: "row",
        }}
      >
        <IconButton iconColor="#fff" icon="pencil" />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          {item.title}
        </Text>
        <IconButton icon="trash-can" iconColor="#fff" />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 15 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          marginTop: 60,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a Task"
        value={todo}
        onChangeText={(e) => setTodo(e)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 30,
          alignItems: "center",
        }}
        onPress={handleAddTodo}
        activeOpacity={0.7}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodos} />
    </SafeAreaView>
  );
};

export default TodoScreen;
