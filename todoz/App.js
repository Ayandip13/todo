import { SafeAreaView, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import NewTodo from "./src/NewTodo"
import PasswordGenerator from "./src/passwordGenerator";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        {/* <TodoScreen /> */}
        <NewTodo/>
        {/* <PasswordGenerator/> */}
      </View>
    </SafeAreaView>
  );
}
