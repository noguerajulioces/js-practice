import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { calculatePayment, formatNumber, formatCurrency, totalToPay, getCapital, getFees, validateValue } from '../../../utils/loanCalculator';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;


export default function HomeScreen() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');
  const [payment, setPayment] = useState('0.00'); // Estado para almacenar el resultado

  const { t } = useTranslation();

  const pieData = [
    {
      name: 'Interés total',
      population: validateValue(getFees(payment, amount, duration)),
      color: 'rgba(255, 99, 132, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Montante do empréstimo',
      population: validateValue(getCapital(amount)),
      color: 'rgba(54, 162, 235, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

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

        {/* Contenedor Secondario */}
        <View style={styles.container_2}>
          {/* Reembolso Total */}
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Reembolso total:</Text>
            <Text style={styles.summaryValue}>{ formatCurrency(totalToPay(payment, duration)) }</Text>
          </View>

          {/* Gráfico Circular */}
          <PieChart
            data={pieData}
            width={screenWidth}
            height={180}
            chartConfig={{
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="0"
          />

          {/* Botones */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Tabela de Amortização</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Salvar empréstimo</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
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
    fontSize: 20,
    color: '#333',
  },
  unit: {
    color: '#777',
    fontSize: 14,
    marginLeft: 5,
  },
  result: {
    backgroundColor: '#004e89',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
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
  container_2: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  summary: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 15,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#7F7F7F',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004e89',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#004e89',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
