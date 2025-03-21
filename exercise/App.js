import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PasswordGenerator from './src/PasswordGenerator';
import Portfolio from './src/Portfolio';
import Weather from './src/Weather';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PasswordGenerator/>
      {/* <Portfolio/> */}
      {/* <Weather/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#578FCA',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});