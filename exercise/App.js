import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PasswordGenerator from './src/PasswordGenerator';
import Portfolio from './src/Portfolio';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <PasswordGenerator/> */}
      <Portfolio/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#164863',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});