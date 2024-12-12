import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');

  const calculatePayment = () => {
    if (!amount || !interest || !duration) return 0;

    const principal = parseFloat(amount);
    const rate = parseFloat(interest) / 100 / 12;
    const months = parseInt(duration, 10);

    return ((principal * rate) / (1 - Math.pow(1 + rate, -months))).toFixed(2);
  };

  const { t } = useTranslation();

  return (
    <View style={styles.container}>  
      <View style={styles.form}>
        <View style={styles.inputRow}>
          <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={t('MainScreen.form.inputs.placeholder.amount')}
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
    
        <View style={styles.inputRow}>
          <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={t('MainScreen.form.inputs.placeholder.interest')}
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={interest}
            onChangeText={setInterest}
          />
        </View>
    
        <View style={styles.inputRow}>
          <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={t('MainScreen.form.inputs.placeholder.duration')}
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
          />
          <Text style={styles.unit}>{t('MainScreen.form.inputs.unit')}</Text>
        </View>
      </View>
    
      <View style={styles.result}>
        <FontAwesome name="lock" size={24} color="#fff" style={styles.resultIcon} />
        <Text style={styles.resultText}>{t('MainScreen.form.result.text', { payment: calculatePayment() })}</Text>
        <Text style={styles.resultLabel}>{t('MainScreen.form.result.label')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#004e89',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    padding: 20,
  },
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
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  unit: {
    color: '#777',
    fontSize: 14,
    marginLeft: 5,
  },
  result: {
    backgroundColor: '#004e89',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  resultIcon: {
    marginBottom: 10,
  },
  resultText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
