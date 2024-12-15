import { router, Tabs } from 'expo-router';
import React from 'react';
import { Button, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('commonScreen.drawer.title'),
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: t('commonScreen.drawer.loans'),
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: t('commonScreen.drawer.donate'),
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />
    </Tabs>
  );
}
