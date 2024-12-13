import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function InputField({ label, value = '', setValue, suffix = '', formatter }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = () => {
    setIsEditing(false);
  };  

  const handleFocus = () => {
    setIsEditing(true);

  };

  return (
    <View style={styles.inputRow}>
      <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={label}
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={isEditing ? value : formatter ? formatter(value || '') : value}
        onChangeText={(text) => setValue(text.replace(/[^0-9.]/g, ''))}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {suffix ? <Text style={styles.suffix}>{suffix}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: '#333',
  },
  suffix: {
    color: '#777',
    fontSize: 14,
    marginLeft: 5,
  },
});
