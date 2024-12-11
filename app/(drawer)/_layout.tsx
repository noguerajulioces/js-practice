import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Quitar Anuncios"
        onPress={() => {
          router.push('/(drawer)/(tabs)/donate')
        }}
      />
      <DrawerItem
        label="Idioma"
        onPress={() => {
          router.push('/(drawer)/(tabs)/loans')
        }}
      />
      <DrawerItem
        label="Comparte y gana"
        onPress={() => {
          router.push('/(drawer)/(tabs)/loans')
        }}
      />
      <DrawerItem
        label="Califícanos"
        onPress={() => {
          router.push('/(drawer)/(tabs)/loans')
        }}
      />

      <View style={styles.viewContainer}>
        <Text>test</Text>
      </View>
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
