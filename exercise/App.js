import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PasswordGenerator from './src/PasswordGenerator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PasswordGenerator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C7285',
    color:'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
