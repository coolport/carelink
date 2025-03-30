import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: "white",

        // Standard tab bar style
        tabBarStyle: {
          height: 70,
          paddingTop: '2%',
          width: '90%',
          marginBottom: 20,
          marginTop: 20,
          borderRadius: 20,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          alignSelf: 'center',
          backgroundColor: "#9E110D",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,                     // Android shadow
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="searchb" color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="messageb" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="profilebutton" color={color} />,
        }}
      />
    </Tabs>
  );
}
