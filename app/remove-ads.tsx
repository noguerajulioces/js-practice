import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RemoveAds() {
  const router = useRouter();
  return (
    <View style={{flex:1, backgroundColor: '#fff', justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18}}>Contact Page</Text>
      <Button onPress={() => router.back()} title='Go Back' />
    </View>
  )
}