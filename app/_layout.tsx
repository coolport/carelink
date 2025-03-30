import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { MessagesProvider } from './context/MessagesContext'

import { useColorScheme } from '@/hooks/useColorScheme';

import { ChatProvider } from './context/ChatContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //root layout / root file (outermost)
  //each jsx file in /app becomes a route.[2 uses: navigator group / dynamic routing(url params)]
  //folders group related screens or navigators 
  //3 types of navigators: stack (push,pop / traditional), tab navigator(bottom bar like this app), drawer (side menu)


  return (
    <MessagesProvider>

      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ChatProvider>

          <Stack>
            {/* you can add other routes here, but folders take presendence, espeicllay with an index.jsx
        also you need to add indiv files before (tabs) or other grps.. u can acces them but grps will visually load first*/}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="emailSent" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar hidden={true} />
        </ChatProvider>
      </ThemeProvider>
    </MessagesProvider >
  );
}
