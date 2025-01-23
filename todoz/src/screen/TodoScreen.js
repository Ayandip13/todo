import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { FlatList } from "react-native";
import Fallback from "./components/Fallback";

const TodoScreen = () => {
  // initialize the local state
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState();

  //function to add todo into the list by pressing add button
  const handleAddTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]); //This '...todoList' spreads the existing todoList array into a new array, ensuring we don't directly modify the state.
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const filterdItem = todoList.filter((e) => e.id !== id);
    setTodoList(filterdItem);
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo)
    setTodo(todo.title)
  };

  const handleUpdateTodo = () =>{
    const updateTodoList = todoList.map((item)=>{
      if (item.id === editedTodo.id) {
        return {...item, title:todo}
      }

      return item      
    })
    setTodoList(updateTodoList)
    setEditedTodo(null)
    setTodo("")
  }


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
          paddingVertical: 8,
          paddingHorizontal: 8,
          flexDirection: "row",

          // shadowColor: "black",
          // shadowOffset: { width: 0, height: 4 },
          // shadowOpacity: 1,
          // shadowRadius: 3,

          elevation: 7,
        }}
      >
        <IconButton
          iconColor="#fff"
          icon="pencil"
          onPress={() => handleEditTodo(item)}
        />
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
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
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
      {
        editedTodo? <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 30,
          alignItems: "center",
        }}
        onPress={handleUpdateTodo}
        activeOpacity={0.7}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Save
        </Text>
      </TouchableOpacity> : <TouchableOpacity
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
      }

      <FlatList
        showsVerticalScrollIndicator={false}
        data={todoList}
        renderItem={renderTodos}
      />
      {todoList <= 0 && <Fallback />}
    </SafeAreaView>
  );
};

export default TodoScreen;