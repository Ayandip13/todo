import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
