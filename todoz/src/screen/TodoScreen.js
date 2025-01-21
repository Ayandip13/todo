import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

const TodoScreen = () => {
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

  return (
    <SafeAreaView style={{ marginHorizontal: 15 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a Task"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderRadius: 6,
          paddingVertical: 8,
          marginTop: 24,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

        <FlatList
        data={dummyData}
        renderItem={renderTodos}
        />


    </SafeAreaView>
  );
};

export default TodoScreen;
