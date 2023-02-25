import { useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MobileProivder } from './src/context/context';
import { Home } from './src/screens/Home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SignUp } from "./src/screens/SignUp";
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { Login } from "./src/screens/Login";
import { COLORS } from "./constants/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium, 
    Ubuntu_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MobileProivder>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="light" />
        <SignUp />
      </SafeAreaView>
    </MobileProivder>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue_background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
