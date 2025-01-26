// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import { IconButton } from "react-native-paper";
// import Fallback from "./components/Fallback";

// const TodoScreen = () => {
//   // Local state to track the current task being entered
//   const [todo, setTodo] = useState("");

//   // Local state to track the list of tasks
//   const [todoList, setTodoList] = useState([]);

//   // Local state to track the task being edited
//   const [editedTodo, setEditedTodo] = useState(null);

//   // Function to add a new task to the list
//   const handleAddTodo = () => {
//     if (todo.trim() === "") return; // Prevent adding empty tasks
//     setTodoList([...todoList, { id: Date.now().toString(), title: todo }]); // Add a new task with a unique ID
//     setTodo(""); // Clear the input field
//   };

//   // Function to delete a task from the list
//   const handleDeleteTodo = (id) => {
//     const filteredList = todoList.filter((item) => item.id !== id); // Remove the task with the specified ID
//     setTodoList(filteredList);
//   };

//   // Function to prepare a task for editing
//   const handleEditTodo = (todo) => {
//     setEditedTodo(todo); // Set the task to be edited
//     setTodo(todo.title); // Populate the input field with the task's title
//   };

//   // Function to update the edited task
//   const handleUpdateTodo = () => {
//     const updatedList = todoList.map((item) => {
//       if (item.id === editedTodo.id) {
//         return { ...item, title: todo }; // Update the task's title
//       }
//       return item; // Leave other tasks unchanged
//     });
//     setTodoList(updatedList); // Update the task list with the modified task
//     setEditedTodo(null); // Clear the edited task state
//     setTodo(""); // Clear the input field
//   };

//   // Function to render individual tasks in the FlatList
//   const renderTodos = ({ item }) => {
//     return (
//       <View style={styles.todoItem}>
//         {/* Edit button */}
//         <IconButton
//           icon="pencil"
//           iconColor="#fff"
//           onPress={() => handleEditTodo(item)}
//         />
//         {/* Task title */}
//         <Text style={styles.todoText}>{item.title}</Text>
//         {/* Delete button */}
//         <IconButton
//           icon="trash-can"
//           iconColor="#fff"
//           onPress={() => handleDeleteTodo(item.id)}
//         />
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Input field for adding or editing tasks */}
//       <TextInput
//         style={styles.input}
//         placeholder="Add a Task"
//         value={todo}
//         onChangeText={(e) => setTodo(e)}
//       />

//       {/* Button to add or save tasks based on the current state */}
//       {editedTodo ? (
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleUpdateTodo}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleAddTodo}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.buttonText}>Add</Text>
//         </TouchableOpacity>
//       )}

//       {/* FlatList to display the list of tasks */}
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={todoList} // Data source for the list
//         renderItem={renderTodos} // Function to render each task
//       />

//       {/* Fallback component to display a message when the list is empty */}
//       {todoList.length === 0 && <Fallback />}
//     </SafeAreaView>
//   );
// };



// // Stylesheet for the component
// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 15,
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: "#1e90ff",
//     borderRadius: 6,
//     marginTop: 60,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   button: {
//     backgroundColor: "black",
//     borderRadius: 6,
//     paddingVertical: 8,
//     marginVertical: 30,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   todoItem: {
//     backgroundColor: "#1e90ff",
//     borderRadius: 8,
//     marginBottom: 12,
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 8,
//     paddingHorizontal: 8,
//     flexDirection: "row",
//     elevation: 7,
//   },
//   todoText: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "400",
//   },
// });

// export default TodoScreen;
