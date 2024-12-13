import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { calculatePayment, formatNumber, formatCurrency } from '../../../utils/loanCalculator';

export default function HomeScreen() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');
  const [payment, setPayment] = useState(0); // Estado para almacenar el resultado

  const { t } = useTranslation();

  // Efecto para recalcular el resultado cuando cambien los valores
  useEffect(() => {
    setPayment(calculatePayment(amount, interest, duration));
  }, [amount, interest, duration]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.form}>
          {/* Cantidad del préstamo */}
          <View style={styles.inputRow}>
            <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder={t('MainScreen.form.inputs.placeholder.amount')}
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={amount}
              onChangeText={(value) => {
                const numericValue = value.replace(/,/g, '');
                setAmount(formatNumber(numericValue));
              }}
            />
          </View>

          {/* Tasa de interés */}
          <View style={styles.inputRow}>
            <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder={t('MainScreen.form.inputs.placeholder.interest')}
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={interest}
              onChangeText={(value) => {
                const newValue = value.replace(/,/g, '');
                setInterest(formatNumber(newValue));
              }}
            />
          </View>

          {/* Duración */}
          <View style={styles.inputRow}>
            <FontAwesome name="unlock-alt" size={24} color="#004e89" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder={t('MainScreen.form.inputs.placeholder.duration')}
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={duration}
              onChangeText={(value) => {
                const newValue = value.replace(/,/g, '');
                setDuration(formatNumber(newValue));
              }}
            />
            <Text style={styles.unit}>{t('MainScreen.form.inputs.unit')}</Text>
          </View>
        </View>

        {/* Resultado */}
        <View style={styles.result}>
          <FontAwesome name="lock" size={24} color="#fff" style={styles.resultIcon} />
          <Text style={styles.resultText}>
            {t('MainScreen.form.result.text', { payment: formatCurrency(payment) })}
          </Text>
          <Text style={styles.resultLabel}>{t('MainScreen.form.result.label')}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
