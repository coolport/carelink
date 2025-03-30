import { Tabs } from 'expo-router';
// expo-router is a wrapper of react-navigatoin (its what happens under the hood) 
// so all options etc and docs are under react-navigatoin
// expo-router = react-navigation + file based routing, its a light wrapper like other expo utils
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Header } from '@/components/ui/Header'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  //this is the layout file for this group / navigator. defines routes below using expo Tabs
  //here also is defined the actual nav bar..  may styles din navbar sa outermoost / root layout.but thats only for setting dark/light mode
  //here u can fine tune.. etc.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: "white", // inactive tab color
        tabBarStyle: {
          backgroundColor: "#f68181",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 9,
          paddingTop: 5,
        },

        tabBarLabelStyle: {
          fontSize: 15,
          margin: 0,
        },
        headerShown: false,
      }}
    >


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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="searchb" color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="messageb" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="profilebutton" color={color} />,
        }}
      />
      {/* <Tabs.Screen */}
      {/*   name="register" */}
      {/*   options={{ */}
      {/*     title: 'Register', */}
      {/*     tabBarIcon: ({ color }) => <IconSymbol size={28} name="profilebutton" color={color} />, */}
      {/*   }} */}
      {/* /> */}
      {/* <Tabs.Screen */}
      {/*   name="login" */}
      {/*   options={{ */}
      {/*     title: 'Login', */}
      {/*     tabBarIcon: ({ color }) => <IconSymbol size={28} name="profilebutton" color={color} />, */}
      {/*   }} */}
      {/* /> */}
    </Tabs >
  );
}
