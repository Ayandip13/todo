import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import {iconButton} from 'react-native-paper' 

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

  // items that we're gonna render inside flatlist to show 

  const renderTodos = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 8,
          marginBottom: 12,
          paddingVertical: 12,
          paddingHorizontal: 8,
        }}
      >
        <Text style={{ color: "white", textAlign:'center', fontSize:20, fontWeight:400}}>
          {item.title}
        </Text>
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
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 30,
          alignItems: "center",
        }}
        activeOpacity={0.7}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      <FlatList data={dummyData} renderItem={renderTodos} />
    </SafeAreaView>
  );
};

export default TodoScreen;
