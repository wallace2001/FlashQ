import { useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { MobileProivder } from './src/context/context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import useColorScheme from './src/hooks/use-color-scheme';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import {
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold_Italic,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Router } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalEditFolder } from "./src/components/modal-edit-folder";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_700Bold_Italic,
    Poppins_700Bold,
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
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MobileProivder>
          <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="dark" />
            <ModalEditFolder />
            <Router colorScheme={colorScheme}/>
          </SafeAreaView>
        </MobileProivder>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE8FE',
  },
});
