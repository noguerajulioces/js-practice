import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

const CustomDrawerContent = (props: any) => {
  const { t } = useTranslation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={t('commonScreen.drawer.removeAds')}
        onPress={() => {
          router.push('/remove-ads')
        }}
      />
      <DrawerItem
        label={t('commonScreen.drawer.language')}
        onPress={() => {
          router.push('/language')
        }}
      />
      <DrawerItem
        label={t('commonScreen.drawer.sharedAndWin')}
        onPress={() => {
          router.push('/(drawer)/(tabs)/loans')
        }}
      />
      <DrawerItem
        label={t('commonScreen.drawer.rateUs')}
        onPress={() => {
          router.push('/(drawer)/(tabs)/loans')
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false}} >
    </Drawer>
  );
}

const styles = StyleSheet.create({
  viewContainer : {
    backgroundColor: '#FF323f',
  }
});
