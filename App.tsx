// import { useFonts } from 'expo-font';
import { loadAsync } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from "@/config/Fonts";
import AppNavigator from "@/navigation/AppNavigator";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts using Expo's Font.loadAsync
        await loadAsync(fonts);

        // Hide SplashScreen when both conditions are met
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.log("Error: ", e);
        // Toast.show(e.message);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [appIsReady]);



  if (!appIsReady) {
    return null;
  }
  return (
    <AppNavigator />
  );
}

