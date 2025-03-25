import { Tabs } from 'expo-router';
// expo-router is a wrapper of react-navigatoin (its what happens under the hood) 
// so all options etc and docs are under react-navigatoin
// expo-router = react-navigation + file based routing, its a light wrapper like other expo utils
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  //this is the layout file for this group / navigator. defines routes below using expo Tabs
  //here also is defined the actual nav bar..  may styles din navbar sa outermoost / root layout.but thats only for setting dark/light mode
  //here u can fine tune.. etc.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: "white", // inactive tab color
        tabBarStyle: {
          backgroundColor: "#f68181",
          borderTopWidth: 0,
          height: 75,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 17,
          margin: 0,
          padding: 0,
        },
      }}>
      {/* creating files will automatically make a route, u dont even have to explicilty speciify things here.. though you should */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs >
  );
}
