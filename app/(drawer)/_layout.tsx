import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';

const CustomDrawerContent = (props: any) => {
  const { t } = useTranslation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={t('commonScreen.drawer.removeAds')}
        icon={() => <FontAwesome name="ban" size={25} color="#000" /> }
        onPress={() => {
          router.push('/remove-ads')
        }}
      />
      <DrawerItem
        label={t('commonScreen.drawer.language')}
        icon={() => <FontAwesome name="language" size={25} color="#000" /> }
        onPress={() => {
          router.push('/language')
        }}
      />
      <DrawerItem
        label={t('commonScreen.drawer.sharedAndWin')}
        icon={() => <FontAwesome name="share" size={25} color="#000" /> }
        onPress={() => {
          router.push('/(drawer)/(tabs)/loans')
        }}
      />
      <DrawerItem
        label={t('commonScreen.drawer.rateUs')}
        icon={() => <FontAwesome name="star" size={25} color="#000" /> }
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