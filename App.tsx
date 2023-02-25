import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MobileProivder } from './src/context/context';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <MobileProivder>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Home />
      </SafeAreaView>
    </MobileProivder>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#160044',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
