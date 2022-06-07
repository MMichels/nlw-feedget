import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import  Widget  from './src/components/Widget';
import { theme } from './src/theme';

import * as Font from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
          await SplashScreen.preventAutoHideAsync();
          await Font.loadAsync({
            Inter_400Regular,
            Inter_500Medium
          });        
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {

    if(appIsReady){
       await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady) 
    return null;

  return (
    <View style={{
        flex: 1,
        backgroundColor: theme.colors.background 
      }}
      onLayout={onLayoutRootView}
    >
      <StatusBar 
        style="light" 
        backgroundColor="transparent"
        translucent
      />
      <Widget />
    </View>
  );
}
