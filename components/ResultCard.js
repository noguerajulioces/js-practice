import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ResultCard({ payment, description }) {
  return (
    <View style={styles.result}>
      <FontAwesome name="lock" size={24} color="#fff" style={styles.icon} />
      <Text style={styles.resultText}>{payment}</Text>
      <Text style={styles.resultLabel}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#004e89',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  resultText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultLabel: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
});
