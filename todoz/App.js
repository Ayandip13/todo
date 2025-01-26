import { SafeAreaView, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import NewTodo from "./src/NewTodo";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        {/* <TodoScreen /> */}
        <NewTodo/>
      </View>
    </SafeAreaView>
  );
}
